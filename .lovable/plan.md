The user wants the skill bullet text in the Domain Subjects page reduced to a better-fitting size and applied to every skill row across all 4 sections.

Current state
- File: src/components/DomainSubjects.tsx
- Skill text is rendered inside the subject list `<li>` at fontSize: '0.88rem' with lineHeight: 1.55
- The dash and the skill description both use the same size
- Subject names are 0.98rem, so a slightly smaller skill text keeps the hierarchy

Plan
1. Reduce the skill text fontSize from 0.88rem to 0.84rem (keeps it readable while tightening the rows).
2. Keep lineHeight at 1.55 so multi-line skills don't collapse.
3. Apply the change to the mapped skill `<li>` style so every subject card and every section receives it automatically.
4. Verify the build still passes and the rows look balanced on desktop and mobile.

No other layout or content changes will be made.