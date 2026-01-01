import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export const metadata = {
  title: 'Insights | SDB Social Impact',
  description: 'Articles on social impact, evaluation techniques, and strategic consulting.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Social Return on Investment (SROI)',
    excerpt: 'A comprehensive guide to measuring and communicating the value of your social impact programs.',
    category: 'Impact Measurement',
    date: 'Coming Soon',
  },
  {
    id: 2,
    title: 'Building Operational Resilience in Nonprofits',
    excerpt: "Key strategies for strengthening your organization's operational foundation.",
    category: 'Operations',
    date: 'Coming Soon',
  },
  {
    id: 3,
    title: 'The Art of Strategic Planning for Social Enterprises',
    excerpt: 'How to balance mission and sustainability in your strategic planning process.',
    category: 'Strategy',
    date: 'Coming Soon',
  },
  {
    id: 4,
    title: 'Communicating Impact to Funders',
    excerpt: "Best practices for presenting your organization's value to current and potential funders.",
    category: 'Fundraising',
    date: 'Coming Soon',
  },
  {
    id: 5,
    title: 'Leadership Transitions in Mission-Driven Organizations',
    excerpt: 'Navigating executive transitions while maintaining organizational stability.',
    category: 'Leadership',
    date: 'Coming Soon',
  },
  {
    id: 6,
    title: 'Data-Driven Decision Making for Nonprofits',
    excerpt: 'How to leverage data to improve programs and demonstrate impact.',
    category: 'Data & Analytics',
    date: 'Coming Soon',
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#c9a962]/10 rounded-full blur-3xl" />
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Insights</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-xl text-[#a0a0a0]">
              Thoughts on social impact, evaluation techniques, and strategic consulting.
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
                <article className="card overflow-hidden h-full group">
                  <div className="p-6">
                    <span className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl mt-2 mb-3 group-hover:text-[#c9a962] transition-colors">{post.title}</h2>
                    <p className="text-[#a0a0a0] text-sm mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a0a0a0] text-sm">{post.date}</span>
                    </div>
                  </div>
                </article>
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
              <svg className="w-8 h-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Stay Updated</h2>
            <p className="text-[#a0a0a0] mb-8">
              Subscribe to receive the latest insights on social impact and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white placeholder-[#a0a0a0] transition-colors"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-[#c9a962]/5 rounded-full blur-3xl" />
        </div>
        <AnimateIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Have a Topic You&apos;d Like Us to Cover?</h2>
            <p className="text-xl text-[#a0a0a0] mb-8">
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
