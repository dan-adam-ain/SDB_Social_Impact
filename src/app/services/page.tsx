import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export const metadata = {
  title: 'Services | SDB Social Impact',
  description: 'Fractional COO Services and SROI Studies for nonprofits and social enterprises.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6B7C8F]/10 rounded-full blur-3xl" />
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Two Services. One Purpose: Amplify Your Mission.</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-xl text-[#6B7C8F]">
              We help mission-driven organizations strengthen operations and prove their impact.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* What is SROI Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="card p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl mb-4">What is SROI?</h2>
                  <p className="text-[#6B7C8F] mb-4">
                    <strong className="text-[#2F3A44]">Social Return on Investment (SROI)</strong> is an internationally recognized
                    framework for measuring and communicating the social, environmental, and economic value your organization creates.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#E6E8EB] rounded-lg p-6">
                  <h3 className="font-semibold text-[#6B7C8F] mb-3">Why Funders Want It</h3>
                  <ul className="space-y-2 text-[#6B7C8F] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B7C8F] mt-1">•</span>
                      Demonstrates accountability and transparency
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B7C8F] mt-1">•</span>
                      Quantifies impact in dollar terms they understand
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B7C8F] mt-1">•</span>
                      Helps them justify investments to their boards
                    </li>
                  </ul>
                </div>
                <div className="bg-[#E6E8EB] rounded-lg p-6">
                  <h3 className="font-semibold text-[#6B7C8F] mb-3">What You&apos;ll Learn</h3>
                  <ul className="space-y-2 text-[#6B7C8F] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B7C8F] mt-1">•</span>
                      The true value you create for stakeholders
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B7C8F] mt-1">•</span>
                      Which programs deliver the highest impact
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B7C8F] mt-1">•</span>
                      How to communicate your story with data
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7C8F] text-sm">
                <strong className="text-[#2F3A44]">Example:</strong> A workforce development program might show that for every $1 invested,
                $5.20 in value is created through increased earnings, reduced public assistance, and improved health outcomes.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SROI Studies - Full Service */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateIn direction="left">
              <div>
                <span className="text-[#6B7C8F] text-sm font-semibold uppercase tracking-wider">Service 01</span>
                <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">SROI Studies</h2>
                <p className="text-[#6B7C8F] mb-4">
                  A comprehensive impact measurement engagement that delivers a funder-ready report
                  quantifying your social value.
                </p>

                <h3 className="font-semibold text-lg mb-4 mt-8">What&apos;s Included:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Discovery & Scoping</strong> — Define objectives and stakeholder groups</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Stakeholder Interviews</strong> — Capture outcomes from those you serve</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Impact Mapping</strong> — Build your theory of change with measurable outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Valuation & Analysis</strong> — Calculate your SROI ratio using proven methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Final Report</strong> — Professional, funder-ready documentation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Presentation Support</strong> — Help communicating findings to your board and funders</span>
                  </li>
                </ul>

                <div className="bg-[#E6E8EB] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#6B7C8F]">
                    <strong className="text-[#6B7C8F]">Typical Timeline:</strong> 8-12 weeks depending on scope and stakeholder availability
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={200} direction="right">
              <div className="card p-8 sticky top-8">
                <div className="text-center mb-8">
                  <p className="text-[#6B7C8F] text-sm font-semibold uppercase tracking-wider mb-2">Get Started</p>
                  <p className="font-serif text-3xl mb-2">Free 45-Min Consultation</p>
                  <p className="text-[#6B7C8F] text-sm">
                    We&apos;ll discuss your goals, answer questions about SROI, and determine if this engagement is right for you.
                  </p>
                </div>
                <Link href="/contact" className="btn-primary inline-block w-full text-center group">
                  Schedule Your Free Call
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <p className="text-center text-[#6B7C8F] text-xs mt-4">No obligation. No pressure.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* COO Services - Full Service */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateIn direction="left" className="lg:order-2">
              <div>
                <span className="text-[#6B7C8F] text-sm font-semibold uppercase tracking-wider">Service 02</span>
                <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">Fractional COO Services</h2>
                <p className="text-[#6B7C8F] mb-4">
                  Executive-level operational leadership for organizations that need strategic guidance
                  without the cost of a full-time hire.
                </p>

                <h3 className="font-semibold text-lg mb-4 mt-8">How It Works:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Monthly Retainer</strong> — Ongoing partnership, typically 10-20 hours/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Strategic Planning</strong> — Develop and execute your operational roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Team Development</strong> — Build leadership capacity across your organization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Process Improvement</strong> — Streamline operations for greater efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Executive Coaching</strong> — Support for your leadership team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#6B7C8F] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-[#2F3A44]">Accountability Partner</strong> — Keep initiatives on track and moving forward</span>
                  </li>
                </ul>

                <div className="bg-[#E6E8EB] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#6B7C8F]">
                    <strong className="text-[#6B7C8F]">Ideal For:</strong> Organizations in transition, rapid growth, or seeking to stabilize operations before a major initiative
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={200} direction="right" className="lg:order-1">
              <div className="card p-8 sticky top-8">
                <div className="text-center mb-8">
                  <p className="text-[#6B7C8F] text-sm font-semibold uppercase tracking-wider mb-2">Get Started</p>
                  <p className="font-serif text-3xl mb-2">Free 1-Hour Consultation</p>
                  <p className="text-[#6B7C8F] text-sm">
                    We&apos;ll assess your operational needs, discuss your challenges, and explore how fractional COO support could help.
                  </p>
                </div>
                <Link href="/contact" className="btn-primary inline-block w-full text-center group">
                  Schedule Your Free Call
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <p className="text-center text-[#6B7C8F] text-xs mt-4">No obligation. No pressure.</p>
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
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Not Sure Which Service Is Right for You?</h2>
            <p className="text-xl text-[#6B7C8F] mb-8">
              That&apos;s exactly what our free consultations are for. Let&apos;s talk about your
              organization&apos;s needs and find the right path forward.
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
