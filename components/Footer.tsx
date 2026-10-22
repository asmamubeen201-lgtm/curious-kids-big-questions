import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">Curious Kids, Big Questions</p>
        <p>
          Simple, accurate answers to the questions kids actually ask — for
          curious kids ages 5–9 and the grown-ups they ask.
        </p>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/books/why-does-the-moon-follow-me">The Book</Link>
          <Link href="/questions">Questions &amp; Answers</Link>
          <Link href="/series">The Series</Link>
          <Link href="/about">About</Link>
        </nav>
        <p className="footer-fine">
          © {new Date().getFullYear()} Curious Kids, Big Questions. Books will
          be available on Amazon at launch.
        </p>
      </div>
    </footer>
  );
}
