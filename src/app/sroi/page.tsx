import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import Faq from '@/components/Faq';
import { TESTIMONIAL_SROI, SITE, SERVICES } from '@/lib/siteMeta';

export const metadata: Metadata = {
  title: 'Social Return on Investment (SROI) | SDB Social Impact',
  description:
    'Translate your social impact into a defensible, funder-ready number. A three-tier SROI model — Established, Probable, and Possible — so you never overstate your case.',
  alternates: { canonical: `${SITE.url}${SERVICES.sroi.path}` },
};

/**
 * The three tiers are the distinguishing feature of the model, so they get their
 * own block rather than being buried in prose. Kept here rather than in
 * siteMeta.ts because — unlike the FAQ — nothing else renders them, so there is no
 * second copy to drift from.
 */
const TIERS = [
  {
    name: 'Established SROI™',
    d: 'Built on solid, current-year data.',
  },
  {
    name: 'Probable SROI™',
    d: 'Very likely outcomes, with mild and defensible assumptions.',
  },
  {
    name: 'Possible SROI™',
    d: 'Longer-term or generational impact, clearly labeled as forward-looking.',
  },
];

export default function SroiPage() {
  return (
    <>
      <section className="section-gradient py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Make the case for <span className="gradient-text">your mission</span>.
            </h1>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-lg md:text-xl text-[#2F3A44] leading-relaxed">
              For nearly 20 years, I&rsquo;ve helped organizations translate the good they do into
              language funders, boards, and investors trust &mdash; without losing the human story
              behind the numbers.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">How it works</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-lg text-[#2F3A44] leading-relaxed mb-6">
              On larger engagements, I bring in a small team of trusted specialists &mdash; but every
              project runs through me, from scoping the questions to delivering the results.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg text-[#2F3A44] leading-relaxed">
              My approach also draws on Emergent Learning, an adaptive-strategy framework used widely
              in the philanthropic sector that I trained in directly &mdash; adapted to fit each
              engagement rather than applied as a fixed checklist.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center">Impact in three tiers</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-lg text-[#2F3A44] leading-relaxed text-center max-w-3xl mx-auto mb-12">
              My model produces impact in three tiers, so you can speak to a funder with total
              confidence in what&rsquo;s certain and what&rsquo;s projected.
            </p>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {TIERS.map((t, i) => (
              <AnimateIn key={t.name} delay={200 + i * 100}>
                <div className="card p-8 h-full">
                  <h3 className="font-serif text-xl mb-3 text-[#3B8EA5]">{t.name}</h3>
                  <p className="text-[#2F3A44] leading-relaxed">{t.d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={500}>
            <p className="text-[#2F3A44] leading-relaxed text-center max-w-3xl mx-auto mt-12">
              Most reports lead with Established-only and total SROI figures. For investor and
              financial audiences, I can break out the full three-tier picture.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">What clients say</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <figure className="card p-8">
              <blockquote className="text-lg text-[#2F3A44] leading-relaxed">
                &ldquo;{TESTIMONIAL_SROI.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="font-semibold text-[#3B8EA5]">{TESTIMONIAL_SROI.name}</span>
                <span className="block text-sm text-[#3B8EA5]">
                  {TESTIMONIAL_SROI.title}, {TESTIMONIAL_SROI.org}
                </span>
              </figcaption>
            </figure>
          </AnimateIn>
        </div>
      </section>

      <Faq />

      <section className="section-gradient py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Want to know the real value of your mission?
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <Link href="/contact" className="btn-primary inline-block">
              Let&apos;s Chat!
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
