'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your preferred service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will be in touch soon.');
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Let&apos;s Chat!</h1>
          <p className="text-xl text-[#a0a0a0]">
            Ready to strengthen your operations and prove your impact? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8">
              <h2 className="font-serif text-2xl mb-6">Send Us a Message</h2>
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white"
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white"
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white"
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="coo">COO Services Consult (1 Hour)</option>
                    <option value="sroi">SROI Consult (45 Minutes)</option>
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white placeholder-[#a0a0a0] resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl mb-6">Book a Consultation</h2>
                <p className="text-[#a0a0a0] mb-6">
                  Ready to take the next step? Book a consultation directly to discuss your
                  organization&apos;s needs and how we can help.
                </p>
                <div className="space-y-4">
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-[#c9a962]/50 transition-colors">
                    <h3 className="font-semibold mb-2">COO Services Consult</h3>
                    <p className="text-[#a0a0a0] text-sm mb-3">1 Hour Session</p>
                    <p className="text-[#a0a0a0] text-sm">
                      Strategic operations consultation for your organization.
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-[#c9a962]/50 transition-colors">
                    <h3 className="font-semibold mb-2">SROI Consult</h3>
                    <p className="text-[#a0a0a0] text-sm mb-3">45 Minute Session</p>
                    <p className="text-[#a0a0a0] text-sm">
                      Explore impact measurement and SROI opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-6">What to Expect</h2>
                <ul className="space-y-4 text-[#a0a0a0]">
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c9a962]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#c9a962] font-semibold">1</span>
                    </span>
                    <span>We&apos;ll respond to your inquiry within 24-48 hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c9a962]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#c9a962] font-semibold">2</span>
                    </span>
                    <span>We&apos;ll schedule a brief discovery call to understand your needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c9a962]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#c9a962] font-semibold">3</span>
                    </span>
                    <span>We&apos;ll recommend the best service option for your situation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c9a962]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#c9a962] font-semibold">4</span>
                    </span>
                    <span>Begin your journey toward operational excellence!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
