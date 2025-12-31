'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0a0a0a]/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full border-2 border-[#c9a962] flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-[#c9a962]">SDB</span>
            </div>
            <span className="font-serif text-xl hidden sm:block">Social Impact</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#c9a962] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#c9a962] transition-colors">Services</Link>
            <Link href="/about" className="hover:text-[#c9a962] transition-colors">Our Journey</Link>
            <Link href="/blog" className="hover:text-[#c9a962] transition-colors">Insights</Link>
            <Link href="/contact" className="btn-primary">Let&apos;s Chat!</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-[#c9a962] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/services" className="hover:text-[#c9a962] transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/about" className="hover:text-[#c9a962] transition-colors" onClick={() => setIsOpen(false)}>Our Journey</Link>
              <Link href="/blog" className="hover:text-[#c9a962] transition-colors" onClick={() => setIsOpen(false)}>Insights</Link>
              <Link href="/contact" className="btn-primary inline-block text-center" onClick={() => setIsOpen(false)}>Let&apos;s Chat!</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
