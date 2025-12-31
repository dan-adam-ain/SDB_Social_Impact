import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Your Mission Is Powerful.
            <span className="block text-[#c9a962]">Let&apos;s Make Sure Your Operations Are, Too.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
            We help nonprofits and social enterprises shape strategy, stabilize operations, and prove value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Let&apos;s Chat!
            </Link>
            <Link href="/services" className="btn-outline text-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">Our Services</h2>
          <p className="text-center text-[#a0a0a0] mb-12 max-w-2xl mx-auto">
            We speak both nonprofit and business fluently—bringing clarity, structure, and insight to your mission.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* COO Services */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8 hover:border-[#c9a962]/50 transition-colors">
              <h3 className="font-serif text-2xl mb-2">COO Services Consult</h3>
              <p className="text-[#c9a962] mb-4">1 Hour Session</p>
              <p className="text-[#a0a0a0] mb-6">
                Strategy, Organizational Development, and Leadership Coaching for Social Impact Organizations. 
                Get high-level operational leadership without the full-time cost.
              </p>
              <Link href="/services" className="text-[#c9a962] hover:underline">
                Learn more &rarr;
              </Link>
            </div>

            {/* SROI Services */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8 hover:border-[#c9a962]/50 transition-colors">
              <h3 className="font-serif text-2xl mb-2">SROI Consult</h3>
              <p className="text-[#c9a962] mb-4">45 Minute Session</p>
              <p className="text-[#a0a0a0] mb-6">
                Understanding and Enhancing the Value of your Impact. Prove the value of your work 
                through rigorous, internationally aligned SROI studies.
              </p>
              <Link href="/services" className="text-[#c9a962] hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Why Choose Us</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Personalized Support</h3>
              <p className="text-[#a0a0a0] text-sm">We focus on your unique needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Sector Expertise</h3>
              <p className="text-[#a0a0a0] text-sm">Healthcare, housing, arts—we get your world</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-[#a0a0a0] text-sm">Our SROI studies help secure crucial funding</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Flexible Engagement</h3>
              <p className="text-[#a0a0a0] text-sm">High-level leadership without full-time cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">What Our Clients Say</h2>
          <blockquote className="text-xl md:text-2xl italic text-[#a0a0a0] mb-6">
            &ldquo;SDB Social Impact transformed how we measure and communicate our value to funders. 
            Their SROI analysis helped us secure funding that had previously been out of reach.&rdquo;
          </blockquote>
          <p className="text-[#c9a962]">— Nonprofit Executive Director</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Strengthen Your Impact?</h2>
          <p className="text-xl text-[#a0a0a0] mb-8">
            Let&apos;s discuss how we can help your organization thrive.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
