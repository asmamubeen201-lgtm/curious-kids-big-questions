import type { Metadata } from "next";
import Article from "@/components/Article";
import type { FaqItem } from "@/components/Faq";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Does the Moon Follow Me? (Explained for Kids)",
  description:
    "Why does the Moon seem to follow you in the car or on a walk? A simple, accurate explanation for kids ages 5–9 — it's about distance, and you can test it tonight.",
  keywords: [
    "why does the moon follow me",
    "why does the moon follow us in the car",
    "moon book for kids ages 5-9",
    "questions kids ask about space",
  ],
  openGraph: {
    title: "Why Does the Moon Follow Me? (Explained for Kids)",
    description:
      "The Moon isn't really following you — it's so far away that it looks that way. Here's the kid-friendly science.",
    url: `${SITE_URL}/questions/why-does-the-moon-follow-me`,
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Is the Moon really following me?",
    a: "No — it just looks that way. The Moon is so far away that as you move, your view of it barely changes, while nearby things rush past. That makes it seem to travel with you.",
  },
  {
    q: "How far away is the Moon?",
    a: "About 384,000 kilometres (239,000 miles) away — roughly 30 Earths lined up in a row. Light from the Moon takes a little over one second to reach us.",
  },
  {
    q: "Does the Moon move at all?",
    a: "Yes. The Moon slowly travels around Earth, taking about a month for one full trip. It also appears to cross the sky each night because Earth is spinning.",
  },
  {
    q: "Why does the Moon follow everyone at the same time?",
    a: "Because it is so far away, everyone in your town sees almost the same view of it. So it can seem to follow you, your friend, and a bus driver all at once.",
  },
];

export default function MoonFollowArticle() {
  return (
    <Article
      question="Why Does the Moon Follow Me?"
      lead="You're in the car, or walking home in the evening, and the Moon comes with you. Streetlights flash past, trees disappear behind you — but the Moon stays right there. Is it following you? Not really. Something cleverer is going on."
      faqs={faqs}
    >
      <h2>The short answer</h2>
      <p>
        The Moon looks like it follows you because it is <strong>very, very
        far away</strong>. Things that are close to you sweep past quickly
        when you move. Things that are extremely far away seem to stay in the
        same place — and your brain reads that as &ldquo;it&apos;s coming
        with me.&rdquo;
      </p>
      <h2>Try this with your eyes</h2>
      <p>
        Hold your thumb up at arm&apos;s length and look at it with one eye,
        then the other. Your thumb seems to jump sideways against the wall
        behind it. That jump is called <strong>parallax</strong> — nearby
        things shift a lot when your viewpoint moves a little. Now look at a
        mountain far away and walk a few steps. It hardly seems to move at
        all, because a few steps is nothing compared with its distance.
      </p>
      <p>
        The Moon is the extreme version. It is about 384,000 kilometres
        away — you could fit roughly 30 Earths in a line between us and
        the Moon. Driving across town changes your position by a few
        kilometres, which is less than a whisker compared with that
        distance. So the Moon&apos;s direction in your sky stays nearly the
        same, while fences, houses and trees — only metres away — zoom
        backwards past you. Put those two together and your brain decides
        the Moon must be travelling along beside you.
      </p>
      <h2>So is the Moon moving at all?</h2>
      <p>
        Yes, but slowly and in its own way — not because of you. The Moon
        orbits Earth, taking about 27 days to go all the way around. And
        because Earth spins once a day, the Moon (like the Sun and stars)
        appears to rise, cross the sky and set. That slow drift is real.
        The &ldquo;following&rdquo; you notice on a car ride is the distance
        trick on top of it.
      </p>
      <div className="try-it">
        <h2>Try it together tonight</h2>
        <p>
          On your next evening walk, pick a tree or lamppost and watch it
          slide past as you walk. Then watch the Moon. Walk faster, walk
          slower, even turn around — the tree behaves, the Moon
          &ldquo;follows&rdquo;. Now you know its secret: it isn&apos;t
          following you at all. It&apos;s just too far away to be left
          behind.
        </p>
      </div>
      <p>
        The Moon seems to follow everyone in town at the same time, all
        seeing nearly the same Moon — one more clue that distance, not
        magic, is doing the work. Questions like this fill our book,{" "}
        <em>Why Does the Moon Follow Me?</em>, with 101 answers just like
        this one.
      </p>
    </Article>
  );
}
