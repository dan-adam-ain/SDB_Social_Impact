import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#c9a962] flex items-center justify-center">
                <span className="font-serif text-sm font-bold text-[#c9a962]">SDB</span>
              </div>
              <span className="font-serif text-xl">Social Impact</span>
            </div>
            <p className="text-[#a0a0a0] max-w-md">
              Helping nonprofits and social enterprises shape strategy, stabilize operations, and prove the power of their impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#a0a0a0]">
              <li><Link href="/services" className="hover:text-[#c9a962] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#c9a962] transition-colors">Our Journey</Link></li>
              <li><Link href="/blog" className="hover:text-[#c9a962] transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a962] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <Link href="/contact" className="btn-primary inline-block">
              Let&apos;s Chat!
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-[#a0a0a0]">
          <p>&copy; {new Date().getFullYear()} SDB Social Impact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
