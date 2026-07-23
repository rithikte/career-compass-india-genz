## Apply gradient & typography update to CareerStabilityCheck section headlines

### Goal
Update the three section headlines in the "Career Stability Check" page —
1. **What Keeps This Career Alive**
2. **Where Freshers Break First**
3. **Expectation vs Reality**

— so they use the new white-to-gray gradient text and the requested sub-section heading font style, and bring the entire page’s visual tokens/effects in line with the latest spec.

### Changes

1. **Headline gradient + font**
   - Add a shared class `.cs-section-headline` in `src/components/CareerStabilityCheck.tsx`.
   - Apply `linear-gradient(180deg, #fff 0%, #b7c0cc 100%)` with `-webkit-background-clip: text` / `-webkit-text-fill-color: transparent`.
   - Set `font-family: 'Poppins', 'Inter', sans-serif`, `font-weight: 600`, `font-size: clamp(1.35rem, 2.6vw, 1.9rem)`.
   - Apply the class to the three `<h2>` elements rendered by the `SectionTitle` component for the above titles.

2. **Color system update**
   - Page background: `#06080d`.
   - Primary text: `#e7ecf3`.
   - Muted text: `#9aa4b2`.
   - Card backgrounds: `rgba(255,255,255,0.03)` / `rgba(255,255,255,0.05)`.
   - Borders: `rgba(255,255,255,0.08)` / `rgba(255,255,255,0.14)`.
   - Accents: teal `#6ee7d7`, purple `#a78bfa`, amber `#f5c26b`.
   - Update rating severity pills (Very High, High, Medium, Critical, Moderate, Low) to use these accent colors.

3. **Effects**
   - Radial background glows: teal + purple at low opacity behind the page.
   - Card hover lift: `translateY(-2px)` + multi-layer teal/purple glow shadow.
   - Table rows: teal-tint hover highlight.
   - Teal and amber tag badges with translucent fills + matching borders.
   - "Reality Check" box (the Honest Picture card): subtle gradient background + stronger border.

4. **Verification**
   - Run `tsgo` (TypeScript check) and visually confirm the three headlines render the gradient at both desktop and mobile widths.

### Files
- `src/components/CareerStabilityCheck.tsx` (only file modified)

### No new dependencies
Styling is done inline + CSS-in-JSX as existing convention.