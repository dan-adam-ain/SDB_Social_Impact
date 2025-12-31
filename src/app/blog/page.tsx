import Link from 'next/link';

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
    excerpt: 'Key strategies for strengthening your organization\'s operational foundation.',
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
    excerpt: 'Best practices for presenting your organization\'s value to current and potential funders.',
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Insights</h1>
          <p className="text-xl text-[#a0a0a0]">
            Thoughts on social impact, evaluation techniques, and strategic consulting.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden hover:border-[#c9a962]/50 transition-colors"
              >
                <div className="p-6">
                  <span className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h2 className="font-serif text-xl mt-2 mb-3">{post.title}</h2>
                  <p className="text-[#a0a0a0] text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#a0a0a0] text-sm">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Stay Updated</h2>
          <p className="text-[#a0a0a0] mb-8">
            Subscribe to receive the latest insights on social impact and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-[#0a0a0a] border border-white/20 rounded-lg focus:outline-none focus:border-[#c9a962] text-white placeholder-[#a0a0a0]"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Have a Topic You&apos;d Like Us to Cover?</h2>
          <p className="text-xl text-[#a0a0a0] mb-8">
            We&apos;re always looking for new topics to explore. Let us know what you&apos;d like to learn about.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
