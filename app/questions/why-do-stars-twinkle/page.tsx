import type { Metadata } from "next";
import Article from "@/components/Article";
import type { FaqItem } from "@/components/Faq";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Do Stars Twinkle? (Explained for Kids)",
  description:
    "Stars don't really twinkle — Earth's wobbly air bends their light on its way to your eyes. A simple, accurate answer for kids ages 5–9, and why planets don't twinkle.",
  keywords: [
    "why do stars twinkle for kids",
    "stars twinkle atmosphere explained simply",
    "questions kids ask about space",
    "space questions answered for children",
  ],
  openGraph: {
    title: "Why Do Stars Twinkle? (Explained for Kids)",
    description:
      "The twinkle isn't in the star — it's in our air. Here's the kid-friendly science behind the song.",
    url: `${SITE_URL}/questions/why-do-stars-twinkle`,
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Are stars really flashing on and off?",
    a: "No. A star's light is steady. The twinkle is added on the very last part of its journey, as the light passes through Earth's moving air.",
  },
  {
    q: "Why don't planets twinkle?",
    a: "Planets are much closer than stars, so they appear as tiny discs of light instead of single points. The air's wobbles average out across the disc, so planets shine steadily.",
  },
  {
    q: "Why do stars twinkle more near the horizon?",
    a: "Starlight from low in the sky travels through more air to reach you, so it gets bent and wobbled more — and twinkles harder.",
  },
  {
    q: "Do stars twinkle in space?",
    a: "No. Above Earth's atmosphere there is no air to bend the light, so astronauts see stars shining perfectly steady.",
  },
];

export default function StarsTwinkleArticle() {
  return (
    <Article
      question="Why Do Stars Twinkle?"
      lead="'Twinkle, twinkle, little star' might be the most famous science song ever — but the star isn't doing the twinkling. The air above your head is."
      faqs={faqs}
    >
      <h2>The short answer</h2>
      <p>
        Starlight travels through space in a perfectly straight, steady
        beam for trillions of kilometres. Then, in the last tiny part of
        its journey, it has to pass through Earth&apos;s air — and the air
        is never still. Pockets of warm and cool air keep drifting,
        swirling and rising overhead. As starlight crosses those moving
        pockets, it gets <strong>bent a little this way and that</strong>,
        thousands of times a second. By the time it reaches your eyes, the
        star seems to flicker, dance and change brightness. That flicker is
        the twinkle.
      </p>
      <h2>Like looking through wobbly water</h2>
      <p>
        Have you ever looked at a coin at the bottom of a swimming pool?
        It seems to wobble and shimmer, even though the coin is sitting
        perfectly still. The moving water bends the light coming from the
        coin. Our atmosphere does the same thing: we live at the bottom of
        an ocean of air, and stars are the coins. On windy, wobbly-air
        nights, stars twinkle wildly. On calm, still nights, they shine
        much more steadily.
      </p>
      <h2>The planet test</h2>
      <p>
        Here is a detective trick astronomers use. Stars are so far away
        that even through a telescope they are mere pinpoints of light, so
        one wobble of air can throw a star&apos;s whole beam around.
        Planets, like Venus and Jupiter, are far closer. They show up as
        tiny discs — hundreds of pinpoints bundled together. The air still
        bends their light, but the wobbles cancel out across the disc, so
        planets usually shine with a calm, steady light. So on your next
        night walk: if it twinkles, it&apos;s a star; if it glows steady
        and bright, it might be a planet.
      </p>
      <h2>Why stars twinkle less in the countryside</h2>
      <p>
        If you have ever seen the night sky far from a city, you may have
        noticed the stars look calmer there. City air is full of rising heat
        from roads, roofs and car exhausts, which makes the air above a city
        extra wobbly — and extra wobbly air means extra twinkling. Dark,
        cool countryside air is steadier, so the same stars shine more
        quietly. The stars never changed; only the air you are looking
        through did.
      </p>
      <div className="try-it">
        <h2>Try it together</h2>
        <p>
          Tonight, find the brightest star you can and watch it for a full
          minute. Notice its colour changing slightly as it twinkles — that
          is the air splitting its light. Then look for the steadiest,
          brightest &ldquo;star&rdquo; in the sky and check with a grown-up:
          it may be Jupiter or Venus, passing the planet test.
        </p>
      </div>
      <p>
        Telescopes have the same problem, which is one reason the biggest
        observatories are built on dry mountaintops, above as much wobbly
        air as possible — and why space telescopes like Hubble don&apos;t
        fight twinkles at all. Questions like this fill our book,{" "}
        <em>Why Does the Moon Follow Me?</em>, with 101 answers just like
        this one.
      </p>
    </Article>
  );
}
