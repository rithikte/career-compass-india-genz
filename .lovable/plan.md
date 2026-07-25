Plan: Reduce UG Homepage paragraph font sizes by 30%

Goal
Reduce the font size of every `<p>` text element in `src/components/UGHomepage.tsx` by 30% from its current rendered size, without changing line-height, colors, spacing, or layout.

Current state
Read the UG Homepage component and identified all `<p>` elements and their current sizes:

- Hero problem paragraph (line 411): `text-base sm:text-lg` → 16px / 18px
- Hero value proposition paragraph (line 420): `text-base sm:text-lg` → 16px / 18px
- Why Start With Subjects description (line 445): `text-base sm:text-lg` → 16px / 18px
- Why Start card descriptions (line 471): default 16px
- What is Undergraduate Maps description (line 492): `text-base sm:text-lg` → 16px / 18px
- Journey step text (line 520): default 16px
- Discover card descriptions (line 564): default 16px
- Why This Matters gap description (line 600): default 16px
- Why This Matters way-forward description (line 618): default 16px
- Our Approach description (line 639): `text-base sm:text-lg` → 16px / 18px
- Our Approach goal paragraph (line 679): default 16px
- CTA description (line 790): default 16px

Implementation approach
1. For paragraphs currently using `text-base sm:text-lg`, replace with `text-[11.2px] sm:text-[12.6px]` to apply an exact 30% reduction.
2. For paragraphs with no explicit size class (defaulting to 16px), add `text-[11.2px]`.
3. Preserve all existing `mt-*`, `leading-[1.7]`, `font-medium`, `mx-auto`, and `maxWidth` styles to avoid layout shifts.
4. Keep headings, labels, cards, icons, and buttons untouched.

Verification
- Run a build check after edits.
- Capture a preview screenshot of the UG Homepage to confirm the text remains readable and the design is intact.

Files to change
- `src/components/UGHomepage.tsx`