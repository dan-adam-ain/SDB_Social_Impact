import { SITE, PERSON, SAME_AS, FAQS, SERVICES } from '@/lib/siteMeta';

/**
 * Renders JSON-LD. In the App Router this is a plain <script> in the component
 * tree — there is no `<head>` to paste into, and `metadata` cannot express
 * arbitrary structured data.
 */
function Script({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored in this repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization + Person, linked by @id.
 *
 * Deliberately Organization rather than ProfessionalService: that type is a
 * LocalBusiness subtype and validators expect a postal address on it. This is a
 * national consulting practice with no storefront, so claiming a local business
 * without an address is a weaker signal than describing it accurately.
 */
export function OrganizationJsonLd() {
  const personId = `${SITE.url}/#stacey-burns`;

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    url: PERSON.url,
  };
  // Omit rather than emit an empty array — an empty sameAs asserts nothing and
  // a fabricated URL is worse than a missing one.
  if (SAME_AS.length > 0) person.sameAs = SAME_AS;

  const org: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    email: SITE.email,
    areaServed: SITE.areaServed,
    founder: person,
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: SERVICES.coo.name,
          url: `${SITE.url}${SERVICES.coo.path}`,
          provider: { '@id': `${SITE.url}/#organization` },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: SERVICES.sroi.name,
          url: `${SITE.url}${SERVICES.sroi.path}`,
          provider: { '@id': `${SITE.url}/#organization` },
        },
      },
    ],
  };
  if (SITE.telephone) org.telephone = SITE.telephone;

  return <Script data={org} />;
}

/**
 * FAQPage built from the same FAQS array the visible block renders, so the two
 * cannot drift.
 *
 * Note on expectations: Google restricted FAQ rich results to authoritative
 * government and health sites in 2023, so this will not produce FAQ snippets in
 * search. It is here for answer engines, which is the actual goal.
 */
export function FaqJsonLd() {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }}
    />
  );
}
