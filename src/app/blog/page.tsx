import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Insights | SDB Social Impact',
  description: 'Articles on leadership, accountability, nonprofit operations, and social impact by Stacey D. Burns.',
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#6B7C8F]/10 rounded-full blur-3xl" />
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Insights</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-xl text-[#6B7C8F]">
              Thoughts on leadership, accountability, and building stronger nonprofit organizations.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimateIn key={post.id} delay={index * 100}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <article className="card overflow-hidden h-full group flex flex-col cursor-pointer">
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-[#6B7C8F] text-sm font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h2 className="font-serif text-xl mt-2 mb-3 group-hover:text-[#6B7C8F] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#6B7C8F] text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-[#6B7C8F]">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-4 section-gradient">
        <AnimateIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="icon-container w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Stay Updated</h2>
            <p className="text-[#6B7C8F] mb-8">
              Subscribe to receive the latest insights on leadership and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-[#F7F8FA] border border-[#2F3A44]/20 rounded-lg focus:outline-none focus:border-[#6B7C8F] text-[#2F3A44] placeholder-[#6B7C8F] transition-colors"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-[#6B7C8F]/5 rounded-full blur-3xl" />
        </div>
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Have a Topic You&apos;d Like Us to Cover?</h2>
            <p className="text-xl text-[#6B7C8F] mb-8">
              We&apos;re always looking for new topics to explore. Let us know what you&apos;d like to learn about.
            </p>
            <Link href="/contact" className="btn-primary text-lg inline-flex items-center gap-2 group">
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
