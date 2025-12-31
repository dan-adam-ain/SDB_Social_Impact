import Link from 'next/link';

export const metadata = {
  title: 'Services | SDB Social Impact',
  description: 'COO Services and SROI Consulting for nonprofits and social enterprises.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-[#a0a0a0]">
            Strategic operations and impact measurement for mission-driven organizations.
          </p>
        </div>
      </section>

      {/* COO Services */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider">Service 01</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">COO Services Consult</h2>
              <p className="text-[#a0a0a0] mb-4">
                Strategy, Organizational Development, and Leadership Coaching for Social Impact Organizations.
              </p>
              <p className="text-[#a0a0a0] mb-6">
                Get high-level operational leadership without the full-time cost. Implement the changes
                that move your mission forward. We bring over 15 years of experience in the social impact
                sector to help you build operational strength.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Strategic planning and execution</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Organizational development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Leadership coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Operations optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8">
              <div className="text-center">
                <p className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider mb-2">Duration</p>
                <p className="font-serif text-4xl mb-6">1 Hour</p>
                <p className="text-[#a0a0a0] mb-8">
                  One-on-one consultation to address your specific operational challenges and opportunities.
                </p>
                <Link href="/contact" className="btn-primary inline-block w-full">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SROI Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider">Service 02</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">Social Return on Investment (SROI) Consult</h2>
              <p className="text-[#a0a0a0] mb-4">
                Understanding and Enhancing the Value of your Impact.
              </p>
              <p className="text-[#a0a0a0] mb-6">
                Prove the value of your work through rigorous, internationally aligned SROI studies.
                Our methodology helps you quantify and communicate your social impact in ways that
                resonate with funders and stakeholders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Impact measurement frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SROI analysis and reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Stakeholder engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#c9a962] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Funder-ready impact reports</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8 lg:order-1">
              <div className="text-center">
                <p className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider mb-2">Duration</p>
                <p className="font-serif text-4xl mb-6">45 Minutes</p>
                <p className="text-[#a0a0a0] mb-8">
                  Focused session to explore your impact measurement needs and SROI opportunities.
                </p>
                <Link href="/contact" className="btn-primary inline-block w-full">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Not Sure Which Service Is Right for You?</h2>
          <p className="text-xl text-[#a0a0a0] mb-8">
            Let&apos;s have a conversation about your organization&apos;s needs and goals.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Let&apos;s Chat!
          </Link>
        </div>
      </section>
    </div>
  );
}
