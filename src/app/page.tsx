import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a962]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimateIn delay={100}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Your Mission Is Powerful.
              <span className="block gradient-text">Let&apos;s Make Sure Your Operations Are, Too.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-xl md:text-2xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
              We help nonprofits and social enterprises shape strategy, stabilize operations, and prove value to funders through rigorous SROI studies.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Schedule a Consultation &rarr;
              </Link>
              <Link href="/services" className="btn-outline text-lg">
                Explore Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Proven Impact</h2>
              <div className="accent-line mx-auto mb-4" />
              <p className="text-[#a0a0a0] max-w-2xl mx-auto">
                Our clients use SROI studies to demonstrate their value and secure critical funding.
              </p>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateIn delay={100}>
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl gradient-text mb-2">15+</p>
                <p className="text-[#a0a0a0]">Years of Experience</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl gradient-text mb-2">$4M+</p>
                <p className="text-[#a0a0a0]">Funding Secured by Clients</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl gradient-text mb-2">6:1</p>
                <p className="text-[#a0a0a0]">Average SROI Ratio</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={400}>
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl gradient-text mb-2">50+</p>
                <p className="text-[#a0a0a0]">Organizations Served</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Services</h2>
              <div className="accent-line mx-auto mb-4" />
              <p className="text-[#a0a0a0] max-w-2xl mx-auto">
                We speak both nonprofit and business fluently—bringing clarity, structure, and insight to your mission.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* COO Services */}
            <AnimateIn delay={100} direction="left">
              <div className="card p-8 h-full">
                <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Fractional COO Services</h3>
                <p className="text-[#c9a962] mb-4 text-sm font-medium">Ongoing Partnership</p>
                <p className="text-[#a0a0a0] mb-6">
                  Get executive-level operational leadership without the full-time cost. We work alongside your team
                  to implement strategy, develop your organization, and coach your leaders—typically on a monthly retainer basis.
                </p>
                <Link href="/services" className="text-[#c9a962] hover:text-[#d4b56e] transition-colors inline-flex items-center gap-2 group">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </AnimateIn>

            {/* SROI Services */}
            <AnimateIn delay={200} direction="right">
              <div className="card p-8 h-full">
                <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">SROI Studies</h3>
                <p className="text-[#c9a962] mb-4 text-sm font-medium">Project-Based Engagement</p>
                <p className="text-[#a0a0a0] mb-6">
                  Prove your impact with a comprehensive Social Return on Investment analysis. We conduct stakeholder
                  interviews, build your impact model, and deliver a funder-ready report that quantifies your social value.
                </p>
                <Link href="/services" className="text-[#c9a962] hover:text-[#d4b56e] transition-colors inline-flex items-center gap-2 group">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Why Choose Us</h2>
              <div className="accent-line mx-auto" />
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateIn delay={100}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Bilingual in Business & Mission</h3>
                <p className="text-[#a0a0a0] text-sm">We translate between funder expectations and nonprofit realities</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Deep Sector Expertise</h3>
                <p className="text-[#a0a0a0] text-sm">Healthcare, housing, arts, education—we understand your world</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Funder-Ready Deliverables</h3>
                <p className="text-[#a0a0a0] text-sm">Our SROI reports help clients secure grants and investments</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={400}>
              <div className="text-center group">
                <div className="icon-container w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Flexible Engagement</h3>
                <p className="text-[#a0a0a0] text-sm">From single projects to ongoing partnerships—we adapt to you</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4">
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="icon-container w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-[#c9a962]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">What Our Clients Say</h2>
            <blockquote className="text-xl md:text-2xl italic text-[#a0a0a0] mb-8 leading-relaxed">
              &ldquo;SDB Social Impact transformed how we measure and communicate our value to funders.
              Their SROI analysis showed we create $6.50 in social value for every dollar invested—a finding
              that helped us secure a major foundation grant that had previously been out of reach.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a962] to-[#8a7343] flex items-center justify-center text-[#0a0a0a] font-bold">
                ED
              </div>
              <div className="text-left">
                <p className="text-[#c9a962] font-medium">Executive Director</p>
                <p className="text-[#a0a0a0] text-sm">Community Health Nonprofit</p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 section-gradient relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-3xl" />
        </div>

        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Prove Your Impact?</h2>
            <p className="text-xl text-[#a0a0a0] mb-8">
              Schedule a free consultation to discuss your organization&apos;s needs and explore how we can help.
            </p>
            <Link href="/contact" className="btn-primary text-lg inline-flex items-center gap-2 group">
              Schedule Your Free Consultation
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
