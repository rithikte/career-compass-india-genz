Make all fonts on the Ecosystem Growth page fully responsive using `clamp()` so text scales proportionally across mobile, tablet, and desktop without breaking the existing layout.

**What will change**
- Convert every fixed font-size in `src/components/EcosystemGrowth.tsx` from `px` or static `rem` values to `clamp()` values that shrink on small screens and scale up on large screens.
- Targets: eyebrow label, section label, section title, section tag, layer index number, layer tag, card title, meaning line, timeline period/outlook/reality, score reason label/text, and remember label/text.
- Keep the same visual hierarchy (headings still biggest, body/helper text still smaller) so the design does not change at desktop size, only becomes readable at mobile/tablet sizes.
- Maintain current line-heights, letter-spacing, colors, and structural padding.

**Verification**
- Check the preview at desktop, tablet, and mobile widths to confirm no clipping, overlapping, or unreadable text.
- Run a build check to ensure no CSS/syntax errors.