# SDBSI Website Copy — First Draft

A few notes before the copy: everything below follows your stated rules — "we" throughout except the About section (where "I" is preferred), no "overseeing finances" language in the COO description, no rigid one-size-fits-all process language, and your evergreen bio wording. Anywhere I made a judgment call instead of following an explicit instruction, I've flagged it so you can overrule it easily.

---

## Site Map (recommended)

A narrow hub-and-spoke: the home page carries the full narrative, everything else exists for people who already know what they're looking for.

```
sdbsocialimpact.com/
├── /                      Home — full long-form narrative (hero → guide/about
│                          teaser → both services, briefly → proof → FAQ →
│                          final CTA). This is the primary page for referral
│                          traffic and is what we've been drafting so far.
├── /interim-fractional-coo/   Dedicated service page — deeper than the home
│                          page teaser (process, the Kris Lewis story, a
│                          fuller "what this looks like" section)
├── /sroi/                 Dedicated service page — deeper than the home page
│                          teaser (full three-tier breakdown, the Josh Dunn
│                          quote, maybe a sample of what a report includes)
├── /about/                Fuller bio — the book, your background, more
│                          personal color than the home page's shorter
│                          guide-introduction version
├── /insights/              Blog index (needed regardless, for book content
│   └── /insights/[slug]/   and thought-leadership pieces)
└── /contact/               Simple, standalone
```

Two service pages, not one shared "Services" page — each service gets to target its own search intent instead of competing for space on a single generic page (which is the trap the current live site fell into).

---

## AEO (Answer Engine Optimization)

This is about making the site legible to AI answer engines (ChatGPT, Perplexity, Google's AI Overviews, Gemini) as well as traditional search — increasingly how people find a consultant is by asking an AI "who does X" rather than searching and clicking links. A few things matter here, on top of everything else we've drafted:

**Lead with direct, self-contained answers.** AI engines lift sentences that fully answer a question without requiring the surrounding paragraph for context. Each service page should have at least one or two sentences early on that could be quoted verbatim as the answer to "what is a fractional COO" or "what is SROI" — we've mostly got this already in the service copy, but the dedicated service pages should sharpen it further.

**Add a real FAQ section**, written in the actual phrasing people (and AI engines relaying their questions) would use — not marketing copy, plain direct answers. Draft below.

**Establish you as a real, verifiable entity.** AI engines weight content more when it's backed by outside validation, not just self-description. You've got strong material for this already: two named, attributed reference letters, a keynote at a named conference, your book. Keeping your name, credentials, and business name consistent and explicit across the site (and matching your LinkedIn, any directory listings, etc.) helps engines confirm you're a real, established practitioner rather than a generic page of claims.

**Structured data (schema markup)** — a technical layer that explicitly tells search/AI engines "this is a person," "this is a service," "this is an FAQ," etc. This isn't copy, it's markup added to the page code — I can draft the actual JSON-LD once I know what platform the site runs on (Squarespace, WordPress, Wix, something custom), since the implementation path is different for each. Worth doing for the Person/About page, the two service pages (as Service or ProfessionalService), and the FAQ section (as FAQPage) specifically.

### Draft FAQ (for the home page and/or service pages)

> **What's the difference between an interim COO and a fractional COO?**
> An interim COO steps in full-time for a defined period — often while an organization searches for a permanent hire. A fractional COO (or Strategist) works part-time on an ongoing basis, giving an organization executive-level operational leadership without a full-time salary. I offer both, scoped to what your organization actually needs.

> **Do you offer executive coaching?**
> Not as a stand-alone service. Leadership coaching happens naturally as part of every interim and fractional engagement — because I'm not coaching from the sidelines, I'm in the operational seat with you, which means the coaching is grounded in the real decisions your organization is making that week, not a separate hour on the calendar.

> **What is Social Return on Investment (SROI)?**
> SROI is a methodology for translating an organization's social impact into a defensible, funder-ready number — showing the value created relative to the investment made. My model breaks that value into three tiers (Established, Probable, and Possible) based on how solid the underlying data is, so you're never overstating your case.

> **How long does an engagement typically last?**
> There's no set timeline. Every engagement is scoped around what your organization actually needs — which is the whole idea behind "I stay as long as I'm needed." The best way to get a real answer is to tell me what's going on, and we'll figure out the right scope together.

> **How much does a fractional or interim COO engagement (or an SROI project) cost?**
> Pricing is scope-based and built around your specific project, not a flat rate — every organization's needs are different enough that a generic number on a page wouldn't be honest. Reach out and we'll talk through what makes sense for you.

> **What kinds of organizations do you work with?**
> Nonprofits and social enterprises.

Both the timeline and pricing questions now point straight to contact, per your call — no numbers invented, and "every project is unique" comes through without sounding like a dodge.

### Structured data — ready to implement

Since the site's on AWS rather than a CMS like Squarespace or WordPress, you likely have direct access to the HTML, which is actually the easiest situation for this — no plugin, just paste these `<script>` blocks in. Business schema goes in the `<head>` of the home page; FAQ schema goes on whichever page(s) carry the FAQ block (probably home, possibly duplicated on the service pages if the FAQ appears there too).

**Business/Person schema** (home page `<head>`):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SDB Social Impact LLC",
  "alternateName": "SDBSI",
  "url": "https://sdbsocialimpact.com",
  "telephone": "+1-719-828-3398",
  "email": "stacey@sdbsocialimpact.com",
  "areaServed": "US",
  "founder": {
    "@type": "Person",
    "name": "Stacey Burns",
    "jobTitle": "Founder and Principal",
    "description": "Fractional and interim COO/Strategist and Social Return on Investment (SROI) consultant with over 25 years in nonprofit and social impact operations and nearly 20 years doing SROI work.",
    "url": "https://sdbsocialimpact.com/about/"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Interim & Fractional COO / Strategist",
        "url": "https://sdbsocialimpact.com/interim-fractional-coo/"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Social Return on Investment (SROI)",
        "url": "https://sdbsocialimpact.com/sroi/"
      }
    }
  ]
}
</script>
```

**FAQ schema** (wherever the FAQ block above actually lives):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between an interim COO and a fractional COO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An interim COO steps in full-time for a defined period, often while an organization searches for a permanent hire. A fractional COO (or Strategist) works part-time on an ongoing basis, giving an organization executive-level operational leadership without a full-time salary."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer executive coaching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not as a stand-alone service. Leadership coaching happens naturally as part of every interim and fractional engagement, grounded in the real decisions an organization is making that week rather than delivered as a separate coaching relationship."
      }
    },
    {
      "@type": "Question",
      "name": "What is Social Return on Investment (SROI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SROI is a methodology for translating an organization's social impact into a defensible, funder-ready number, showing the value created relative to the investment made."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an engagement typically last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no set timeline. Every engagement is scoped around the organization's specific needs, from a short project to an extended interim role."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a fractional or interim COO engagement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is scope-based and built around each organization's specific project rather than a flat rate."
      }
    }
  ]
}
</script>
```

