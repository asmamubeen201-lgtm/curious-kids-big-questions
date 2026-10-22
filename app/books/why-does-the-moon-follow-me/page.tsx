import type { Metadata } from "next";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import EmailCapture from "@/components/EmailCapture";
import Faq, { faqJsonLd, type FaqItem } from "@/components/Faq";
import { BOOK, BOOK_QUESTIONS, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Does the Moon Follow Me? — Moon Book for Kids Ages 5–9",
  description:
    "101 big questions about the sky, Moon and space, answered in 5 minutes or less. A why questions book for kids ages 5–9 — coming soon on Amazon in paperback and Kindle.",
  keywords: [
    "moon book for kids ages 5-9",
    "why questions book for kids",
    "questions kids ask about space",
    "curious kids science questions and answers",
    "why is the sky blue book for kids",
    "bedtime science book for curious kids",
  ],
  openGraph: {
    title: "Why Does the Moon Follow Me? — 101 Sky, Moon & Space Questions for Kids",
    description: BOOK.shortDescription,
    url: `${SITE_URL}/books/why-does-the-moon-follow-me`,
    type: "website",
  },
};

const bookFaqs: FaqItem[] = [
  {
    q: "What age is Why Does the Moon Follow Me? for?",
    a: "It is written for kids ages 5–9. Younger children enjoy it read aloud; confident readers aged 7–9 can read the short chapters on their own.",
  },
  {
    q: "How long does each answer take to read?",
    a: "Five minutes or less. Every one of the 101 questions has its own short chapter, designed for bedtime and read-together time.",
  },
  {
    q: "Is the science accurate?",
    a: "Yes. Answers are simplified for young readers but fact-checked, so parents never have to un-teach anything later.",
  },
  {
    q: "Where can I buy the book?",
    a: "It will be available on Amazon in paperback and Kindle eBook at launch. Join the launch list on this page and we will email you on launch day.",
  },
  {
    q: "Is this part of a series?",
    a: "Yes — it is Book 1 of Curious Kids, Big Questions. Book 2 (The Human Body) and Book 3 (Earth, Weather & Dinosaurs) are coming soon.",
  },
];

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: BOOK.title,
  alternateName: BOOK.subtitle,
  url: `${SITE_URL}/books/why-does-the-moon-follow-me`,
  description: BOOK.shortDescription,
  inLanguage: "en",
  audience: { "@type": "PeopleAudience", suggestedMinAge: 5, suggestedMaxAge: 9 },
  isPartOf: { "@type": "BookSeries", name: "Curious Kids, Big Questions" },
  bookFormat: ["https://schema.org/Paperback", "https://schema.org/EBook"],
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(bookFaqs)) }}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Book 1 · Sky, Moon &amp; Space · Ages 5–9</p>
            <h1>{BOOK.title}</h1>
            <p className="lede">{BOOK.subtitle}</p>
            <p>{BOOK.shortDescription}</p>
            <div className="btn-row">
              {/* Amazon link goes here at launch. */}
              <span className="btn" aria-disabled="true">
                Coming soon on Amazon
              </span>
              <Link className="btn secondary" href="/questions">
                Read 3 free answers
              </Link>
            </div>
          </div>
          <BookCover />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What kids learn</h2>
          <ul className="learn-list">
            {BOOK.whatKidsLearn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>15 of the 101 questions inside</h2>
          <ul className="question-list">
            {BOOK_QUESTIONS.map((q, i) => (
              <li key={q}>
                <span className="num">{i + 1}</span>
                {q}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 18 }}>
            Three of these are answered in full, free, on our{" "}
            <Link href="/questions">Questions &amp; Answers hub</Link> — start
            with{" "}
            <Link href="/questions/why-does-the-moon-follow-me">
              Why does the Moon follow me?
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>The series promise</h2>
          <p style={{ maxWidth: 760 }}>
            Every <strong>Curious Kids, Big Questions</strong> book takes one
            theme kids love, collects the questions they actually ask, and
            answers each one in five minutes or less — simple words, real
            science, zero boring bits. Book 1 covers the sky, the Moon and
            space. Next come the human body, then Earth, weather and
            dinosaurs, then animals.
          </p>
          <p>
            <Link href="/series">See the full series plan →</Link>
          </p>
          <div style={{ maxWidth: 760, marginTop: 36 }}>
            <Faq items={bookFaqs} />
          </div>
          <div style={{ maxWidth: 760, marginTop: 36 }}>
            <EmailCapture />
          </div>
        </div>
      </section>
    </>
  );
}
