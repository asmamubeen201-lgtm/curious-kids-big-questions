import Link from "next/link";
import Faq, { faqJsonLd, type FaqItem } from "@/components/Faq";

type Props = {
  question: string;
  lead: string;
  faqs: FaqItem[];
  children: React.ReactNode;
};

// Shared shell for /questions/* articles: H1 question, answer body,
// a "Try it together" box (passed as children position is fixed by the
// page itself), FAQ section with FAQPage schema, and a CTA to the book.
export default function Article({ question, lead, faqs, children }: Props) {
  return (
    <article className="section" style={{ paddingTop: 36 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="container article">
        <p className="kicker" style={{ color: "#b06a00", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.82rem" }}>
          From the book: Why Does the Moon Follow Me?
        </p>
        <h1>{question}</h1>
        <p className="answer-lead">{lead}</p>
        {children}
        <div className="book-cta">
          <h2>That was 1 question. The book has 101.</h2>
          <p>
            Why Does the Moon Follow Me? answers 101 big questions about the
            sky, the Moon and space — each in five minutes or less, for
            curious kids ages 5–9.
          </p>
          <Link className="btn" href="/books/why-does-the-moon-follow-me">
            See the book
          </Link>
        </div>
        <Faq items={faqs} heading="Quick questions" />
        <p style={{ marginTop: 26 }}>
          <Link href="/questions">← More questions &amp; answers</Link>
        </p>
      </div>
    </article>
  );
}
