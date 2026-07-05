---
name: palo-design-system
description: Design tokens and UI conventions for the Palo landing page. Use when adding or styling any component, page, or visual element.
---

# Palo design system (web)

The design tokens themselves are the source of truth in `src/index.css`. The rules that
matter most while coding:

- **Minimal, monochrome aesthetic.** Black/white/grey only, plus one accent color
  (`--color-accent`, the app's Material 3 primary gold). Don't add a second color —
  if something needs emphasis, use weight, size, or spacing instead.
- **Never hardcode colors.** Always use the CSS custom properties defined in
  `src/index.css` (`--color-accent`, `--color-on-surface-variant`, etc.).
- **Typography is AR One Sans** for both display and body text (loaded via Google Fonts
  in `index.html`). Don't introduce a second typeface. Body line-height is generous
  (1.6) — keep it that way, don't tighten it.
- **Corner radii**: `--radius-sm` (10px) for buttons/inputs, `--radius-lg` (24px) for
  larger containers like the phone mockup.
- **Spacing** follows the `--space-1` … `--space-8` scale (4px base unit). Prefer more
  whitespace, not less — this is a sparse, editorial layout, not a dense dashboard.
- **CSS Modules**, one per component (`Component.module.css` next to `Component.tsx`).
  No global utility-class framework, no CSS-in-JS.
- **Brand wordmark**: the header uses a plain "PALO" text wordmark (uppercase,
  letter-spaced) — there is no logo image. If a graphical logo is needed later, re-export
  the path data from the Android app's `palo.xml` vector drawable.
- **Layout stays sparse**: Header is just the "PALO" wordmark + one lowercase "download"
  link (no nav items). Home is headline + one phone-shaped hero `<video>` (light/dark
  variants in `public/videos/`, swapped by `prefers-color-scheme`) — no carousels,
  feature grids, secondary CTAs, or extra sections unless explicitly asked for. Footer is
  exactly three links: privacy policy, delete your data, contact.

## Auto-update rule

If Laura corrects a UI choice (wrong color, wrong spacing, wrong component shape),
add the correction here as a new bullet so it isn't relitigated later.
