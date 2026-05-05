## Comparison: which page is easier for students?

**ECE – Embedded Systems is significantly easier to understand visually.**

Why it works:
- Each section has a clear `<h2>` + 1-line subtitle + visual block (numbered cards, color-coded chips, icon callouts).
- Heavy use of Swiss-pastel cards (sky / sage / lavender / sand / rose) so each idea is visually separated.
- Numbered steps (`01`, `02`, `03`) and small icon badges make scanning instant.
- Almost no dense tables — content is broken into "one card = one idea".

Why **Embedded Product Engineering** feels heavier:
- It contains ~16 large sections that all use the same pattern: `Final Stack / Summary` style header + a big **desktop table** + a **mobile card list** of the same data.
- Section headlines are vague single words (`Summary`, `Timeline`, `Capability`, `Expectation`, `Hands-On`, `Projects`, `Identification`, `Extraction`, `Task Lock`, `Behavior Gap`, `Recovery`, `Impact`) — a student can't tell what the section is about without reading the body.
- Many tables have 4–6 columns of long sentences → wall-of-text feel.
- Visual rhythm is monotonous: nearly every section uses the same `from-swiss-sky/20 via-white to-swiss-lavender/20` gradient, so sections blur together.

---

## Sections in EPE to redesign (priority order)

### Tier 1 — confusing titles + dense tables (redesign first)

```text
1.  Subject Recognition Table   (L2363+)
2.  Subject Timeline Table      (L2164+)
3.  Skill Extraction            (L1480+)
4.  Tool Identification         (L1331+)
5.  Job Execution Task Lock     (L1596+)
6.  Behavior Gap                (L1721+)
7.  Recovery                    (L1910+)
8.  Impact                      (L2041+)
```

**What to change for each:**
- Rename the `<h2>` to a full, student-friendly sentence (e.g. `Skill Extraction` → "Which skills actually get you hired").
- Add a 1-line plain-language subtitle right under the h2 (matches the ECE pattern).
- Replace the multi-column desktop table with a **2-column "Layer → Plain English" card grid** OR a stacked accordion of "topic → why it matters → what to do".
- Use a **different swiss accent** per section (sage / sky / sand / rose / lavender / mint) so sections feel distinct.
- Add small numbered badges (`01`, `02`…) like ECE's Daily Work block.

### Tier 2 — keep table but make it scannable

```text
9.  Mini Projects               (L1015+)
10. Major Projects              (L1175+)
11. Lab / Hands-On              (L895+)
12. Debugging Expectation       (L773+)
13. Explanation Capability      (L641+)
14. Learning Timeline           (L517+)
15. Final Stack Summary         (L427+)
```

**What to change:**
- Keep the desktop grid but reduce to **max 3 visible columns** (move "why" / "interview-strong" / "job-strong" into an expandable detail row or chip badges).
- Convert long-sentence cells into short chip tags + one short caption.
- Mobile cards: split into a **labeled key-value list** (label uppercase tracking, value plain) instead of paragraphs.
- Add timeline ribbon visuals to `Learning Timeline` (Sem 1–8 horizontal track) — matches the "visual = instant understanding" goal.

### Tier 3 — leave as-is (already good)

```text
- Hero
- Why Embedded Firmware Jobs Won't Disappear
- Profile Grid
- What they work on / Why this survived / Why freshers fail
- Bottom-line Truth
- Disclaimer
```

These already use the ECE-style cards + colored callouts and read clearly.

---

## Cross-cutting design rules to apply (Swiss-minimal, matches ECE)

1. **Every section** = `Eyebrow label` + `clear sentence h2` + `1-line subtitle` + visual block.
2. **Color rotation**: cycle sky → sage → lavender → sand → rose → mint across consecutive sections (no two adjacent sections share a gradient).
3. **Tables → cards** wherever a row has >3 long-text cells.
4. **Numbered badges + chips** for any list of skills/tools/topics.
5. **Truth-curve preserved**: keep the brutally honest copy, just reformat into shorter chunks.
6. **100% responsive** per project memory: desktop = grid, mobile = stacked cards.

---

## Technical scope

- File: `src/components/EmbeddedProductEngineering.tsx` (single file, ~2806 lines).
- No data shape changes — only the JSX render of each affected section + its `<h2>`/subtitle copy.
- No new dependencies. Uses existing `swiss-*` tokens from `src/index.css`.
- Work can be split across ~3 build passes: (a) Tier 1 rewrites, (b) Tier 2 table simplification, (c) color-rotation + subtitle pass.

After approval I'll start with **Tier 1** (8 sections) so you immediately see the biggest visual-clarity gain.
