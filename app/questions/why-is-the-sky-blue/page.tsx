import type { Metadata } from "next";
import Article from "@/components/Article";
import type { FaqItem } from "@/components/Faq";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Is the Sky Blue? (Explained for Kids)",
  description:
    "Sunlight looks white and air is invisible — so why is the sky blue? A simple, accurate answer for kids ages 5–9, plus why sunsets turn red and orange.",
  keywords: [
    "why is the sky blue book for kids",
    "why is the sky blue explained for kids",
    "curious kids science questions and answers",
    "questions kids ask about space",
  ],
  openGraph: {
    title: "Why Is the Sky Blue? (Explained for Kids)",
    description:
      "Sunlight is a rainbow in disguise, and the air scatters the blue part everywhere. Here's the kid-friendly science.",
    url: `${SITE_URL}/questions/why-is-the-sky-blue`,
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "If sunlight has all the colours, why isn't the sky rainbow-coloured?",
    a: "The air scatters blue light much more strongly than the other colours, so blue is the colour that gets sprayed all across the sky. The rest mostly travels straight through.",
  },
  {
    q: "Why is the sky orange and red at sunset?",
    a: "At sunset, sunlight takes a much longer path through the air. By the time it reaches you, most of the blue has been scattered away, leaving the reds and oranges behind.",
  },
  {
    q: "Is the sky blue on other planets?",
    a: "Not always. Mars has thin, dusty air, so its daytime sky looks butterscotch-orange. The Moon has almost no air at all, so its sky stays black even in daytime.",
  },
  {
    q: "Why are clouds white if the sky is blue?",
    a: "Clouds are made of water droplets that are much bigger than air molecules. They scatter all colours about equally, which mixes back into white.",
  },
];

export default function SkyBlueArticle() {
  return (
    <Article
      question="Why Is the Sky Blue?"
      lead="The air above you is invisible, and sunlight looks plain white — so where does all that blue come from? The answer is hiding inside sunlight itself."
      faqs={faqs}
    >
      <h2>The short answer</h2>
      <p>
        Sunlight is not really white. It is a <strong>mixture of every
        colour of the rainbow</strong> blended together. When sunlight
        reaches Earth, it runs into the air — and the air grabs the blue
        part of the light and scatters it in every direction. Whichever way
        you look, some of that scattered blue light reaches your eyes. So
        the whole sky glows blue.
      </p>
      <h2>Light comes in waves</h2>
      <p>
        Light travels in waves, like ripples on a pond. Each colour has its
        own wave size: red light has long, lazy waves, while blue light has
        short, tight waves. The air around Earth is made of incredibly tiny
        specks called molecules — far too small to see. Those specks are
        just the right size to bump into the short blue waves and bounce
        them all over the place. Scientists call this{" "}
        <strong>scattering</strong>. The long red waves mostly sail straight
        past and carry on.
      </p>
      <p>
        Imagine throwing two kinds of balls through a forest of skinny
        trees. Big, slow balls roll mostly straight through. Small, bouncy
        balls ping off tree after tree and end up everywhere. Blue light is
        the bouncy ball — it gets pinged around the whole sky, which is why
        the blue seems to come from every direction at once, not just from
        the Sun.
      </p>
      <h2>Then why are sunsets red?</h2>
      <p>
        At sunset, the Sun is low, so its light must travel a much longer
        way through the air to reach you. On that long trip, nearly all the
        blue gets scattered away before the light arrives. What&apos;s left
        is the part that travelled straight: the reds, oranges and pinks.
        That is why the daytime sky and the sunset sky are the same trick,
        viewed from two different distances.
      </p>
      <div className="try-it">
        <h2>Try it together</h2>
        <p>
          Fill a clear glass with water and stir in a few drops of milk.
          Shine a torch through it in a dark room. From the side, the water
          glows faintly blue; looking straight through the beam, it looks
          yellowy-orange. You have just made a tiny sky — and a tiny sunset
          — in a glass.
        </p>
      </div>
      <p>
        And here is a bonus wonder: astronauts on the Moon stand under a
        black sky even at midday, because the Moon has almost no air to
        scatter the blue. Our blue sky is a gift from the air we breathe.
        Questions like this fill our book, <em>Why Does the Moon Follow
        Me?</em>, with 101 answers just like this one.
      </p>
    </Article>
  );
}
