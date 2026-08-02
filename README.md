# Econovo Club — Next.js Website

A full Next.js 14 (App Router) + TypeScript rebuild of the Econovo club MVP,
with real scroll-reveal animations, a working dark mode, an animated stats
counter, and a functional FAQ accordion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **React 18**
- **lucide-react** for icons
- Plain CSS with design tokens (no Tailwind) — see `app/globals.css` and
  `app/sections.css`

## Project Structure

```
econovo-nextjs/
├── app/
│   ├── layout.tsx        # Root layout, metadata, theme-flash prevention script
│   ├── page.tsx           # Assembles all sections into the homepage
│   ├── globals.css        # Design tokens, resets, shared utility classes
│   └── sections.css       # Navbar, hero, and all section-specific styles
├── components/
│   ├── Navbar.tsx          # Sticky nav, mobile drawer, scroll state
│   ├── ThemeToggle.tsx     # Dark/light mode switch (persists to localStorage)
│   ├── ScrollProgress.tsx  # Top scroll-progress bar
│   ├── Hero.tsx            # Hero section with staggered entrance animation
│   ├── TrustBar.tsx        # Auto-scrolling marquee ticker
│   ├── StatsSection.tsx    # Animated count-up stats
│   ├── EmpathySection.tsx  # Dark "about" callout box
│   ├── WhySection.tsx      # 4-card "why join" grid
│   ├── PillarsSection.tsx  # Focus areas (Economics/Business/Innovation/FinTech)
│   ├── JourneySection.tsx  # 4-step timeline
│   ├── TeamSection.tsx     # Team member cards
│   ├── EventsSection.tsx   # Upcoming events list
│   ├── FaqSection.tsx      # Accordion FAQ (client component, useState)
│   ├── CtaSection.tsx      # Final call-to-action band
│   ├── Footer.tsx          # Footer with social links
│   ├── MobileJoinBar.tsx   # Sticky "Join" bar on mobile
│   └── useReveal.ts        # IntersectionObserver hook powering scroll reveals
├── public/                 # Static assets (add your own images here)
├── package.json
├── next.config.mjs
├── tsconfig.json
└── .gitignore
```

## Getting Started Locally

You'll need **Node.js 18.17+** installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Building for Production

```bash
npm run build
npm run start
```

## Deploying

### Option A — Vercel (recommended, made by the Next.js team)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No config needed.

### Option B — GitHub Pages (static export)

Next.js can export to static HTML, which GitHub Pages can host. Note that
this disables server features (not used here, so it's safe), but you must
add `output: 'export'` to `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
export default nextConfig;
```

Then:

```bash
npm run build
# static files land in /out
```

Push the contents of `/out` to a `gh-pages` branch (or use a GitHub Action)
and enable Pages on that branch in your repo settings.

## Customizing

- **Colors / spacing / fonts** — edit the CSS variables at the top of
  `app/globals.css` (`:root` and `[data-theme='dark']`).
- **Content** (team names, events, FAQ, pillars) — each section's data lives
  as a small array at the top of its component file in `components/`.
- **Images** — replace the logo URL in `Hero.tsx` and `Navbar.tsx`, or drop
  files into `public/` and reference them as `/your-file.png`.
