import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Curious Kids, Big Questions — home">
          <svg className="brand-moon" viewBox="0 0 40 40" aria-hidden="true">
            <path
              d="M26.5 3.5A15.5 15.5 0 1 0 36.5 24 12.4 12.4 0 0 1 26.5 3.5Z"
              fill="#ffd94d"
            />
            <circle cx="31" cy="9" r="1.7" fill="#fff" />
            <circle cx="35" cy="17" r="1.2" fill="#fff" />
          </svg>
          <span>
            Curious Kids
            <small>Big Questions</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/books/why-does-the-moon-follow-me">The Book</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/series">The Series</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
