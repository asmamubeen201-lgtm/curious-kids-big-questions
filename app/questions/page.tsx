import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES, BOOK_QUESTIONS, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Questions Kids Ask About Space — Answered Simply",
  description:
    "Free, parent-friendly answers to the questions kids ask about space, the Moon and the sky: why the Moon follows you, why the sky is blue, why stars twinkle, and more.",
  keywords: [
    "questions kids ask about space",
    "space questions answered for children",
    "why is the sky blue book for kids",
    "curious kids science questions and answers",
  ],
  openGraph: {
    title: "Questions Kids Ask About Space — Answered Simply",
    description:
      "Simple, accurate answers to real kid questions about the Moon, the sky and the stars.",
    url: `${SITE_URL}/questions`,
    type: "website",
  },
};

export default function QuestionsHubPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">Questions &amp; Answers</p>
          <h1>Questions kids ask about space — answered</h1>
          <p style={{ maxWidth: 720 }}>
            When your child asks a question you can&apos;t answer, start here.
            These are free, full answers from{" "}
            <Link href="/books/why-does-the-moon-follow-me">
              Why Does the Moon Follow Me?
            </Link>{" "}
            — written for kids, trusted by parents. The book contains 101 of
            them.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container">
          <h2>Free answers to read now</h2>
          <div className="cards cols-3" style={{ marginTop: 16 }}>
            {ARTICLES.map((article) => (
              <div className="card" key={article.slug}>
                <p className="q">{article.question}</p>
                <p>{article.teaser}</p>
                <Link href={`/questions/${article.slug}`}>Read the answer →</Link>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: 44 }}>All 15 featured questions from Book 1</h2>
          <ul className="question-list">
            {BOOK_QUESTIONS.map((q, i) => (
              <li key={q}>
                <span className="num">{i + 1}</span>
                {q}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 18 }}>
            Every one of these is answered in the book — plus 86 more.{" "}
            <Link href="/books/why-does-the-moon-follow-me">
              See the book →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
