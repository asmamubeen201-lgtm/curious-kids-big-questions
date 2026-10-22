import Link from "next/link";
import BookCover from "@/components/BookCover";
import EmailCapture from "@/components/EmailCapture";
import { ARTICLES, BOOK, BOOK_QUESTIONS } from "@/lib/data";

const TRUST_ITEMS = [
  "Ages 5–9",
  "Fact-checked science",
  "Answers in 5 minutes or less",
  "Made to read aloud together",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Curious Kids, Big Questions — a book series for ages 5–9</p>
            <h1>Why does the Moon follow me?</h1>
            <p className="lede">
              Kids ask around 46 questions a day — and parents get stumped by
              about a third of them. Our books answer the real questions kids
              ask about the sky, the Moon and space: simply, accurately, and
              in five minutes or less.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/books/why-does-the-moon-follow-me">
                See Book 1
              </Link>
              <Link className="btn secondary" href="/questions">
                Read free answers
              </Link>
            </div>
          </div>
          <div className="hero-cover">
            <BookCover />
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-strip-inner">
          {TRUST_ITEMS.map((item) => (
            <span className="trust-item" key={item}>
              <span className="trust-dot" aria-hidden="true">★</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Featured book</p>
          <h2 style={{ marginTop: 0 }}>{BOOK.title}</h2>
          <div className="featured-panel">
            <BookCover />
            <div>
              <p>
                {BOOK.shortDescription} One theme per book, one question at a
                time — perfect for bedtime reading, car rides and
                &ldquo;why?&rdquo; marathons.
              </p>
              <ul className="featured-points">
                {BOOK.whatKidsLearn.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/books/why-does-the-moon-follow-me">
                  Explore the book
                </Link>
                <Link href="/questions">Read 3 free answers →</Link>
              </div>
            </div>
          </div>

          <div className="cards cols-3" style={{ marginTop: 22 }}>
            <div className="card">
              <span className="chip">Ages 5–9</span>
              <h3>Made for young readers</h3>
              <p>
                Short answers in friendly words, written to be read aloud
                together or by early readers on their own.
              </p>
            </div>
            <div className="card">
              <span className="chip">5 minutes or less</span>
              <h3>Every question, answered fast</h3>
              <p>
                Each of the 101 questions gets its own short chapter — no
                encyclopedia lectures, no talking down.
              </p>
            </div>
            <div className="card">
              <span className="chip">Accurate science</span>
              <h3>Simple, never wrong</h3>
              <p>
                Answers are written for kids but checked for real science, so
                parents can trust every page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 style={{ marginTop: 0 }}>Questions from the book</h2>
          <p>Three full answers are free to read right now:</p>
          <div className="cards cols-3" style={{ marginTop: 18 }}>
            {ARTICLES.map((article) => (
              <div className="card" key={article.slug}>
                <p className="q">{article.question}</p>
                <p>{article.teaser}</p>
                <Link href={`/questions/${article.slug}`}>Read the answer →</Link>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: 34 }}>More questions inside Book 1</h3>
          <ul className="question-list">
            {BOOK_QUESTIONS.slice(0, 8).map((q, i) => (
              <li key={q}>
                <span className="num">{i + 1}</span>
                {q}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 18 }}>
            <Link href="/books/why-does-the-moon-follow-me">
              See all 15 featured questions from the book →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--night">
        <div className="container" style={{ maxWidth: 760 }}>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
