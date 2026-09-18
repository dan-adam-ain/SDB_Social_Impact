import { FAQS } from '@/lib/siteMeta';
import { FaqJsonLd } from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';

/**
 * Visible FAQ. Renders from the same FAQS array as the JSON-LD, which is what
 * keeps the structured data and the visible copy identical by construction.
 */
export default function Faq({ heading = 'Questions' }: { heading?: string }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">
            Common <span className="gradient-text">{heading}</span>
          </h2>
        </AnimateIn>
        <div className="space-y-6">
          {FAQS.map((f, i) => (
            <AnimateIn key={f.question} delay={i * 60}>
              <details className="card p-6 group">
                <summary className="font-serif text-xl cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#3B8EA5] shrink-0 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#2F3A44] leading-relaxed">{f.answer}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </div>
      <FaqJsonLd />
    </section>
  );
}
