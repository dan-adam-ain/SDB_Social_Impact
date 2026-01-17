'use client';

import { useState } from 'react';
import AnimateIn from '@/components/AnimateIn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', organization: '', service: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#3B8EA5]/10 rounded-full blur-3xl" />
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Let&apos;s Build a Stronger Organization—Together.</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-xl text-[#3B8EA5]">
              Whether you need hands-on operational support or a credible way to prove your impact, we&apos;re here to help.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateIn direction="left">
              <div className="card p-8">
                <h2 className="font-serif text-2xl mb-4">Schedule your free consultation</h2>
                <p className="text-[#3B8EA5] mb-6">
                  Let&apos;s align your mission with your operations—and create greater impact, together.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#2F3A44]/20 rounded-lg focus:outline-none focus:border-[#3B8EA5] text-[#2F3A44] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#2F3A44]/20 rounded-lg focus:outline-none focus:border-[#3B8EA5] text-[#2F3A44] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#2F3A44]/20 rounded-lg focus:outline-none focus:border-[#3B8EA5] text-[#2F3A44] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#2F3A44]/20 rounded-lg focus:outline-none focus:border-[#3B8EA5] text-[#2F3A44] transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="coo">Operational Support (1 Hour)</option>
                      <option value="sroi">Impact Measurement (45 Minutes)</option>
                      <option value="both">Both Services</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and what you're hoping to achieve..."
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#2F3A44]/20 rounded-lg focus:outline-none focus:border-[#3B8EA5] text-[#2F3A44] placeholder-[#3B8EA5] resize-none transition-colors"
                    />
                  </div>

                  {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you for your message! We&apos;ll be in touch within 24-48 hours.
                    </div>
                  ) : (
                    <>
                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                          {errorMessage}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary w-full text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                        {status !== 'loading' && (
                          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                        )}
                      </button>
                    </>
                  )}
                </form>
              </div>
            </AnimateIn>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimateIn delay={100} direction="right">
                <div>
                  <h2 className="font-serif text-2xl mb-6">Ready to Amplify Your Impact?</h2>
                  <p className="text-[#3B8EA5] mb-6">
                    We offer a free consultation to explore how we can support your mission. Reach out to SDB Social Impact and let&apos;s start a conversation about your goals and challenges.
                    
                  </p>
                  <div className="space-y-4">
                    <div className="card p-6">
                      <div className="flex items-start gap-4">
                        <div className="icon-container w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#3B8EA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Operational Support</h3>
                          
                          <p className="text-[#3B8EA5] text-sm">
                            Hands-on COO services to strengthen your organization&apos;s foundation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card p-6">
                      <div className="flex items-start gap-4">
                        <div className="icon-container w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#3B8EA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Impact Measurement</h3>
                          
                          <p className="text-[#3B8EA5] text-sm">
                            SROI analysis to credibly demonstrate the value of your work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={200} direction="right">
                <div>
                  <h2 className="font-serif text-2xl mb-6">What to Expect</h2>
                  <ul className="space-y-4 text-[#3B8EA5]">
                    <li className="flex items-start">
                      <span className="icon-container w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#3B8EA5] font-semibold text-sm">1</span>
                      </span>
                      <span>We&apos;ll respond to your inquiry within 24-48 hours.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="icon-container w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#3B8EA5] font-semibold text-sm">2</span>
                      </span>
                      <span>We&apos;ll schedule a brief discovery call to understand your needs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="icon-container w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#3B8EA5] font-semibold text-sm">3</span>
                      </span>
                      <span>We&apos;ll recommend the best service option for your situation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="icon-container w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#3B8EA5] font-semibold text-sm">4</span>
                      </span>
                      <span>Begin your journey toward operational excellence!</span>
                    </li>
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
