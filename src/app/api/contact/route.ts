import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

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
    const { name, email, organization, service, message } = body;

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
