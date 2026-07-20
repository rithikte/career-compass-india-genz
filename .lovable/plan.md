## Problem

The Ecosystem Growth page renders a fixed 1240px desktop stage and uses `transform: scale()` to fit it into narrower screens. On a 390px mobile viewport that means a ~0.31× scale — so an 11px label becomes ~3.4px, unreadable. The design looks identical everywhere, but text is illegibly small on phones.

Scale-to-fit and legible-mobile-text are fundamentally in tension: you can't shrink the whole layout uniformly AND keep font sizes readable. We need to pick one trade-off.

## Options

**Option A — Boost base font sizes so they stay readable after scaling (recommended)**
Keep the current scale-to-fit approach (same design everywhere, no horizontal scroll), but increase the base font sizes in the 1240px stage so that after mobile scaling they still land at a readable size.

- Target mobile floor: ~12–13px for body, ~10px for micro-labels after scaling.
- At ~0.31× scale, that means base sizes of ~38–42px body and ~32px labels in the stage — which would look oversized on desktop.
- Compromise: raise base sizes moderately (body 1.1rem → renders ~5.5px mobile, 17.6px desktop). Still too small on mobile.
- **Verdict: math doesn't work.** Uniform scaling cannot deliver legible mobile text without breaking desktop.

**Option B — Drop uniform scaling on mobile; use a responsive layout under a breakpoint (recommended)**
Keep the fixed 1240px scaled stage for tablet/desktop (≥768px) so the "same design" promise holds where it visually matters. Below 768px, switch to a native responsive layout:
- Single-column cards, full width.
- Font sizes in `rem`/`clamp()` that stay readable (13–16px body, 10–11px micro-labels).
- Same colors, accents, card structure, timeline, reason/remember blocks — only the grid and scaling change.

Users on phones see a phone-native version of the same content; users on laptops/desktops see the exact fixed design. This matches how the rest of the app already handles mobile.

**Option C — Keep scale-to-fit, add a "zoom to read" affordance**
Leave layout as-is, add a pinch-zoom hint or an "expand" toggle that switches mobile users to horizontal-scroll mode. Doesn't fix legibility by default; adds friction.

## Recommendation

Go with **Option B**. It's the only one that actually makes fonts readable on phones without sacrificing the locked desktop design.

## Implementation (Option B)

File: `src/components/EcosystemGrowth.tsx`

1. Add a `useEffect` + `matchMedia('(max-width: 767px)')` (or reuse `useIsMobile`) to detect mobile.
2. When mobile:
   - Skip the `scale` transform and fixed 1240px width entirely.
   - Render the same JSX with a `.ug-eg-mobile` class on the root that overrides:
     - `.ug-ecosystem-growth`: `width: 100%; min-width: 0; padding: 32px 20px;`
     - `.ug-eg-card`: `padding: 24px 20px; padding-left: 28px;`
     - `.ug-eg-card-top`: `grid-template-columns: 1fr; gap: 16px;`
     - `.ug-eg-timeline`: `grid-template-columns: 1fr;` (stack 3 timeline cells vertically)
     - `.ug-eg-reason-row`: `grid-template-columns: 1fr;`
     - Font sizes: headline `2rem`, section title `1.4rem`, card title `1.15rem`, index-num `3.2rem`, body copy `0.9rem`, micro-labels `10px`.
3. When ≥768px: keep the current scale-to-fit behavior unchanged.

No content, colors, motion, or component structure change. Desktop remains pixel-identical to today.

## Out of scope

- Changing the desktop composition.
- Tweaking copy, accents, or animations.
- Touching any other page.
