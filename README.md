# Palo — landing page

Marketing website for **Palo**, the calisthenics training app
(`../calisthenics`, `com.laura.calisthenics` on Android). Built with React,
TypeScript, and Vite; styled to match the app's Material 3 theme (design tokens
live in `src/index.css`).

Includes the two pages required for the Google Play Store listing:

- **Privacy Policy** (`/#/privacy`)
- **Data Deletion** (`/#/data-deletion`) — how to request account/data deletion

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Deployment

Not deployed yet. The project is pre-configured for **GitHub Pages**:

- `vite.config.ts` uses a relative `base: './'` so the build works from any subpath.
- `.github/workflows/deploy.yml` builds and publishes `dist/` via GitHub Actions —
  it only runs once this repo is pushed to GitHub and Pages is enabled in
  **Settings → Pages** with source **GitHub Actions**.
- Routing uses `HashRouter`, so no server-side rewrite rules are needed for
  client-side routes to work on a static host.

## Project docs

- [CLAUDE.md](CLAUDE.md) — conventions and context for AI agents working in this repo.
- `src/index.css` — design tokens (colors, typography, spacing) mirrored from the
  Android app.
- `.claude/skills/` — project-scoped skills (design system rules, legal-pages
  accuracy checks).
