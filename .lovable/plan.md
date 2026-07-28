## Goal
On tablet & mobile, the Domain Chapters comparison rail should show **two sections per slide** (side by side) instead of one — so slide 1 = Sections 1 + 2, slide 2 = Sections 3 + 4. Desktop grid stays exactly as-is.

## Changes (only `src/components/DomainChapters.tsx`)

1. **Pair the sections for the rail**
   - Build `PAIRS = [[S1, S2], [S3, S4]]` derived from the existing `SECTIONS` array (chunk of 2), so content stays a single source of truth.

2. **Rail card = one pair**
   - Each `[data-rail-card]` renders a 2-column inner grid (`grid-template-columns: 1fr 1fr`, ~10-12px gap) containing two `renderSection(...)` calls in the existing `rail` (compact) variant.
   - Card width widens so both columns are readable: `width: 92vw` on mobile, `88vw / max-width 760px` from 640px up. Keeps `scroll-snap-align: center`.
   - Thin vertical hairline divider (`COLORS.border`) between the two columns, consistent with current styling.

3. **Compact-er typography inside paired cards**
   - Slightly tighten the compact variant padding only inside the rail pair (icon block 32px, chapter row padding 6px 8px) so two columns fit on small phones without changing desktop or overall design language.

4. **Navigation controls stay, re-indexed to pairs**
   - Chip bar: 2 chips labelled `Sections 1–2` and `Sections 3–4` (same pill styling and accent logic, accent taken from the first section of each pair).
   - Dots: 2 dots instead of 4, same active-width animation.
   - Helper line updates to "Swipe sideways to compare all 4 sections" → "Swipe to compare Sections 1–2 and 3–4".
   - `onRailScroll` / `goTo` logic unchanged (they operate on `[data-rail-card]` nodes, which now number 2).

5. **Untouched**
   - Desktop grid, all colors, fonts, animation variants, "Also Called" expand behaviour and shared expand keys (rows stay aligned across all columns).

## Technical note
No new dependencies, no data changes, no other files edited. Everything is contained within the existing `dc-compare` block and the component's inline `<style>` rules.
