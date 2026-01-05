import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogSlugs } from '@/data/blogPosts';
import AnimateIn from '@/components/AnimateIn';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: 'Post Not Found | SDB Social Impact' };
  }
  return {
    title: `${post.title} | SDB Social Impact`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#3B8EA5]/10 rounded-full blur-3xl" />
        <AnimateIn>
          <div className="max-w-3xl mx-auto relative z-10">
            <Link
              href="/blog"
              className="text-[#3B8EA5] hover:text-[#2D7A8F] transition-colors inline-flex items-center gap-2 mb-8 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              Back to Insights
            </Link>
            <span className="text-[#3B8EA5] text-sm font-semibold uppercase tracking-wider block mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-[#3B8EA5]">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#3B8EA5]"></span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Article Content */}
      <section className="pb-24 px-4">
        <AnimateIn delay={100}>
          <article className="max-w-3xl mx-auto">
            {paragraphs.map((paragraph, index) => {
              const trimmed = paragraph.trim();

              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-serif text-2xl text-[#2F3A44] mt-12 mb-6">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }

              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-serif text-xl text-[#2F3A44] mt-8 mb-4">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }

              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote key={index} className="border-l-4 border-[#3B8EA5] pl-6 my-8 italic text-[#3B8EA5]">
                    {trimmed.replace('> ', '')}
                  </blockquote>
                );
              }

              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
                return (
                  <ul key={index} className="my-6 space-y-2 list-disc list-inside">
                    {items.map((item, i) => (
                      <li key={i} className="text-[#2F3A44]">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }

              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-[#2F3A44] my-6 text-lg">
                    {trimmed.slice(2, -2)}
                  </p>
                );
              }

              if (!trimmed) return null;

              return (
                <p key={index} className="my-6 text-[#2F3A44] leading-relaxed text-lg">
                  {trimmed}
                </p>
              );
            })}
          </article>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 section-gradient">
        <AnimateIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Want to Discuss These Ideas?</h2>
            <p className="text-[#3B8EA5] mb-8">
              Let&apos;s talk about how these principles can strengthen your organization.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
