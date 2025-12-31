import Link from 'next/link';

export const metadata = {
  title: 'Our Journey | SDB Social Impact',
  description: 'Learn about Stacey D. Burns and SDB Social Impact - over 15 years of experience in the social impact sector.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Journey</h1>
          <p className="text-xl text-[#a0a0a0]">
            Building operational strength for mission-driven organizations.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider">Founder</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">Stacey D. Burns</h2>
              <p className="text-[#a0a0a0] mb-4">
                With over 15 years of experience in the social impact sector, Stacey D. Burns has
                served as an interim COO for numerous nonprofits and social enterprises, helping
                them build operational strength and prove the power of their impact.
              </p>
              <p className="text-[#a0a0a0] mb-4">
                Her unique ability to speak both nonprofit and business languages has made her an
                invaluable partner for organizations looking to bridge the gap between mission and
                operations.
              </p>
              <p className="text-[#a0a0a0] mb-6">
                Stacey founded SDB Social Impact to expand her reach and help more organizations
                achieve operational excellence while staying true to their mission.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-[#c9a962] flex items-center justify-center">
                <span className="font-serif text-3xl font-bold text-[#c9a962]">SDB</span>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2">Stacey D. Burns</h3>
                <p className="text-[#c9a962] mb-4">Founder & Principal Consultant</p>
                <p className="text-[#a0a0a0] text-sm">
                  Interim COO | SROI Specialist | Strategic Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8">
              <h3 className="font-serif text-2xl mb-4 text-[#c9a962]">Our Mission</h3>
              <p className="text-[#a0a0a0]">
                To help nonprofits and social enterprises shape strategy, stabilize operations,
                and prove value. We bring clarity, structure, and insight to your mission—because
                your mission is powerful, and your operations should be too.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8">
              <h3 className="font-serif text-2xl mb-4 text-[#c9a962]">Our Vision</h3>
              <p className="text-[#a0a0a0]">
                A world where every mission-driven organization has the operational strength
                and impact measurement capabilities to maximize their positive effect on
                the communities they serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Areas of Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-[#a0a0a0] text-sm">Community health centers, hospitals, and health-focused nonprofits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Housing</h3>
              <p className="text-[#a0a0a0] text-sm">Affordable housing organizations and community development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Arts & Culture</h3>
              <p className="text-[#a0a0a0] text-sm">Museums, theaters, and cultural institutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-[#a0a0a0] text-sm">Schools, educational nonprofits, and youth programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Social Enterprise</h3>
              <p className="text-[#a0a0a0] text-sm">Mission-driven businesses and hybrid organizations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Human Services</h3>
              <p className="text-[#a0a0a0] text-sm">Social services and community support organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-[#a0a0a0] mb-8">
            Let&apos;s discuss how we can help strengthen your organization&apos;s operations and impact.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Let&apos;s Chat!
          </Link>
        </div>
      </section>
    </div>
  );
}
