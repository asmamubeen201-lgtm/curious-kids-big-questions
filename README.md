# Curious Kids, Big Questions — Book Website

Marketing + content site for the **Curious Kids, Big Questions** children's book
series. Book 1: *Why Does the Moon Follow Me?* (WHY Questions: Sky, Moon &
Space, ages 5–9).

Built per the Class 3/4 method: keyword research first, one page per book,
SEO/AEO/GEO on every page (per-page meta + OpenGraph, semantic H1/H2,
FAQPage + Book JSON-LD schema, interlinking between articles, book page and
series page). Hosting decision: **Vercel + Next.js** (not Hostinger/WordPress).

## Stack

- Next.js (App Router) + TypeScript, React 19
- Static-first: every page is prerendered at build time; no database, no paid services
- System fonts only (no external font downloads — fast everywhere)
- Styling: one global CSS file (`app/globals.css`), no CSS framework

## Structure

```
app/
  layout.tsx                         Header/footer, site metadata, WebSite schema
  page.tsx                           Home: series intro, featured book, free answers, email capture
  books/why-does-the-moon-follow-me/ Book 1 page: Book + FAQ schema, 15 questions, series promise
  questions/                         Q&A hub (free content / AEO engine)
    page.tsx                         Hub listing all articles + featured questions
    why-does-the-moon-follow-me/     Full article (~500 words) + FAQ schema + book CTA
    why-is-the-sky-blue/             Full article + FAQ schema + book CTA
    why-do-stars-twinkle/            Full article + FAQ schema + book CTA
  series/                            Series plan (Books 1–4)
  about/                             About the series + our three rules
  sitemap.ts / robots.ts             Generated sitemap.xml + robots.txt
  icon.svg                           Favicon (moon mark)
components/                          Header, Footer, Faq (+JSON-LD helper), Article shell,
                                     EmailCapture (form UI), BookCover (SVG placeholder)
lib/data.ts                          Site URL, book data, 15 questions, articles, series list
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered static)
npm start        # serve the production build
```

## Before launch (checklist)

1. **Site URL** — set `NEXT_PUBLIC_SITE_URL` to the real domain/subdomain
   (defaults to `https://curious-kids-big-questions.vercel.app` in `lib/data.ts`).
2. **Cover art** — replace the SVG placeholder in `components/BookCover.tsx`
   with the real cover (keep the 2:3 aspect ratio).
3. **Amazon buttons** — the book page CTA currently says "Coming soon on
   Amazon"; point it to the live KDP listing URL once published.
4. **Email capture** — `components/EmailCapture.tsx` is a live form UI but is
   NOT wired to a provider yet (it never stores addresses). Connect a
   ConvertKit/Mailchimp endpoint before running launch marketing.
5. **OpenGraph image** — add a real 1200×630 share image (`app/opengraph-image`)
   when cover art is final.

## Deployment (later step — not done yet)

Deployment is intentionally **not** wired up in this repo yet: the GitHub
token currently available is **read-only**, so nothing can be pushed.

When GitHub write access is arranged:

1. Create a GitHub repo (e.g. `curious-kids-book-site`) and push this folder.
2. In Vercel: **New Project → Import** the GitHub repo. Framework preset
   auto-detects Next.js; no build settings to change.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable (your Vercel domain or
   custom domain) in Vercel project settings, then redeploy.
4. Every later `git push` to the main branch auto-deploys (preview deployments
   are created for other branches automatically).
5. After the site is live: submit `sitemap.xml` in Google Search Console
   (Class 5/6 step in the master plan).
