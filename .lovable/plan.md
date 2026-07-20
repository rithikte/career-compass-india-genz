Plan: Reduce main container horizontal padding by 30%

Scope
- Update the framed-page wrapper in `src/pages/Index.tsx` (line 67). Full-bleed pages are unaffected because they already use `w-full` with no side padding.

Current values
- Mobile: `px-4` → 16 px
- Tablet: `sm:px-6` → 24 px
- Desktop: `lg:px-8` → 32 px

New values (30% reduction)
- Mobile: 11.2 px (`px-[0.7rem]`)
- Tablet: 16.8 px (`sm:px-[1.05rem]`)
- Desktop: 22.4 px (`lg:px-[1.4rem]`)

Implementation steps
1. In `src/pages/Index.tsx`, locate the `<main>` className:
   ```
   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8
   ```
2. Replace the horizontal padding classes with the exact 30%-reduced values:
   ```
   max-w-7xl mx-auto px-[0.7rem] sm:px-[1.05rem] lg:px-[1.4rem] py-6 sm:py-8
   ```
3. Leave the vertical padding (`py-6 sm:py-8`) and full-bleed logic unchanged.
4. Verify the preview on a framed page (e.g., Home) across mobile, tablet, and desktop to confirm the border gap is 30% smaller.

Technical notes
- Uses Tailwind arbitrary-value classes for exact 30% reduction rather than rounding to standard spacing tokens.
- No new dependencies or state changes.