import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Curious Kids, Big Questions",
  description:
    "Why we make the Curious Kids, Big Questions books: real kid questions, simple answers, real science — for kids ages 5–9 and the parents they ask.",
  openGraph: {
    title: "About — Curious Kids, Big Questions",
    description:
      "Real kid questions. Simple answers. Real science. Meet the book series for curious kids ages 5–9.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="kicker">About</p>
          <h1>Real questions. Simple answers. Real science.</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p>
            Children ask their parents hundreds of questions a week — around
            46 a day for the youngest — and studies keep finding the same
            thing: parents are stumped by about a third of them and end up
            searching for answers on their phones, mid-conversation, while a
            small person waits.
          </p>
          <p>
            <strong>Curious Kids, Big Questions</strong> exists to be the
            book you reach for instead. Each volume takes one theme kids
            love — the sky, the human body, the Earth, animals — collects
            the questions children actually ask about it, and answers every
            one in five minutes or less.
          </p>
          <h2>Our three rules</h2>
          <div className="cards" style={{ margin: "18px 0 8px" }}>
            <div className="card">
              <h3>1. Simple words, never wrong science</h3>
              <p>
                An answer a six-year-old can follow and a scientist can sign.
                If a truth needs a shortcut, we say so — kids deserve the
                real reason, sized to fit them.
              </p>
            </div>
            <div className="card">
              <h3>2. One question, one short chapter</h3>
              <p>
                No encyclopedia walls of text. Every question stands alone,
                so the book works at bedtime, in the car, and during
                &ldquo;why?&rdquo; emergencies.
              </p>
            </div>
            <div className="card">
              <h3>3. Something to try together</h3>
              <p>
                The best answers end outside the book: a torch, a glass of
                water, a night walk. Our books and articles include simple
                activities that prove the science with your own eyes.
              </p>
            </div>
          </div>
          <h2>Start here</h2>
          <p>
            Read three full answers free on the{" "}
            <Link href="/questions">Questions &amp; Answers hub</Link>, meet{" "}
            <Link href="/books/why-does-the-moon-follow-me">Book 1</Link>,
            and see{" "}
            <Link href="/series">where the series goes next</Link>. The
            books will be available on Amazon in paperback and Kindle
            editions at launch.
          </p>
        </div>
      </section>
    </>
  );
}
