# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint
```

No test suite is configured.

## Git Workflow

Commit and push to GitHub regularly throughout any session — after each meaningful unit of work (new feature, bug fix, content update, etc.) — so progress is never lost.

- Use clear, specific commit messages describing what changed and why (e.g. `add surfing card to passions section`, `fix flashcard close on mobile`)
- Push to `main` after each commit: `git push origin main`
- Never let a session end with uncommitted or unpushed changes

> **Node requirement:** The project uses Vite 5 (not 6+) because the local Node.js is v20.3.0. Do not upgrade Vite or create-vite beyond v5.x without first upgrading Node.

## Architecture

**Single-page app** — one scrollable page: a hero section followed by themed content sections. No router.

**Data layer** — `src/data/sections.js` is the sole source of truth for all content. Each section has an `id`, `title`, and `cards` array. Each card has `image`, `title`, and `detail`. To add a section or card, edit only this file.

**Component hierarchy:**
```
App
├── NavBar          — sticky nav; reads section ids/titles from sections.js
├── Hero            — compact header (pt-24 pb-16), no background image, headshot + bio
└── Section (×N)    — one per entry in sections.js
    └── ImageCard (×N)
        └── FlashCard   — modal, rendered inline via useState; Framer Motion rotateY flip-in
```

**FlashCard pattern** — `ImageCard` owns the open/close state locally (`useState`). `FlashCard` is rendered inline (not portaled), using a `fixed inset-0` overlay. It listens for `Escape` via `useEffect` and accepts an `onClose` prop for click-outside/button dismissal.

**Styling** — Tailwind CSS v3 utility classes throughout. Custom design tokens are defined in `tailwind.config.js`:
- `bg-bg` / `#d8e8c4` — earthy sage-green page background (light theme)
- `text-ink` / `#1e3120` — primary dark text (dark forest green)
- `text-muted` / `#4a6b4c` — secondary/subdued text
- `text-accent` / `#7a5c10` — warm amber accent (darker for legibility on green bg)
- `text-forest` / `#2d6a4f` — forest green (used for headings, logo)
- `offwhite` / `#f0ece3` — used only for hover-fill button text

Fonts (Archivo Black, Playfair Display, Inter) are loaded via Google Fonts in `index.html`. Use `font-display`, `font-serif`, `font-body` Tailwind classes.

**Animations** — Framer Motion is used for: hero entrance (`initial`/`animate`), scroll-triggered section/card reveals (`whileInView`), hover state on `ImageCard`, and the `FlashCard` flip-in (`rotateY`).

**Images** — all images live in `public/images/` and are referenced as `/images/filename.jpg`. Every `<img>` has an `onError` fallback that hides the broken image and shows a CSS gradient on the parent container instead, so the UI never breaks without real photos.
