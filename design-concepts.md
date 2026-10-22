# Design Concepts — Curious Kids, Big Questions (book-site)

Method (Abdul Wahab's "unique design" reel): compile the full audience context FIRST — know exactly WHO the design is for — then propose concepts (design language + design system + skeleton), pick one, and build it. This document is step 1–3 of that method.

---

## 1. Audience context brief — WHO this site is for

**The buyer is the parent, not the child.**
- US/UK parents of 5–9 year olds; typically aged 28–45.
- Mobile-first: most visits happen on a phone, one-handed, often in the evening.
- Buying moment: bedtime / winding-down time. They are tired. The site must feel calm, not noisy.
- Trust- and safety-conscious: they judge credibility instantly — no garish colours, no cluttered ads-feel, no "cheap printable" look. Clean structure, real science, honest claims = trust.
- Education-conscious: they are deliberately buying learning, not entertainment junk. The design should feel like it belongs next to DK / Usborne / National Geographic Kids on a shelf.
- Price-sensitive but quality-willing: they will pay for a book that looks and reads like quality. Premium-but-warm beats bargain-bin.
- The child is the end audience visually: wonder, night sky, the Moon as a friendly character. If it doesn't spark a kid's "wow", the parent won't buy it for them.

**Design tension to resolve:** *wonder for the child + trust for the parent.* Every concept below is judged on both.
**Hard constraints:** cover harmony (Book 1 cover is deep navy + warm moon-yellow, `#FFD849`), mobile speed (static, system fonts, no webfonts), accessibility (contrast, tap targets), never cheap or garish.

---

## 2. The three concepts

### Concept A — "Storybook Night Sky" ⭐ CHOSEN
- **Design language:** The whole site is one continuous night. Deep-navy "sky" zones (hero, page heads, CTA bands, footer) alternate with warm cream "paper" zones where reading happens — night = wonder, paper = trust. The Moon is the host character: it glows behind the book cover, dots the header, and marks section breaks. Stars are quiet background texture, never confetti.
- **Design system:** Palette sampled from the real cover (deep navy `#0A1638`→`#16265C`, moon yellow `#FFD949`, warm cream paper `#FFFBF0`, coral only as a tiny sunset accent). Rounded display type from system stacks ("Arial Rounded MT Bold" → "Segoe UI") so headings feel storybook without webfont weight. Big radii (18–28px) = soft, safe, kid-soft. Cards = cream paper sheets with warm hairline borders and soft navy shadows; buttons = solid moon-yellow pills with navy text (the single brightest object on any screen = the CTA, just like the Moon in the sky). Chips read as little "moon badges".
- **Skeleton (all pages):** sticky navy header (moon mark + pill nav) → night-sky page head/hero with glowing cover or title → cream content sections with paper cards → a navy "moonlight" band for the book CTA / email capture → navy footer with a starfield top edge. Home adds a trust strip directly under the hero (Ages 5–9 · Fact-checked science · 5-minute answers · Read-aloud friendly).

### Concept B — "Trusted Learning Lab"
- **Design language:** Bright editorial classroom: white/ivory background everywhere, navy text, grid-ruled sections, specimen-label chips, minimal illustration. The "textbook you can trust" look.
- **Design system:** Near-white palette with navy + one yellow accent, squared-off 12px radii, thin ruled dividers instead of shadows, standard sans headings. Buttons = navy solid pills.
- **Skeleton:** light header → plain title block → two-column editorial content → ruled FAQ → light footer.
- **Why not:** It wins on trust but loses the child completely — it looks like every school-supplier and DK-clone page already ranking. Zero ownable identity, no harmony with the navy/yellow cover (the cover would look pasted onto a stranger's site), and nothing for a parent to remember or a kid to point at. Safe, generic, forgettable.

### Concept C — "Bedtime Lamp Glow"
- **Design language:** Maximum cosiness: dusk gradient (navy melting into plum/amber) behind everything, soft blurred amber "lamp glow" blobs, frosted-glass cards, dreamy oversized type.
- **Design system:** Gradient-first palette (navy→plum `#3A2A5C`→amber `#FFB35C`), glassmorphism cards (translucent white + backdrop blur), very large radii, glow shadows everywhere.
- **Skeleton:** gradient header/hero with floating glow orbs → frosted cards floating over gradient → gradient footer.
- **Why not:** Beautiful in a screenshot, wrong in a parent's hands. Full-page gradients and blur are heavy on low-end phones, frosted cards hurt text contrast (a trust and accessibility problem for tired parents at night), plum/amber drifts away from the actual cover (navy + clean moon-yellow), and the dreaminess tips easily into "cute but cheap". It performs the *feeling* of bedtime while undermining the *reading* of bedtime — the product is a book, and books are paper.

---

## 3. The pick — Concept A, "Storybook Night Sky"

**Chosen because it is the only concept that scores on all four boss criteria at once:**
1. **Stands out:** competitors (indie kids-science books, school suppliers) live on white backgrounds. A calm, owned "night sky + paper" world is instantly recognisable in a search result, a shared link preview, and a parent's memory — without a single garish colour.
2. **Parent trust:** the cream paper sections, restrained type, and quiet structure carry the reading/trust load; the navy zones carry wonder. Neither is asked to do the other's job.
3. **Mobile speed:** the entire effect is CSS gradients + system fonts + one cover image. No webfonts, no gradient-blob image payloads, no blur filters on scrolling content.
4. **Cover harmony:** palette, moon motif, and typography are sampled *from* `cover-ebook.jpg` (deep navy + warm moon-yellow), so the site and the book look like one product — the cover sits in the hero with a moon-glow halo instead of floating on a foreign background.

## 4. Token system built from Concept A

Implemented as CSS variables in `app/globals.css` (`:root`):
- **Colour:** `--night-950/900` (deep sky), `--navy-800/700` (brand navy), `--sky-300` (pale starlight links), `--moon-400` (CTA yellow `#FFD949`), `--moon-200/100` (soft moonlight), `--paper-50/100/200` (cream surfaces), `--ink-900/600` (text), `--coral-400` (tiny sunset accent), `--line-warm` (hairline borders).
- **Type:** `--font-display` (rounded system stack) for headings/brand, `--font-body` (system stack) for text; scale `--fs-display/h1/h2/h3/lede/body/small` built on clamps for mobile→desktop.
- **Spacing:** `--space-1…6` scale; `--section-y` fluid section padding.
- **Shape & depth:** `--radius-s/m/l/xl/pill`; `--shadow-card`, `--shadow-lift`, `--shadow-cover` (deep navy), `--glow-moon` (halo for the cover).
- **Components on tokens:** `.btn` (moon pill, navy text, lift on hover), `.btn.secondary` (ghost on night, outline on paper), `.card` (paper sheet), `.card--night`, `.chip` (moon badge), `.faq-item`, `.try-it` (moonlight paper), `.book-cta` (night band), `.email-capture` (paper card, moon ring).