Keep the FAQ text in the schema word-for-word identical to what's visible on the page — mismatched visible copy and schema text is a known way to get structured data ignored or penalized.

---

## Hero Section — finalized

> ### The Mary Poppins of COOs.
> Growth. Transition. Whatever kind of change your organization is navigating — I show up, build what's missing, and stay only as long as I'm needed.

---

## About Section (first person — "I")

> ### I'm Stacey Burns.
>
> With over 25 years in nonprofit and social impact operations and nearly 20 years doing Social Return on Investment (SROI) work, I've learned that most nonprofits and social enterprises aren't struggling because they lack passion — they're struggling because their operations haven't caught up to their ambition.
>
> I call myself the Mary Poppins of COOs because that's exactly how I work: I show up when steady, experienced leadership is needed, help build what's missing, and I stay as long as I'm needed — no longer, no shorter. My work centers on organizational design, leadership coaching, and strategy development, shaped around what your organization actually needs rather than a fixed process everyone gets put through.
>
> [Optional personal line — happy to draft if you want a touch of warmth here, e.g., something about life outside client work. Left out for now since I didn't want to put words about your personal life on your site without your sign-off.]

Note: the live site currently describes you in third person ("she partners with...") in this section — worth checking that the whole About block is actually in "I," not just the opening line.

---

## Service: Interim & Fractional COO (Strategist)

> ### Interim & Fractional COO
>
> I step in as your organization's operational and strategic backbone — whether that's a few hours a month as a fractional Strategist, or a full interim COO role while you search for your next permanent hire. Whether your organization calls this seat COO, Strategist, or Chief Strategy Officer, I fill it.
>
> I focus on:
>
> - **Strategy development** — turning your strategic plan into decisions your team can act on this week
> - **Organizational design** — building the structure and roles your team actually needs as you grow or change
> - **Leadership coaching** — not coaching from the sidelines, but developing the leaders already on your team in the middle of the real work, so the gains outlast my engagement
>
> There's no fixed playbook. Every engagement is scoped around your organization, your timeline, and your goals.

Deliberately left out anything about financial oversight, per your note. "Strategist" is used as the title here since you said it's interchangeable with COO — happy to make that swap the other way if you'd rather lead with "Strategist."

Voice note on strategy/CSO positioning — resolved: tagline stays exactly "The Mary Poppins of COOs," untouched, no acronym-stacking. Strategy/CSO-level positioning comes through one beat later instead: strategy leads the three focus bullets, the intro line names Chief Strategy Officer alongside COO and Strategist, and there's a direct line stating this was never just about operations. Titles and headers stay as "COO / Strategist" throughout — no "COO / CSO" anywhere.

Voice note: this section stays entirely "I," for both interim and fractional engagements. You raised a fair question — since fractional work could eventually mean multiple Strategists on different contracts at once, should this be hedged now? I'd say no: right now it's accurate that you personally sit in every seat, and "I" is doing real positioning work (the "only Mary Poppins" promise). If fractional work genuinely scales to multiple team members down the road, that's a small, contained copy edit at that point — a line or two, not a rebuild — and you'll have real proof (actual placements) to write from instead of hedged language now. Better to update the site when it's true than to soften the promise today for a someday that may look different than you're picturing.

**Real testimonial to pair with this section:**

> "Perhaps her most enduring accomplishment was leading the process to identify, recruit, and successfully transition a permanent Chief Operations Officer for the organization while providing strategic and mindful coaching to me as the CEO... Rather than simply managing the role, Stacey strengthened the organization for the future."
>
> — **Kris Lewis**, CEO, Pikes Peak Habitat for Humanity

I pulled this piece specifically because it echoes your own positioning line almost word for word — this is a real client independently describing exactly what "I stay as long as I'm needed" looks like in practice, which makes it a strong pairing with the hero tagline.

A shorter, broader-endorsement alternative from the same letter, if you'd rather lead with range instead of the succession story:

> "I recommend Stacey Burns without reservation to be a fractional c-suite leader. Her unique combination of operational expertise, program leadership, strategic thinking, data-driven decision making and talent development makes her an exceptional executive leader."
>
> — **Kris Lewis**, CEO, Pikes Peak Habitat for Humanity

---

## Service: Social Return on Investment (SROI)

> ### Social Return on Investment (SROI)
>
> For nearly 20 years, I've helped organizations prove the value of their work in language funders, boards, and investors trust. On larger engagements, I bring in a small team of trusted specialists — but every project runs through me, from scoping the questions to delivering the results.
>
> My model produces impact in three tiers, so you can speak to a funder with total confidence in what's certain and what's projected:
>
> - **Established SROI©** — built on solid, current-year data
> - **Probable SROI©** — very likely outcomes, with mild and defensible assumptions
> - **Possible SROI©** — longer-term or generational impact, clearly labeled as forward-looking
>
> Most reports lead with Established-only and total SROI figures. For investor and financial audiences, I can break out the full three-tier picture.

Voice note: this is where "I have a team" comes through — named explicitly ("a small team of trusted specialists"), but the sentence structure keeps you as the one running point. That gets you both things at once: it reads as more than a solo shop, and you're still the only Mary Poppins in the building.

**Real testimonial to pair with this section** (from the letter you just shared):

> "It's one thing to feel in your heart that your organization is doing good for the community — it's another thing altogether to find a way to measure that in a way that is valid, objective and reliable while still honoring the human value of community-based work. Working with Stacey's team was a pleasure, from the conversations we had to scope the project through to the final results, because their questions and analyses are based in that shared mission of conveying the value of human capital. The SROI that they calculated is now a key part of our messaging on the value of investing in United Way Suncoast."
>
> — **Josh Dunn**, Senior Vice President, Community Impact, United Way Suncoast

This is a strong, specific, real quote — it names the actual deliverable (an SROI calculation), a named person and title, and a recognizable organization (United Way Suncoast), which does a lot more credibility work than a generic placeholder. I'd swap this in for one of the current fake-sounding testimonials.

---

## Dedicated Service Pages — full drafts (ready for review)

Scoped for "something to show people tomorrow" — enough to evaluate message and tone, not yet production-polished (no schema, no visual design, no case studies beyond the testimonials we already have).

### Page: Interim & Fractional COO / Strategist

> ### The Mary Poppins of COOs.
> Growth. Transition. Whatever kind of change your organization is navigating — I show up, build what's missing, and stay only as long as I'm needed.

> **What this looks like**
>
> I step in as your organization's operational and strategic backbone — whether that's a few hours a month as a fractional Strategist, or a full interim role while you search for your next permanent hire. Whether your organization calls this seat COO, Strategist, or Chief Strategy Officer, I fill it — this was never only about keeping operations running, it's about shaping the strategic direction operations exist to serve.
>
> Every organization arrives at this point differently: growth that's outpaced your systems, a leadership transition, or just a season of change that needs a steady hand at the helm. There's no fixed playbook — every engagement is scoped around your organization, your timeline, and your goals.

> **Where I focus**
>
> - **Strategy development** — turning your strategic plan into decisions your team can act on this week, not a binder that sits on a shelf
> - **Organizational design** — building the structure and roles your team actually needs, shaped around how your organization actually works, not a generic org chart
> - **Leadership coaching** — not coaching from the sidelines, but developing the leaders already on your team in the middle of the real work, so the gains outlast my engagement

> **What clients say**
>
> "Perhaps her most enduring accomplishment was leading the process to identify, recruit, and successfully transition a permanent Chief Operations Officer for the organization while providing strategic and mindful coaching to me as the CEO... Rather than simply managing the role, Stacey strengthened the organization for the future."
>
> — Kris Lewis, CEO, Pikes Peak Habitat for Humanity

> **CTA:** Ready to talk about what's changing in your organization? [Contact]

---

### Page: Social Return on Investment (SROI)

> ### Prove the value of your mission.
> For nearly 20 years, I've helped organizations translate the good they do into language funders, boards, and investors trust — without losing the human story behind the numbers.

> **How it works**
>
> On larger engagements, I bring in a small team of trusted specialists — but every project runs through me, from scoping the questions to delivering the results.
>
> My model produces impact in three tiers, so you can speak to a funder with total confidence in what's certain and what's projected:
>
> - **Established SROI©** — built on solid, current-year data
> - **Probable SROI©** — very likely outcomes, with mild and defensible assumptions
> - **Possible SROI©** — longer-term or generational impact, clearly labeled as forward-looking
>
> Most reports lead with Established-only and total SROI figures. For investor and financial audiences, I can break out the full three-tier picture.

> **What clients say**
>
> "It's one thing to feel in your heart that your organization is doing good for the community — it's another thing altogether to find a way to measure that in a way that is valid, objective and reliable while still honoring the human value of community-based work. Working with Stacey's team was a pleasure, from the conversations we had to scope the project through to the final results, because their questions and analyses are based in that shared mission of conveying the value of human capital. The SROI that they calculated is now a key part of our messaging on the value of investing in United Way Suncoast."
>
> — Josh Dunn, Senior Vice President, Community Impact, United Way Suncoast

> **CTA:** Want to know the real value of your mission? [Contact]

---

**Deliberately left out of this pass** (fine for a review draft, needed before this actually goes live): the schema markup drafted earlier, a fuller About page, populated Insights/blog content, and any visual design. None of that changes what a reviewer sees when judging the message itself.

---

## Open questions for you

1. ~~**Hero subhead**~~ — resolved, Option 2.
2. ~~**Medicaid waiver depth**~~ — resolved, leaving it out entirely.
3. ~~**Testimonials**~~ — resolved on both fronts: Josh Dunn / United Way Suncoast for SROI, and Kris Lewis / Pikes Peak Habitat for Humanity for the COO/Strategist side. Both placeholder quotes ("Maria Chen"/"James Rodriguez") can come off the live site now. Just need your pick between the two Kris Lewis options above (succession story vs. broad endorsement) — or both, if there's room.
4. ~~**Fractional COO team language**~~ — resolved, staying "I" for now (see voice note above); revisit if/when fractional work actually scales to multiple team members.
5. **Page structure** — you'd described one long-form landing page; the live site is currently multi-page nav (Home/Services/About/Blog/Contact). Want me to draft this copy as one continuous page, or keep it split across the existing pages?
