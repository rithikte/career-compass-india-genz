Make the Ecosystem Growth page show the **exact same desktop composition on every screen** — no horizontal scrolling, no layout reflow — by proportionally scaling the whole design down to fit smaller viewports.

**Approach: CSS scale-to-fit**

Keep the 1240px fixed-width stage that was just built (so the design never reflows), but wrap it in a container that uses a CSS `transform: scale(...)` to shrink the entire stage to the available viewport width. This is the same trick used for pixel-perfect dashboards that must look identical on all devices.

**What will change in `src/components/EcosystemGrowth.tsx`**

1. Remove `overflow-x: auto` from `.ug-eg-scroll` (no more sideways scrolling).
2. Change `.ug-eg-scroll` to be a viewport-width container that contains a scaled inner stage.
3. Add a new `.ug-eg-stage` wrapper around `.ug-ecosystem-growth`:
   - `transform-origin: top left`
   - `transform: scale(var(--eg-scale, 1))`
   - Its parent gets `height: calc(<stage-height> * var(--eg-scale))` so the scaled content doesn't leave empty space below.
4. Set `--eg-scale` responsively using CSS `min()` so the stage always fits: `--eg-scale: min(1, calc((100vw - 32px) / 1240))`. On desktops ≥1240px it stays 1 (unchanged); on smaller screens it shrinks proportionally.
5. Because `transform: scale` doesn't change the element's layout box, use a JS `ResizeObserver` (or a simple `useLayoutEffect` on window resize) to measure the natural stage height and apply the scaled height to the outer wrapper. Small hook, ~15 lines.
6. Keep every internal style exactly as it is (all the fixed 1240px composition, fonts, paddings, grids remain untouched).

**Result**
- Desktop (≥1240px): identical to now.
- Tablet (≈768px): entire page rendered at ~0.6× — same layout, smaller.
- Mobile (≈375px): entire page rendered at ~0.28× — same layout, smaller. Text will be small but the composition is preserved as the user requested.
- No horizontal scroll on any device.

**Trade-off the user should know**
On very small phones the design will render quite small (because the desktop layout is being shrunk to fit ~375px). This is the direct consequence of "same design on all screens." Zooming with pinch remains possible.

**Verification**
- Build check.
- Playwright screenshots at 375px, 768px, 1024px, and 1280px viewports — all four should show the identical composition, each scaled to fit its viewport with no horizontal overflow.