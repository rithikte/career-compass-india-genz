# Unified Responsive Typography — PremiumHomePage

## Goal
Keep the current (well-liked) sizes as the desktop anchor, but make every text element scale fluidly on all screens and feel coherent as one type system: **45% Swiss precision · 35% Apple storytelling · 20% editorial contrast**.

## The design blend, translated to type
- **Swiss (45%)** — one consistent scale reused everywhere, generous uppercase tracking on labels, tight controlled heading tracking (`-0.02em`), no random one-off sizes.
- **Apple (35%)** — confident large display headlines, comfortable body line-height (~1.7), calm hierarchy, soft muted secondary lines.
- **Editorial (20%)** — clear contrast between big display type and refined small body/labels, steady rhythm down the page.

## What changes
Only font-size / line-height values in `src/components/PremiumHomePage.tsx`. No layout, color, spacing, content, or animation changes. Headlines already use `clamp()` and stay essentially as-is (only minor smoothing for consistency); the fixed-size elements become fluid.

### Fluid type scale (applied consistently across all 7 sections)
```text
Label (uppercase)   0.6875rem            -> clamp(0.65rem, 0.6rem + 0.2vw, 0.6875rem)
Card eyebrow no.    0.75rem              -> clamp(0.7rem, 0.66rem + 0.2vw, 0.75rem)
Body / list item    1.0625rem (fixed)    -> clamp(0.95rem, 0.9rem + 0.45vw, 1.0625rem)
Card body           0.9375rem (fixed)    -> clamp(0.875rem, 0.84rem + 0.3vw, 0.9375rem)
Card title (h3)     1.0625rem (fixed)    -> clamp(1rem, 0.95rem + 0.4vw, 1.125rem)
Hero paragraph      1.0625rem (fixed)    -> clamp(1rem, 0.95rem + 0.6vw, 1.1875rem)
Closing emphasis p  1.125rem (fixed)     -> clamp(1.0625rem, 1rem + 0.5vw, 1.25rem)
```

### Headlines (already fluid — kept, lightly normalized)
- Hero h1: `clamp(2.4rem, 6.5vw, 4.5rem)` (unchanged)
- Section h2 (Problem): `clamp(1.75rem, 4.5vw, 3rem)` (unchanged)
- Section h2 (others): `clamp(1.6rem, 4vw, 2.6rem)` / `clamp(1.5rem, 3.8vw, 2.4rem)` (unchanged)
- National Impact closing statement: `clamp(1.5rem, 3.4vw, 2.25rem)` (unchanged)
- Line-heights kept: 1.7 for body, ~1.12–1.22 for headings.

### Consistency cleanups
- Every "body / list item" instance across the 7 sections (currently each hardcoded `1.0625rem`) uses the same fluid token, so all lists, comparison cards, and closing lines match exactly.
- Labels in all sections use the same fluid label token.

## Result
- Identical look on desktop to what you already approved.
- Smooth, proportional scaling on tablet and mobile (no abrupt jumps), text never too large or cramped on small screens.
- One coherent Swiss/Apple/editorial type system across all 7 sections.

## Technical note
All edits are isolated to inline `style` `fontSize`/`lineHeight` values in `src/components/PremiumHomePage.tsx`. No other files touched.