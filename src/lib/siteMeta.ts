/**
 * Single source of truth for site identity, FAQ content and testimonials.
 *
 * ⚠️ The FAQ lives here and NOWHERE else. Both the visible <Faq /> block and the
 * FAQPage JSON-LD render from this same array, so the visible text and the
 * structured data cannot drift apart. Mismatched visible/schema text is a known
 * way to get structured data ignored; making them one object removes the failure
 * mode instead of relying on someone remembering to update both.
 */

export const SITE = {
  name: 'SDB Social Impact LLC',
  alternateName: 'SDBSI',
  url: 'https://sdbsocialimpact.com',
  /**
   * Public contact address. Deliberately the shared inbox, not stacey@ — the
   * contact form already delivers here, and publishing a second address would
   * split inbound mail across two mailboxes.
   */
  email: 'hello@sdbsocialimpact.com',
  /**
   * Publishing a phone number is a one-way door, so it is OFF until Stacey says
   * otherwise. Set to the E.164 string (e.g. '+1-719-828-3398') to publish it in
   * the structured data; null omits the property entirely.
   */
  telephone: null as string | null,
  areaServed: 'US',
} as const;

export const PERSON = {
  name: 'Stacey Burns',
  jobTitle: 'Founder and Principal',
  description:
    'Fractional and interim COO/Strategist and Social Return on Investment (SROI) consultant with over 25 years in nonprofit and social impact operations and nearly 20 years doing SROI work.',
  url: `${SITE.url}/about`,
} as const;

/**
 * Outside corroboration is the strongest entity signal available to answer
 * engines — it is what lets them confirm a real practitioner rather than a page
 * of self-description.
 *
 * ⚠️ EMPTY ON PURPOSE. These must be real, live URLs that Stacey controls or
 * appears on — LinkedIn profile, the book's retailer or publisher page, the
 * conference session page. A fabricated or dead URL is worse than none, so the
 * `sameAs` property is omitted from the JSON-LD entirely while this is empty.
 */
export const SAME_AS: string[] = [];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What's the difference between an interim COO and a fractional COO?",
    answer:
      'An interim COO steps in full-time for a defined period — often while an organization searches for a permanent hire. A fractional COO (or Strategist) works part-time on an ongoing basis, giving an organization executive-level operational leadership without a full-time salary. I offer both, scoped to what your organization actually needs.',
  },
  {
    question: 'Do you offer executive coaching?',
    answer:
      "Not as a stand-alone service. Leadership coaching happens naturally as part of every interim and fractional engagement — because I'm not coaching from the sidelines, I'm in the operational seat with you, which means the coaching is grounded in the real decisions your organization is making that week, not a separate hour on the calendar.",
  },
  {
    question: 'What is Social Return on Investment (SROI)?',
    answer:
      "SROI is a methodology for translating an organization's social impact into a defensible, funder-ready number — showing the value created relative to the investment made. My model breaks that value into three tiers (Established, Probable, and Possible) based on how solid the underlying data is, so you're never overstating your case.",
  },
  {
    question: 'How long does an engagement typically last?',
    answer:
      'There’s no set timeline. Every engagement is scoped around what your organization actually needs — which is the whole idea behind "I stay as long as I’m needed." The best way to get a real answer is to tell me what’s going on, and we’ll figure out the right scope together.',
  },
  {
    question: 'How much does a fractional or interim COO engagement (or an SROI project) cost?',
    answer:
      "Pricing is scope-based and built around your specific project, not a flat rate — every organization's needs are different enough that a generic number on a page wouldn't be honest. Reach out and we'll talk through what makes sense for you.",
  },
  {
    question: 'What kinds of organizations do you work with?',
    answer: 'Nonprofits and social enterprises.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

/**
 * Real, attributed quotes from reference letters. These replaced two fabricated
 * testimonials ("Maria Chen", "James Rodriguez") that were live on the homepage,
 * one of which carried an invented statistic. Do not add a quote here that is not
 * from a named, real person who gave it.
 */
export const TESTIMONIAL_COO: Testimonial = {
  quote:
    'Perhaps her most enduring accomplishment was leading the process to identify, recruit, and successfully transition a permanent Chief Operations Officer for the organization while providing strategic and mindful coaching to me as the CEO… Rather than simply managing the role, Stacey strengthened the organization for the future.',
  name: 'Kris Lewis',
  title: 'CEO',
  org: 'Pikes Peak Habitat for Humanity',
};

export const TESTIMONIAL_SROI: Testimonial = {
  quote:
    "It's one thing to feel in your heart that your organization is doing good for the community — it's another thing altogether to find a way to measure that in a way that is valid, objective and reliable while still honoring the human value of community-based work. Working with Stacey's team was a pleasure, from the conversations we had to scope the project through to the final results, because their questions and analyses are based in that shared mission of conveying the value of human capital. The SROI that they calculated is now a key part of our messaging on the value of investing in United Way Suncoast.",
  name: 'Josh Dunn',
  title: 'Senior Vice President, Community Impact',
  org: 'United Way Suncoast',
};

export const SERVICES = {
  coo: {
    name: 'Interim & Fractional COO / Strategist',
    path: '/interim-fractional-coo',
  },
  sroi: {
    name: 'Social Return on Investment (SROI)',
    path: '/sroi',
  },
} as const;
