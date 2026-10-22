import type { Metadata } from "next";
import Link from "next/link";
import { SERIES_BOOKS, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Series — Curious Kids, Big Questions Books",
  description:
    "The Curious Kids, Big Questions series plan: Book 1 Sky, Moon & Space, Book 2 The Human Body, Book 3 Earth, Weather & Dinosaurs, Book 4 Animals — why questions books for kids ages 5–9.",
  keywords: [
    "why questions book for kids",
    "curious kids science questions and answers",
    "bedtime science book for curious kids",
  ],
  openGraph: {
    title: "The Series — Curious Kids, Big Questions",
    description:
      "One theme per book, 101 questions per book, five minutes or less per answer. See what's out and what's coming.",
    url: `${SITE_URL}/series`,
    type: "website",
  },
};

export default function SeriesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">The Series</p>
          <h1>Curious Kids, Big Questions — the series</h1>
          <p style={{ maxWidth: 720 }}>
            One theme per book. 101 real kid questions per book. Every answer
            in five minutes or less, in simple words with real science — for
            kids ages 5–9.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container">
          <div className="cards cols-2">
            {SERIES_BOOKS.map((book) => (
              <div className="card" key={book.title}>
                <span className="chip">{book.status}</span>
                <h3 style={{ marginTop: 4 }}>{book.title}</h3>
                <p>
                  <strong>{book.theme}</strong>
                </p>
                {book.available ? (
                  <Link href={`/books/${book.slug}`}>See this book →</Link>
                ) : (
                  <p>Coming soon — join the launch list on the home page to hear about every new volume.</p>
                )}
              </div>
            ))}
          </div>
          <h2>How each book works</h2>
          <p style={{ maxWidth: 760 }}>
            Every volume follows the same trusted pattern: the questions come
            from real children (including the famously tricky &ldquo;why does
            the Moon follow us?&rdquo;), each answer is written to be read
            aloud in five minutes or less, facts are checked against real
            science, and simple &ldquo;try it together&rdquo; activities turn
            reading into doing. Start with{" "}
            <Link href="/books/why-does-the-moon-follow-me">
              Book 1: Why Does the Moon Follow Me?
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
