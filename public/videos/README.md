# Hero videos

Drop the landing-page hero videos here. There are **two variants** — the site
swaps between them automatically based on the visitor's system theme
(`prefers-color-scheme`):

| File | Shown when |
|---|---|
| `hero-light.webm` | Light mode (default) |
| `hero-dark.webm`  | Dark mode |

Optional MP4 fallbacks (for browsers without WebM support) are also referenced,
add them if you have them:

- `hero-light.mp4`
- `hero-dark.mp4`

## Specs

- **Aspect ratio:** phone-shaped, ~9:19.5 (portrait). The slot uses `object-fit: cover`.
- Muted, autoplaying, looping — keep them short and light (no audio track needed).
- Until these files exist, the hero shows an empty placeholder slot.

Wired up in [`src/pages/Home.tsx`](../../src/pages/Home.tsx).
