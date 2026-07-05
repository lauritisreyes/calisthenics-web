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
- **Brand wordmark**: written as the literal string `PAL0` (digit zero, not the letter
  O) — this mirrors the dotted-zero glyph in the Android app's `palo.xml` vector
  drawable/logo. It only appears once, as the Home hero `<h1>`; give it
  `aria-label="Palo"` so screen readers announce the real word. There is no logo image
  and no separate wordmark in the header.
- **Layout stays sparse**: Header is just one lowercase "download" link, right-aligned
  (no logo, no nav items — the brand lives in the Home hero, not the header). Home is a
  centered hero: the large `PAL0` wordmark (`--color-accent`, `clamp()`-scaled display
  size) + one tagline line below it — no phone video, carousels, feature grids,
  secondary CTAs, or extra sections unless explicitly asked for. Footer is exactly three
  links: privacy policy, delete your data, contact.

## Auto-update rule

If Laura corrects a UI choice (wrong color, wrong spacing, wrong component shape),
add the correction here as a new bullet so it isn't relitigated later.
