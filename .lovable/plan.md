## Goal
Remove the gray/white "border" around **UG Homepage** and **Ecosystem Growth** so they render truly edge-to-edge. All other pages keep their current framed layout.

## Root cause
`src/pages/Index.tsx` wraps every section in:
- `<div className="min-h-screen bg-gray-50">` — gray shell behind everything
- `<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">` — caps width at 1280px and adds side + vertical padding

On wide screens the gray shell shows as side gutters; the padding also creates an inset on every screen.

## Change (frontend/presentation only, in `src/pages/Index.tsx`)

1. Mark the two full-bleed sections by id:
   ```ts
   const fullBleedIds = new Set(['ug-homepage', 'ecosystem-growth']);
   const isFullBleed = fullBleedIds.has(activeSection);
   ```
2. Conditionally strip the `<main>` container classes when `isFullBleed`:
   - Full-bleed: `<main class="w-full">` (no max-width, no padding, no vertical padding)
   - Otherwise: current `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8`
3. Keep the outer `bg-gray-50` wrapper (so light pages look unchanged), but the full-bleed pages already paint their own dark background across 100% width, fully covering it.
4. Keep the sticky nav and `<Header>` untouched — they remain full-width on top, exactly as today.

No changes to `UGHomepage.tsx`, `EcosystemGrowth.tsx`, or any other component.

## Verification
- Switch to **UG Homepage** on desktop >1280px: dark background reaches both screen edges, no gray gutters, no side padding inset.
- Switch to **Ecosystem Growth**: same — the scaled 1240px stage / mobile fallback sits on a full-bleed dark canvas.
- Switch to **Home, Search Degree, Domain Subjects, Domain Chapters, Role Profile, Domain Explore**: layout unchanged (still framed with side padding on gray-50).
- Confirm via preview screenshots at 1440px and 375px widths.
