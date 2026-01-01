import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export const metadata = {
  title: 'Insights | SDB Social Impact',
  description: 'Articles on leadership, accountability, nonprofit operations, and social impact by Stacey D. Burns.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Be Curious, Not Critical: The Leadership Shift That Changes Everything',
    excerpt: 'When a leader moves from critique to curiosity, people don\'t just perform better—they feel safer, braver, and more invested. The work becomes a shared endeavor, not a performance people fear getting wrong.',
    category: 'Leadership',
    date: 'December 11, 2025',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: "Restorative Time: The Leader's Real Renewable Resource",
    excerpt: "Rest doesn't always restore us. In a world that feels increasingly noisy, demanding, and dysregulated, we don't just need rest. We need restorative time—time that returns us to ourselves.",
    category: 'Leadership',
    date: 'November 26, 2025',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'Standing Out by Showing Up: The Lost Art of Responsiveness',
    excerpt: "Being responsive isn't just polite anymore. It's rare. And in a world where responsiveness is rare, it's also powerful. A simple acknowledgment immediately sets you apart.",
    category: 'Operations',
    date: 'November 5, 2025',
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'When Accountability Goes Too Far — Choosing the Right Battles',
    excerpt: "Accountability can go too far. Instead of building trust and clarity, it becomes a game of \"gotcha.\" True accountability isn't about catching mistakes—it's about learning, adapting, and moving forward.",
    category: 'Leadership',
    date: 'October 30, 2025',
    readTime: '2 min read',
  },
  {
    id: 5,
    title: 'Accountability — The Backbone of Nonprofit Leadership',
    excerpt: "Without accountability, even the best strategy falls flat. Passion without accountability is like a car without steering—it might move, but it won't go where you need it to.",
    category: 'Leadership',
    date: 'October 23, 2025',
    readTime: '2 min read',
  },
  {
    id: 6,
    title: 'The Future of Nonprofit Funding: Creativity Over Complacency',
    excerpt: "The nonprofit sector is heading into another storm. Too often, nonprofits try to ride it out with the same tried playbook. But it doesn't work that way anymore.",
    category: 'Fundraising',
    date: 'October 2, 2025',
    readTime: '2 min read',
  },
  {
    id: 7,
    title: 'The Power of Responsiveness: Why Communication Matters in Nonprofits',
    excerpt: 'Too often, emails sit in inboxes unread and phone calls go unreturned because we are busy saving the world. But failed communication can have a much larger price than we should be willing to pay.',
    category: 'Operations',
    date: 'September 25, 2025',
    readTime: '3 min read',
  },
  {
    id: 8,
    title: 'From "Trauma" to "Stuck"',
    excerpt: "When we casually apply trauma to everything uncomfortable, we risk diluting its meaning. Most of us aren't traumatized—we're stuck. And if you're stuck, you can become unstuck.",
    category: 'Leadership',
    date: 'September 15, 2025',
    readTime: '3 min read',
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
                <article className="card overflow-hidden h-full group flex flex-col">
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[#c9a962] text-sm font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl mt-2 mb-3 group-hover:text-[#c9a962] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#a0a0a0] text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-[#a0a0a0]">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
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
              Subscribe to receive the latest insights on leadership and operational excellence.
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
