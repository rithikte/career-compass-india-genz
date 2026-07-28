## Goal

On desktop the 4 chapter sections sit side by side and can be compared at a glance. On tablet/mobile they currently stack, so each section takes several vertical swipes and students can never see two sections together.

## The idea: a snap-scrolling comparison rail (tablet + mobile only)

Keep the desktop grid exactly as it is. Below the `lg` breakpoint, render the same 4 sections as a single horizontal, snap-scrolling rail — one thumb-swipe moves you from Section 1 to Section 2, sideways instead of down.

```text
 mobile / tablet
 ┌──────────────────────────────────────┐
 │  [S1] [S2] [S3] [S4]   <- tab chips  │
 ├──────────────────────────────────────┤
 │ ┌──────────┐┌──────────┐┌───────     │
 │ │ Section 1││ Section 2││ Sect..     │  ← horizontal
 │ │ RCC      ││ RCC      ││ RCC        │    snap scroll
 │ │ • ch 1   ││ • ch 1   ││ • ch 1     │
 │ │ • ch 2   ││ • ch 2   ││ • ch 2     │
 │ └──────────┘└──────────┘└───────     │
 ├──────────────────────────────────────┤
 │            ● ○ ○ ○                   │
 └──────────────────────────────────────┘
```

Key details that make it actually comparable:

1. **Card width ~82vw on mobile, ~46vw on tablet** — tablet shows two sections at once, mobile shows one plus a peek of the next so it's obvious you can swipe sideways.
2. **Row-aligned content.** All four cards share the same subject/chapter row order and a fixed row height, so scrolling sideways compares the *same* chapter across sections rather than random rows.
3. **Vertical scroll is shared, not per-card.** The rail scrolls horizontally; the page scrolls vertically. So a student scrolls down once to a subject, then swipes left/right to compare all 4 sections at that same point.
4. **Section chips + dots.** Chips above the rail (Section 1–4) jump to a section; dots below show position. Both driven by scroll position so they stay in sync.
5. **"Also called" stays collapsible**, but toggling it on one card toggles the same chapter on all four so rows never drift out of alignment.
6. **Compact mode on mobile**: slightly reduced padding, 6px bullet, chapter text ~0.85rem so a full subject block fits in one screen height.

## Alternative considered

A "chapter-first" view (one chapter, four section values side by side) compares even tighter, but it breaks the existing section/subject hierarchy and reads poorly with these long chapter titles. The rail keeps the existing structure and design language.

## Technical notes

- All work in `src/components/DomainChapters.tsx`; no data changes.
- Desktop grid rendered as-is at `lg+`; rail rendered below `lg` via a media-query-driven branch (reuse `useIsMobile`-style matchMedia at 1024px, or pure CSS with two containers and `display:none` — CSS preferred to avoid layout flash).
- Rail: `display:flex; overflow-x:auto; scroll-snap-type: x mandatory; scroll-behavior:smooth;` with `scroll-snap-align:center` per card, `-webkit-overflow-scrolling:touch`, hidden scrollbar.
- Active index tracked with an `IntersectionObserver` on the cards (root = rail) to drive chips/dots; chips call `scrollIntoView({inline:'center'})`.
- `expanded` state key changes from `section-subject-chapter` to `subject-chapter` so the "Also called" toggle applies across all sections.
- Existing colors, fonts, accents, hover/reduced-motion rules unchanged.
