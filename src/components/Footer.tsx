import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#E6E8EB] border-t border-[#2F3A44]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/branding/SVG_D8.svg"
                alt="SDB Social Impact"
                width={140}
                height={70}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-[#3B8EA5] max-w-md">
              Helping nonprofits and social enterprises shape strategy, stabilize operations, and prove the power of their impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#3B8EA5]">
              <li><Link href="/services" className="hover:text-[#2D7A8F] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#2D7A8F] transition-colors">Our Journey</Link></li>
              <li><Link href="/blog" className="hover:text-[#2D7A8F] transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-[#2D7A8F] transition-colors">Contact</Link></li>
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

        <div className="border-t border-[#2F3A44]/10 mt-8 pt-8 text-center text-[#3B8EA5]">
          <p>&copy; {new Date().getFullYear()} SDB Social Impact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
