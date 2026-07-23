Add thin, gray, faded-tip horizontal dividers between each of the four EyebrowLabel sub-sections (Strong Freshers, Weak Freshers, Why It Matters, Mistake Recovery Impact) inside every rule card in the "5 Rules" section.

## What to build
- Insert a divider element after each of the first three sub-sections inside each rule card.
- The divider should be a short, thin horizontal line with tips that fade to transparent ("erased" effect), using a linear gradient.
- Use a CSS class added to the existing `<style>` block so the dividers are visible only on mobile (where the sub-sections stack vertically in one column) and hidden on desktop where the grid shows them side by side.
- Keep all existing card glassmorphism, hover lift, border glow, and content intact.

## Implementation details
- In `src/components/ExecutionMistakes.tsx`, locate the mapped `rules` grid around line 502.
- Add a `<div className="rule-mobile-divider" />` after each of the first three inner sub-section blocks.
- Add a new rule in the existing `<style>` block:
  ```css
  .rule-mobile-divider {
    display: none;
  }
  @media (max-width: 640px) {
    .rule-mobile-divider {
      display: block;
      height: 1px;
      width: 100%;
      margin: 14px 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.18) 80%, transparent 100%);
      border: none;
    }
  }
  ```
- Adjust opacity or spacing as needed to match the existing muted/white-translucency design system.

## Verification
- Run the build/type-check.
- Check the mobile preview to confirm the four layers inside each rule card are visually separated without mixing together.
- Confirm desktop layout remains unchanged.