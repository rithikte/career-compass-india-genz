
# Plan: Career Stability Check → PDF

Generate a downloadable PDF that captures the full content flow of the Career Stability Check page (`src/components/CareerStabilityCheck.tsx`) and deliver it as a `/mnt/documents` artifact. No app code changes.

## Steps

1. Read `src/components/CareerStabilityCheck.tsx` to extract the full content flow (headline, eyebrow, sections, tables, cards, callouts, bottom-line).
2. Render the page in the running preview via Playwright at desktop width, print-to-PDF the section in order (full-page capture with dark background preserved), OR generate a styled PDF with ReportLab using the extracted content and the site's dark palette (#070B18 bg, #E6ECF5 text, sky/purple accents).
   - Preferred: Playwright `page.pdf()` on `/home` after navigating to the Career Stability Check tab — preserves exact visual design (gradient headline, glass cards, tables).
3. Save output to `/mnt/documents/career-stability-check.pdf`.
4. QA: `pdftoppm` each page to JPG, view images, check for clipped text, overlap, missing sections; fix and re-render if needed.
5. Deliver via `<presentation-artifact>` tag.

## Technical notes

- Use headless Chromium via Playwright already available in sandbox. Navigate to `http://localhost:8080/home`, click the "Career Stability Check" tab, wait for content, then `page.emulate_media(media="screen")` and `page.pdf(format="A4", print_background=True)`.
- If tab navigation is complex, fall back to a ReportLab-generated PDF using DejaVu Sans font, dark background rectangles, and the extracted text/table content.
