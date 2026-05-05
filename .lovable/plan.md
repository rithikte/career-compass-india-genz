## Goal
Remove the "ECE – Embedded Systems" page entirely without affecting Home or Embedded Product Engineering pages.

## Changes

### 1. `src/pages/Index.tsx`
- Remove the import: `import ECEEmbeddedSystems from '../components/ECEEmbeddedSystems';`
- Remove the `ece-embedded` entry from the `sections` array, leaving only:
  - `home` → HomePage
  - `embedded-product` → EmbeddedProductEngineering

This automatically removes the nav tab and the route in the section switcher. `activeSection` default stays `'home'`, so initial render is unaffected.

### 2. Delete `src/components/ECEEmbeddedSystems.tsx`
No other file imports this component (verified via codebase context — only `Index.tsx` references it), so deletion is safe.

## Not touched
- `Header`, `HomePage`, `EmbeddedProductEngineering`, routing in `App.tsx`, styles, memory — all untouched.

## Result
Top navigation will show only two tabs: **Home** and **Embedded Product Engineering**. The ECE page and its component file are fully removed.
