export type FaqItem = { q: string; a: string };

export default function Faq({ items, heading = "Questions parents ask" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section className="faq" aria-label="Frequently asked questions">
      <h2>{heading}</h2>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// Build a FAQPage JSON-LD object for the same items.
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
