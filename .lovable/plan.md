Convert every subject’s skill bullets on the Domain Subjects page into collapsible dropdowns, mirroring the existing Domain Chapters dropdown pattern, without changing the page layout or design.

Changes:
1. In `src/components/DomainSubjects.tsx`, import `useState` and `ChevronDown`.
2. Add an `expanded` Set state and a `toggleKey` helper to track which subject dropdowns are open.
3. Replace each subject’s static `<ul>` skills list with a toggle button labeled **Skills** plus a collapsible container holding the original `<ul>` of bullets.
4. Add CSS transitions for the dropdown max-height/opacity and the chevron rotation, respecting `prefers-reduced-motion`.
5. Verify the build passes.

The section cards, subject names, accent colors, and responsive grid remain unchanged.