Lock the Ecosystem Growth page to a single fixed desktop composition so it looks identical on every screen size (mobile, tablet, desktop). Instead of the layout reflowing (cards stacking, grids collapsing, fonts scaling), the entire page will render at a fixed desktop width and smaller screens will horizontally scroll to view it — matching the approach previously used for the "Final Ecosystem Summary" dashboard.

**Why the design was changing before**
The page currently uses responsive techniques that intentionally adapt to screen size:
- `clamp()` on every font size → text shrinks on small screens.
- `@media (min-width: 820px)` rules → card top section and reason row switch from 1-column (mobile) to 2-column (desktop).
- `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` on the timeline → 3 columns on desktop, fewer on narrow screens.
- `clamp()` on paddings and gaps → spacing shrinks on mobile.

These are the reasons the design "changes" between screens. To make it identical everywhere, all of these must be replaced with fixed values.

**What will change in `src/components/EcosystemGrowth.tsx`**

1. Wrap the entire page content in a fixed-width stage (e.g. `width: 1240px`, `min-width: 1240px`) inside an outer wrapper with `overflow-x: auto`. On mobile the user swipes horizontally; the design itself never reflows.
2. Replace every `clamp(...)` font-size with the single desktop value (the upper bound of the current clamp). Example: `clamp(9px, 1.2vw, 11px)` → `11px`.
3. Replace every `clamp(...)` padding/gap/margin with the desktop value.
4. Remove all `@media (min-width: 820px)` blocks and hard-code the desktop grids:
   - `.ug-eg-card-top` → `grid-template-columns: minmax(220px, 320px) 1fr` always.
   - `.ug-eg-reason-row` → `grid-template-columns: 1fr 1fr` always.
5. Change `.ug-eg-timeline` from `auto-fit` to a fixed `grid-template-columns: repeat(3, 1fr)` so it's always 3 columns.
6. Keep `prefers-reduced-motion` rule and all colors, gradients, animations, and content unchanged.

**Trade-off the user should know**
This is the exact behavior they asked for: the design will never adapt. On phones and small tablets, users will need to scroll horizontally to see the full page. That's the cost of "same design on all screens."

**Verification**
- Build check for CSS/syntax errors.
- Playwright screenshots at 375px, 768px, and 1280px viewports — all three should show the identical desktop composition (with horizontal scroll available on the two smaller ones).