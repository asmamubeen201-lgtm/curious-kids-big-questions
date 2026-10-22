import Image from "next/image";

// Real Book 1 cover art (public/covers/why-does-the-moon-follow-me.jpg —
// web-optimised copy of ~/workspace/book1/cover-ebook.jpg, 720×1152).
// The artwork carries the title/subtitle/series line itself, so this
// component is a plain framed image — no text overlay.
export default function BookCover() {
  return (
    <div className="book-cover">
      <Image
        className="book-cover-img"
        src="/covers/why-does-the-moon-follow-me.jpg"
        width={720}
        height={1152}
        sizes="(max-width: 760px) 72vw, 320px"
        alt="Cover of Why Does the Moon Follow Me? — a smiling Moon follows a child along a winding path under a starry sky. Curious Kids, Big Questions, Book 1."
      />
    </div>
  );
}
