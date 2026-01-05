import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export const metadata = {
  title: 'Meet the Guide Behind SDB Social Impact | SDB Social Impact',
  description: 'Learn about Stacey D. Burns and SDB Social Impact - over 20 years of experience in the social impact sector.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#6B7C8F]/10 rounded-full blur-3xl" />
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Our Journey</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-xl text-[#6B7C8F]">
              Building operational strength for mission-driven organizations.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div>
                <span className="text-[#6B7C8F] text-sm font-semibold uppercase tracking-wider">Founder</span>
                <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">Stacey D. Burns</h2>
                <p className="text-[#6B7C8F] mb-4">
                  With over 20 years of experience in the social impact sector, Stacey D. Burns has
                  served as an interim COO for numerous nonprofits and social enterprises, helping
                  them build operational strength and prove the power of their impact.
                </p>
                <p className="text-[#6B7C8F] mb-4">
                  Her unique ability to speak both nonprofit and business languages has made her an
                  invaluable partner for organizations looking to bridge the gap between mission and
                  operations.
                </p>
                <p className="text-[#6B7C8F] mb-6">
                  Stacey founded SDB Social Impact to expand her reach and help more organizations
                  achieve operational excellence while staying true to their mission.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200} direction="right">
              <div className="card p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6B7C8F] to-[#5A6B7E] flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-[#F7F8FA]">SDB</span>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-2">Stacey D. Burns</h3>
                  <p className="text-[#6B7C8F] mb-4">Founder & Principal Consultant</p>
                  <p className="text-[#6B7C8F] text-sm">
                    Interim COO | SROI Specialist | Strategic Advisor
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Mission & Vision</h2>
              <div className="accent-line mx-auto" />
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn delay={100} direction="left">
              <div className="card p-8 h-full">
                <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4">Our Mission</h3>
                <p className="text-[#6B7C8F]">
                  To ensure your operations and impact are as strong as your mission.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200} direction="right">
              <div className="card p-8 h-full">
                <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4">Our Vision</h3>
                <p className="text-[#6B7C8F]">
                  A world where every mission-driven organization has the operational strength
                  and impact measurement capabilities to maximize their positive effect on
                  the communities they serve.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Areas of Expertise</h2>
              <div className="accent-line mx-auto" />
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateIn delay={100}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Healthcare</h3>
                <p className="text-[#6B7C8F] text-sm">Community health centers, hospitals, and health-focused nonprofits</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Housing</h3>
                <p className="text-[#6B7C8F] text-sm">Affordable housing organizations and community development</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Arts & Culture</h3>
                <p className="text-[#6B7C8F] text-sm">Museums, theaters, and cultural institutions</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={250}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-[#6B7C8F] text-sm">Schools, educational nonprofits, and youth programs</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Social Enterprise</h3>
                <p className="text-[#6B7C8F] text-sm">Mission-driven businesses and hybrid organizations</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={350}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Human Services</h3>
                <p className="text-[#6B7C8F] text-sm">Social services and community support organizations</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-[#6B7C8F]/5 rounded-full blur-3xl" />
        </div>
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-[#6B7C8F] mb-8">
              Let&apos;s discuss how we can help strengthen your organization&apos;s operations and impact.
            </p>
            <Link href="/contact" className="btn-primary text-lg inline-flex items-center gap-2 group">
              Let&apos;s Chat!
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
