Plan for the selected "Trusted by Thousands" stat section in `src/components/UGHomepage.tsx`:

1. **Remove the icon container** from each stat card (lines 663–668) without affecting the grid or the card shell.
2. **Center the remaining content vertically** inside each stat card so the layout stays balanced after the icon is removed.
3. **Insert a thin divider line** between the stat value (e.g., `60+`) and the label (e.g., `ENGINEERING DEGREES`).
4. **Animate the divider** so it scales from 0 to full width on hover/touch, matching the existing teal stat accent color for each card (`--stat-color`).
5. **Respect reduced motion** by adding the new divider class to the existing `prefers-reduced-motion` rule.
6. **Verify** the build passes and the section still looks consistent across mobile, tablet, and desktop breakpoints.

No changes to the data values, labels, or other sections of the page.