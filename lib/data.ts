// Central site + book data, shared by pages, sitemap and schema.
// Update SITE_URL once a real domain / Vercel subdomain is chosen.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curious-kids-big-questions.vercel.app";

export const SITE_NAME = "Curious Kids, Big Questions";
export const SERIES_NAME = "Curious Kids, Big Questions";

export const BOOK = {
  title: "Why Does the Moon Follow Me?",
  subtitle:
    "101 Big Questions About the Sky, Moon and Space — Answered in 5 Minutes or Less, for Curious Kids Ages 5–9",
  slug: "why-does-the-moon-follow-me",
  ages: "5–9",
  format: "Paperback & Kindle eBook",
  status: "Coming soon on Amazon",
  shortDescription:
    "Your child asks the questions. This book has the answers — 101 big questions about the sky, the Moon and space, each explained simply, accurately, and in five minutes or less.",
  whatKidsLearn: [
    "Why the Moon seems to follow them — and what is really happening",
    "Why the sky is blue, and why sunsets turn orange and red",
    "Why stars twinkle but planets usually don't",
    "Why the Moon changes shape through the month",
    "Where the Sun goes at night, and why it gets dark",
    "What shooting stars really are (spoiler: not stars!)",
    "How far away the Moon and stars actually are",
    "Simple sky-watching activities to try together outside",
  ],
};

// The 15 questions showcased on the book page (of the 101 in the book).
export const BOOK_QUESTIONS: string[] = [
  "Why does the Moon follow me?",
  "Why is the sky blue?",
  "Why do stars twinkle?",
  "Why does the Moon change shape?",
  "Why can I sometimes see the Moon in the daytime?",
  "Where does the Sun go at night?",
  "Why can't we see stars in the daytime?",
  "Why does it get dark at night?",
  "What is a shooting star?",
  "Why is the Moon round?",
  "How far away is the Moon?",
  "Why do clouds move?",
  "Why does the Sun look bigger at sunset?",
  "Where does the sky end and space begin?",
  "Why is space black, even though the Sun is shining?",
];

// Articles published on the /questions hub at launch.
export const ARTICLES = [
  {
    slug: "why-does-the-moon-follow-me",
    question: "Why Does the Moon Follow Me?",
    teaser:
      "On car rides and evening walks, the Moon seems to follow your child everywhere. Here is the real reason — and a fun way to test it together.",
  },
  {
    slug: "why-is-the-sky-blue",
    question: "Why Is the Sky Blue?",
    teaser:
      "Sunlight looks white, the air is invisible — so where does the blue come from? A simple, accurate answer kids actually understand.",
  },
  {
    slug: "why-do-stars-twinkle",
    question: "Why Do Stars Twinkle?",
    teaser:
      "The stars are not really twinkling — the wobbly air above us is playing a trick on their light. Here's how it works.",
  },
];

export const SERIES_BOOKS = [
  {
    title: "Why Does the Moon Follow Me?",
    theme: "WHY Questions: Sky, Moon & Space",
    status: "Book 1 — coming soon",
    slug: "why-does-the-moon-follow-me",
    available: true,
  },
  {
    title: "Why Do I Burp?",
    theme: "WHY Questions: The Human Body",
    status: "Book 2 — coming soon",
    slug: null,
    available: false,
  },
  {
    title: "Why Do Volcanoes Erupt?",
    theme: "WHY Questions: Earth, Weather & Dinosaurs",
    status: "Book 3 — coming soon",
    slug: null,
    available: false,
  },
  {
    title: "Why Can't Dogs Talk?",
    theme: "WHY Questions: Animals",
    status: "Book 4 — coming soon",
    slug: null,
    available: false,
  },
];
