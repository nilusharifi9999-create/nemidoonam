# GARFI — Base44 Dev Environment

## Project Overview
Persian-language (RTL) PWA landing page for GARFI, a social companionship + services marketplace.
Built with Vite 6 + React 18. No backend, no external services, no secrets required.

## Tech Stack
- **Framework:** Vite 6 + React 18 (JavaScript/JSX, no TypeScript)
- **Font:** Vazirmatn (loaded from Google Fonts CDN in index.html)
- **Styling:** Plain CSS with CSS custom properties (design tokens in `src/styles/tokens.css`)
- **Mascot:** Original SVG cat character (`src/components/Mascot.jsx`) with variants: idle, laptop, heart, megaphone, shield

## Setup & Run
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- App serves on **port 3000** (Vite dev server)
- Dependencies install on container startup via `npm install`
- Source is bind-mounted; edits hot-reload via Vite HMR
- Healthcheck: `curl -f http://localhost:3000/`

## File Structure
- `src/styles/tokens.css` — design tokens (colors, typography, spacing, radius, shadows, transitions)
- `src/styles/global.css` — base styles, resets, utility classes (glass, buttons, reveal)
- `src/styles/landing.css` — all landing page component styles
- `src/components/` — one file per page section (Header, Hero, Pillars, HowItWorks, Categories, Companions, Services, Testimonials, TrustSafety, FinalCTA, Footer)
- `src/components/Reveal.jsx` — scroll-reveal wrapper using IntersectionObserver
- `src/components/Mascot.jsx` — reusable SVG mascot with variant prop

## Design System
- **Colors:** pink `#ff3e7a` (primary), orange `#ff8c42` (mascot/accent), dark `#1a1a1a` (bg), cream `#fff8f0`
- **Glass:** `rgba(45,45,45,0.45)` + `backdrop-filter: blur(14px)` + subtle border
- **Buttons:** `.btn-primary` (pink gradient pill), `.btn-outline` (transparent w/ border)
- **Motion:** float animations on mascot/blobs, scroll reveals, hover lifts; all gated by `prefers-reduced-motion`

## Notes
- All copy is in Persian, layout is `dir="rtl"` on `<html>`
- Carousel components use native horizontal scroll with snap + arrow buttons
- No external credentials needed; the app is fully self-contained
