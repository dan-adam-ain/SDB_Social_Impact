import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B7C8F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#6B7C8F]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimateIn delay={100}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Your Mission Is Powerful.
              <span className="block gradient-text">Let&apos;s Make Sure Your Operations Are, Too.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-xl md:text-2xl text-[#6B7C8F] mb-8 max-w-2xl mx-auto">
              Operational excellence and measurable impact for mission-driven organizations.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Get a Free Consultation &rarr;
              </Link>
              <Link href="/services" className="btn-outline text-lg">
                Explore Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Opening Story Section */}
      <section className="section-gradient py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <p className="text-xl md:text-2xl text-[#2F3A44] mb-8 leading-relaxed">
              Most nonprofits and social enterprises start the same way: a powerful mission, a passionate team, and a drive to change the world.
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-xl md:text-2xl text-[#2F3A44] mb-8 leading-relaxed">
              But somewhere along the way, things get complicated. Programs grow faster than systems. Funders ask for data you don&apos;t have. Your team spends more time putting out fires than advancing your mission.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-xl md:text-2xl text-[#2F3A44] mb-8 leading-relaxed">
              You know you&apos;re doing good work&mdash;but you can&apos;t always prove it. And you know your organization could run better&mdash;but you don&apos;t have time to fix what&apos;s broken.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <p className="text-xl md:text-2xl text-[#6B7C8F] font-semibold leading-relaxed">
              That&apos;s where we come in.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Your Guide Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  Hi, I&apos;m <span className="gradient-text">Stephanie Taught</span>
                </h2>
                <p className="text-lg text-[#6B7C8F] mb-6 leading-relaxed">
                  I&apos;ve spent 15+ years helping mission-driven organizations stop spinning their wheels and start seeing real results.
                </p>
                <p className="text-lg text-[#6B7C8F] leading-relaxed">
                  Through SDB Social Impact Consulting, I partner with nonprofits, social enterprises, and government agencies to build stronger operations, better systems, and clearer ways to measure what matters.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="card p-8">
                <div className="accent-line mb-6"></div>
                <h3 className="font-serif text-2xl mb-6">Our Philosophy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#6B7C8F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2F3A44]">Your mission drives everything we do</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#6B7C8F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2F3A44]">Simple systems beat complicated ones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#6B7C8F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2F3A44]">If you can&apos;t measure it, you can&apos;t improve it</span>
                  </li>
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What We Help You Do Section */}
      <section className="section-gradient py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">
              What We Help You <span className="gradient-text">Do</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn delay={100}>
              <div className="card p-8 h-full">
                <div className="accent-line mb-6"></div>
                <h3 className="font-serif text-2xl mb-4">Strengthen Operations</h3>
                <p className="text-[#6B7C8F]">
                  Build systems that actually work&mdash;so your team can focus on impact, not firefighting.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="card p-8 h-full">
                <div className="accent-line mb-6"></div>
                <h3 className="font-serif text-2xl mb-4">Bridge Strategy and Execution</h3>
                <p className="text-[#6B7C8F]">
                  Turn big-picture plans into day-to-day action with clear priorities and accountability.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="card p-8 h-full">
                <div className="accent-line mb-6"></div>
                <h3 className="font-serif text-2xl mb-4">Prove Your Impact</h3>
                <p className="text-[#6B7C8F]">
                  Develop evaluation frameworks that show funders&mdash;and yourself&mdash;exactly what&apos;s working.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={400}>
              <div className="card p-8 h-full">
                <div className="accent-line mb-6"></div>
                <h3 className="font-serif text-2xl mb-4">Work Across Sectors</h3>
                <p className="text-[#6B7C8F]">
                  Navigate the unique challenges of nonprofits, government, and social enterprise with a guide who&apos;s been there.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn delay={100}>
              <div className="card p-8 h-full">
                <svg className="w-12 h-12 text-[#6B7C8F]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-[#2F3A44] mb-6 leading-relaxed">
                  &ldquo;Stephanie helped us completely transform how we track and report our outcomes. For the first time, we can show funders exactly what their investment achieves.&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#6B7C8F]">Maria Chen</p>
                  <p className="text-sm text-[#6B7C8F]">Executive Director, Community First Initiative</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="card p-8 h-full">
                <svg className="w-12 h-12 text-[#6B7C8F]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-[#2F3A44] mb-6 leading-relaxed">
                  &ldquo;We were drowning in inefficient processes. SDB helped us streamline operations so we could serve 40% more clients without adding staff.&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#6B7C8F]">James Rodriguez</p>
                  <p className="text-sm text-[#6B7C8F]">Program Director, Urban Youth Alliance</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gradient py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              Ready to Strengthen Your <span className="gradient-text">Impact</span>?
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-xl text-[#6B7C8F] mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about where you are, where you want to go, and how we can help you get there.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link href="/contact" className="btn-primary text-lg">
              Get a Free Consultation &rarr;
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
