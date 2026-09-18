import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import Faq from '@/components/Faq';
import { TESTIMONIAL_COO, SITE, SERVICES } from '@/lib/siteMeta';

export const metadata: Metadata = {
  title: 'Interim & Fractional COO / Strategist | SDB Social Impact',
  description:
    'Executive-level operational and strategic leadership for nonprofits and social enterprises — as a fractional Strategist a few hours a month, or a full interim COO during a transition.',
  alternates: { canonical: `${SITE.url}${SERVICES.coo.path}` },
};

export default function InterimFractionalCooPage() {
  return (
    <>
      <section className="section-gradient py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Executive leadership, for exactly{' '}
              <span className="gradient-text">as long as you need it</span>.
            </h1>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-lg md:text-xl text-[#2F3A44] leading-relaxed">
              Growth. Transition. Whatever kind of change your organization is navigating — I show up,
              build what&rsquo;s missing, and step back the moment you don&rsquo;t need me anymore.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">What this looks like</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-lg text-[#2F3A44] leading-relaxed mb-6">
              I step in as your organization&rsquo;s operational and strategic backbone — whether
              that&rsquo;s a few hours a month as a fractional Strategist, or a full interim role while
              you search for your next permanent hire. Whether your organization calls this seat COO,
              Strategist, or Chief Strategy Officer, I fill it — this was never only about keeping
              operations running, it&rsquo;s about shaping the strategic direction operations exist to
              serve.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg text-[#2F3A44] leading-relaxed">
              Every organization arrives at this point differently: growth that&rsquo;s outpaced your
              systems, a leadership transition, or just a season of change that needs a steady hand at
              the helm. There&rsquo;s no fixed playbook — every engagement is scoped around your
              organization, your timeline, and your goals.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Where I focus</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                t: 'Strategy development',
                d: 'Turning your strategic plan into decisions your team can act on this week, not a binder that sits on a shelf.',
              },
              {
                t: 'Organizational design',
                d: 'Building the structure and roles your team actually needs, shaped around how your organization actually works, not a generic org chart.',
              },
              {
                t: 'Leadership coaching',
                d: 'Not coaching from the sidelines, but developing the leaders already on your team in the middle of the real work, so the gains outlast my engagement.',
              },
            ].map((f, i) => (
              <AnimateIn key={f.t} delay={100 + i * 100}>
                <div className="card p-8 h-full">
                  <h3 className="font-serif text-xl mb-3 text-[#3B8EA5]">{f.t}</h3>
                  <p className="text-[#2F3A44] leading-relaxed">{f.d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
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
                &ldquo;{TESTIMONIAL_COO.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="font-semibold text-[#3B8EA5]">{TESTIMONIAL_COO.name}</span>
                <span className="block text-sm text-[#3B8EA5]">
                  {TESTIMONIAL_COO.title}, {TESTIMONIAL_COO.org}
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
              Ready to talk about what&rsquo;s changing in your organization?
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
