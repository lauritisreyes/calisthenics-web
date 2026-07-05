# CLAUDE.md

Guidance for AI agents working in this repository. Keep it current when conventions
change.

## What this is

`calisthenics-web` is the marketing/landing website for **Palo**, the calisthenics
training Android app developed in the sibling repo `../calisthenics`
(`com.laura.calisthenics`). It's a static React + TypeScript site (Vite), currently
scoped to:

- A single, deliberately minimal landing page: one headline, one phone-shaped hero
  video, one download link — no carousels, feature grids, or extra sections.
- Two Play Store–required legal pages: Privacy Policy and Data Deletion.

More sections (blog, changelog, i18n, etc.) may be added later — don't over-build for
that now.

## Stack

- **Vite + React 19 + TypeScript**, no framework beyond that (no Next.js, no SSR).
- **react-router-dom** with `HashRouter` — chosen so the built `dist/` can be served
  as a static site from a GitHub Pages project subpath without server-side rewrites.
- **CSS Modules** for styling. Design tokens (colors, typography, spacing, shape) live
  in `src/index.css` and mirror the Android app's Material 3 theme; the
  `palo-design-system` skill summarizes the conventions.
- **oxlint** for linting (`npm run lint`).

## Build & test

```bash
npm install
npm run dev       # local dev server (also wired to .claude/launch.json as "dev")
npm run build      # tsc -b && vite build → dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

No test runner is set up yet — there's no meaningful logic to unit test in a landing
page. If interactive logic is added later, add Vitest at that point.

## Project structure

```
src/
  components/   Header, Footer, Layout, LegalPage styles
  pages/        Home, PrivacyPolicy, DataDeletion
  constants.ts  Shared values (e.g. PLAY_STORE_URL)
  index.css     Design tokens (CSS custom properties) + global resets
  App.tsx       HashRouter + route table
public/videos/        Hero videos (light/dark), plus a README with specs
.claude/
  launch.json   Dev server config for the preview tool
  skills/       Project-scoped skills (see below)
.github/workflows/deploy.yml   GitHub Pages deploy workflow (inert until pushed +
                                 Pages enabled with source "GitHub Actions")
```

## Conventions (match these)

- **Design tokens only.** Never hardcode a color, radius, or spacing value in a
  component — use the CSS custom properties from `src/index.css`.
- **One CSS Module per component**, colocated (`Foo.tsx` + `Foo.module.css`).
- **Routes** are added directly in `src/App.tsx`'s `<Routes>` — this is small enough
  that a separate route-config file would be premature.
- **Content accuracy**: the Privacy Policy and Data Deletion pages make factual claims
  about the Android app's data handling — cross-check against `../calisthenics` before
  editing them, don't invent data practices.
- **Brand wordmark**: the header uses a plain "PALO" text wordmark (uppercase,
  letter-spaced) — there is no logo image/SVG. If a graphical logo is wanted later,
  re-export the path data from the Android app's `palo.xml` vector drawable.
- **Hero video**: the home page shows a phone-shaped `<video>` with separate light and
  dark variants, swapped via `prefers-color-scheme`. Files live in `public/videos/`
  (`hero-light.*` / `hero-dark.*`) — see `public/videos/README.md` for specs.

## Deployment

Not yet deployed. `vite.config.ts` uses `base: './'` (relative) so the build works
from any path, including a GitHub Pages project subpath. `.github/workflows/deploy.yml`
is prepared (build + `actions/deploy-pages`) but only runs once this repo is pushed to
GitHub and Pages is enabled in Settings with source "GitHub Actions" — nothing here
triggers automatically before that.

## Key files

- `src/App.tsx` — routes.
- `src/index.css` — design tokens.
- `src/pages/{Home,PrivacyPolicy,DataDeletion}.tsx`.
- `../calisthenics/CLAUDE.md` — the Android app's own agent guidance, useful context
  for what Palo actually does and how it handles user data.
