# Technoliberals Inc. — Website

A fast, lightweight, single-page marketing site for **Technoliberals Inc.** —
_AI transformation and product engineering for transaction-heavy businesses._

Built with **Astro + TypeScript + Tailwind CSS**, statically generated, with
near-zero client-side JavaScript (only a small mobile-menu toggle and the
contact form's success state).

---

## Project overview

- **Goal:** generate serious enterprise leads.
- **Positioning:** AI transformation and product engineering for fintech,
  commerce, marketplaces, logistics, ERP/CRM, and enterprise workflow automation
  in emerging markets.
- **Primary CTA:** Book a Strategy Call · **Secondary:** Explore Services ·
  **Tertiary:** Discuss an AI / Claude Use Case.

### Sections (in order)

Header → Hero → Trust strip → Problem → Services (bento grid) → Claude Partner →
Industries → Proof (representative experience) → Process → Engagement models →
Final CTA → Contact form → Footer.

### Tech choices

| Area        | Choice                                                        |
| ----------- | ------------------------------------------------------------- |
| Framework   | Astro (static output)                                         |
| Language    | TypeScript                                                    |
| Styling     | Tailwind CSS v3 via PostCSS (no UI/animation libraries)       |
| Icons       | Hand-written inline SVG (no icon packs)                       |
| Fonts       | System font stack (no web-font requests, no layout shift)     |
| JS shipped  | ~tiny: mobile menu + contact form success state only          |

There are **no React, animation, carousel, or component libraries** — by design.

---

## Requirements

- **Node.js 18.17+** (Node 20+ recommended)
- npm (bundled with Node)

## Setup

```bash
npm install
```

## Local development

```bash
npm run dev
```

Then open the URL printed in the terminal (default `http://localhost:4321`).

## Build (production)

```bash
npm run build
```

Output is written to `dist/`.

## Preview the production build

```bash
npm run preview
```

---

## Deployment

The site is fully static — host the `dist/` folder anywhere.

### Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Astro. Confirm:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy. (Optional CLI: `npm i -g vercel && vercel`.)

### Netlify

1. Push the repository to your Git provider.
2. In Netlify, **Add new site → Import an existing project**.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. (Optional CLI: `npm i -g netlify-cli && netlify deploy --build`.)

> After deploying, update the production domain in three places:
> `astro.config.mjs` (`site`), `public/robots.txt` (`Sitemap:`), and
> `public/sitemap.xml` (`<loc>` + `<lastmod>`).

---

## Performance notes

- **Static HTML** with critical CSS inlined (`build.inlineStylesheets: 'auto'`).
- **No web fonts** — uses the system font stack, so no font download or FOUT/CLS.
- **No images** — the logo, social card, and hero diagram are inline/lightweight SVG.
- **Minimal JS** — two small vanilla scripts; no framework runtime is shipped.
- **No layout shift** — fixed dimensions and system fonts keep CLS ~0.
- **Reduced motion** is respected globally via `prefers-reduced-motion`.

Targets: Lighthouse Performance / Accessibility / Best Practices / SEO **95+**.
Run an audit against the **production build** (`npm run build && npm run preview`),
not the dev server, for representative numbers.

### Social share image

`public/og.svg` is used for Open Graph / Twitter. SVG keeps the repo light, but
some social platforms don't render SVG previews. **For best compatibility,
export a 1200×630 PNG** (e.g. `og.png`), drop it in `public/`, and update the
`ogImage` default in `src/layouts/BaseLayout.astro`.

---

## Contact form — backend TODO

The form in `src/components/ContactSection.astro` is **frontend-only**: it
validates required fields, blocks naive bots with a honeypot, and shows a
graceful success state. It does **not** send anything yet.

To make it live, replace the marked block in the component's `<script>`:

```ts
// TODO (current placeholder)
form.classList.add('hidden');
success?.classList.remove('hidden');
```

with a real submission, for example:

```ts
const data = Object.fromEntries(new FormData(form).entries());
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
if (!res.ok) throw new Error('Request failed');
```

Common options:

- **Form backends:** Formspree, Web3Forms, Basin (no server code).
- **Email APIs:** Resend, Postmark, SendGrid (via a serverless function).
- **CRM intake:** HubSpot, Pipedrive, Zoho, or a Slack/Email webhook.

On the server: validate inputs, add rate limiting, keep the honeypot check, and
only show success on a 2xx response. If you add an API route, switch Astro to a
server/hybrid adapter (e.g. `@astrojs/vercel` or `@astrojs/netlify`).

---

## Content editing guide

All copy lives in the component files under `src/components/`. Each section keeps
its content in a small typed array at the top of the file (in the `---`
frontmatter), so editing text rarely means touching markup.

| To change…              | Edit…                                            |
| ----------------------- | ------------------------------------------------ |
| Nav links / brand       | `src/components/Header.astro`                     |
| Hero headline & chips   | `src/components/Hero.astro`                        |
| Stats strip             | `src/components/TrustStrip.astro`                  |
| Services (the bento)    | `src/components/ServicesSection.astro` (`services`)|
| Claude use cases        | `src/components/ClaudePartnerSection.astro`        |
| Industries              | `src/components/IndustriesSection.astro`           |
| Representative work      | `src/components/ProofSection.astro`               |
| Process steps           | `src/components/ProcessSection.astro`              |
| Engagement models       | `src/components/EngagementModels.astro`           |
| Final CTA               | `src/components/FinalCTA.astro`                    |
| Form fields & contacts  | `src/components/ContactSection.astro`             |
| Footer links            | `src/components/Footer.astro`                      |
| SEO title/description    | `src/layouts/BaseLayout.astro`                    |
| Colors / fonts / tokens | `tailwind.config.mjs` + `src/styles/global.css`   |

### Things to update before launch

- [ ] Production domain in `astro.config.mjs`, `public/robots.txt`, `public/sitemap.xml`.
- [ ] Contact email and WhatsApp number (`ContactSection.astro`, `Footer.astro`, `BaseLayout.astro` JSON-LD).
- [ ] Connect the contact form to a backend (see above).
- [ ] Export a PNG Open Graph image (see Performance notes).
- [ ] Swap the “Book a Strategy Call” target for a scheduling link (Calendly / cal.com) if desired.

---

## Brand & legal notes

- **Claude Partner section** describes qualification through the Claude Partner
  Network and is written to stay credible and accurate. It uses **no official
  Anthropic or Claude logos** — only first-party text and SVG. Add official
  assets only if/when you are provided them and permitted to use them.
- **No fabricated testimonials, client names, or logos** are used. The Proof
  section is framed as **Representative Experience**.

---

_Built for transaction-heavy businesses in emerging markets._
