import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const RECAPTCHA_THRESHOLD = 0.5;
const MIN_FORM_TIME_MS = 3000; // 3 seconds

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return { success: false, score: 0 };
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  return { success: data.success, score: data.score || 0 };
}

const SERVICE_LABELS: Record<string, string> = {
  coo: 'Operational Support (1 Hour)',
  sroi: 'Impact Measurement (45 Minutes)',
  both: 'Both Services',
  other: 'Other / Not Sure',
};

export async function POST(request: NextRequest) {
  try {
    // Check for required env vars
    const missingVars = [];
    if (!process.env.SES_REGION) missingVars.push('SES_REGION');
    if (!process.env.SES_ACCESS_KEY_ID) missingVars.push('SES_ACCESS_KEY_ID');
    if (!process.env.SES_SECRET_ACCESS_KEY) missingVars.push('SES_SECRET_ACCESS_KEY');
    if (!process.env.SES_FROM_EMAIL) missingVars.push('SES_FROM_EMAIL');
    if (!process.env.SES_TO_EMAIL) missingVars.push('SES_TO_EMAIL');

    if (missingVars.length > 0) {
      return NextResponse.json(
        { error: `Missing environment variables: ${missingVars.join(', ')}` },
        { status: 500 }
      );
    }

    const ses = new SESClient({
      region: process.env.SES_REGION,
      credentials: {
        accessKeyId: process.env.SES_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.SES_SECRET_ACCESS_KEY as string,
      },
    });

    const body = await request.json();
    const { name, email, organization, service, message, website, recaptchaToken, formLoadTime } = body;

    // Honeypot check - reject if filled
    if (website) {
      console.log('Spam detected: honeypot field filled');
      return NextResponse.json({ success: true }); // Silently reject
    }

    // Time-based validation - reject if submitted too fast
    if (formLoadTime) {
      const timeSpent = Date.now() - formLoadTime;
      if (timeSpent < MIN_FORM_TIME_MS) {
        console.log(`Spam detected: form submitted too fast (${timeSpent}ms)`);
        return NextResponse.json({ success: true }); // Silently reject
      }
    }

    // reCAPTCHA verification — FAILS CLOSED, but only when protection is armed.
    //
    // The previous guard was `if (recaptchaToken)`, which SKIPPED verification whenever
    // the client failed to produce a token. That is the wrong direction: the case you
    // most need to catch (no token) was the case that bypassed the check. It was not
    // hypothetical — from 2026-01-18 to 2026-09-10 the site key was undefined in the
    // browser bundle, so no token was ever produced, so every submission skipped
    // verification and the form had no reCAPTCHA protection at all.
    //
    // "Armed" means RECAPTCHA_SECRET_KEY is configured, which is the operator's signal
    // that they intend verification. When it is absent — a local checkout with no
    // secrets — we allow the submission and say so loudly, rather than rejecting every
    // message on a developer's laptop. This is what makes it safe to arm fail-closed in
    // the same commit that fixes the key: neither environment is left unable to submit.
    const recaptchaArmed = Boolean(process.env.RECAPTCHA_SECRET_KEY);
    if (recaptchaArmed) {
      if (!recaptchaToken) {
        // 🔴 A REAL ERROR, NOT A SILENT REJECT — and the distinction is the whole point.
        //
        // Silent reject is right for a FAILED verification: a spammer should not learn they
        // were caught. It is WRONG for a MISSING token, because that is overwhelmingly a
        // broken client, not an attack — an ad blocker, a CSP, a blocked Google domain, or
        // exactly the defect this commit fixes, where the site key never reached the browser.
        //
        // ⛔ Returning `{success:true}` here would DISCARD a real enquiry and tell the visitor
        // it was sent. From 2026-01-18 to 2026-09-10 no token was ever produced, so under a
        // silent reject EVERY message in that window would have vanished with a success
        // message on screen. A loud failure the visitor can act on ("email us directly") is
        // strictly better than a quiet one nobody can see.
        //
        // The arming condition (RECAPTCHA_SECRET_KEY, server-side) is NOT evidence that the
        // SITE key reached the browser. Those are different variables and they broke apart
        // once already. This branch is what that divergence now looks like.
        console.error('Contact form: reCAPTCHA armed but no token in request — rejecting LOUDLY.');
        return NextResponse.json(
          { error: 'Could not verify your browser. Please try again, or email us directly.' },
          { status: 400 }
        );
      }
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success || recaptchaResult.score < RECAPTCHA_THRESHOLD) {
        console.log(`Spam detected: reCAPTCHA failed (score: ${recaptchaResult.score})`);
        return NextResponse.json({ success: true }); // Silently reject
      }
    } else {
      console.warn(
        'reCAPTCHA NOT armed (RECAPTCHA_SECRET_KEY unset) — submission allowed unverified.'
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const serviceLabel = service ? SERVICE_LABELS[service] || service : 'Not specified';

    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Organization: ${organization || 'Not provided'}
Service of Interest: ${serviceLabel}

Message:
${message}
    `.trim();

    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!],
      },
      Message: {
        Subject: {
          Data: `Contact Form: ${name}${organization ? ` - ${organization}` : ''}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [email],
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorName = error instanceof Error ? error.name : 'Unknown';
    return NextResponse.json(
      { error: 'Failed to send message', details: errorMessage, type: errorName },
      { status: 500 }
    );
  }
}
