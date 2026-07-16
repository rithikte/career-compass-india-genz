Convert the chapter tags (the dashed site-keywords under each chapter title) into collapsible dropdowns on the **Domain chapters** page while preserving the existing dark card layout, search behavior, and responsive design.

## What will change
- In every section card (Sections 1–4), each chapter row will show its **chapter title** as before.
- The **tags line** (e.g., `— RCC Slab Design / One-way Two-way Slab / Slab Reinforcement`) will be hidden behind a small, section-accented dropdown toggle.
- Clicking the toggle expands the tag list in place; clicking again collapses it.
- All existing hover effects, card styling, and section/subject hierarchy remain unchanged.

## Default design choices
- **Toggle label**: "Concepts" with a small chevron icon that rotates when open.
- **State**: Each chapter row gets its own open/closed state; only one dropdown does not auto-close others.
- **Search behavior**: Tags remain searchable when collapsed (existing `c.tags.toLowerCase().includes(q)` filter stays intact).
- **Styling**: Toggle uses the section accent color, same typography scale as the current tags (`0.74rem`), and no extra vertical spacing so rows stay compact.
- **Accessibility**: Toggle is a `<button>` with `aria-expanded` and `aria-controls`.

## Implementation steps
1. Add a `ChevronDown` (or similar) import to `src/components/DomainChapters.tsx`.
2. Introduce a local helper or state to track which chapter rows are expanded. To keep it lightweight, use a `Set` of `${sectionId}-${subjectIndex}-${chapterIndex}` keys stored in `useState`.
3. Replace the static tags `<div>` (currently lines 370–376) with:
   - A small toggle button showing "Concepts" + rotating chevron.
   - A conditional animated block that renders the tag line when expanded.
4. Add CSS transitions in the existing `<style>` block for the expand/collapse height and chevron rotation, respecting `prefers-reduced-motion`.
5. Verify the build passes and that the search still filters by tags when collapsed.

## Out of scope
- No changes to section/subject data.
- No changes to page header, search bar, or empty state.
- No changes to other pages.