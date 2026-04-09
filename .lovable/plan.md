

## Plan: Combine Job Titles, Core Industries, Company Types into One Section

### What Changes
Merge the three separate sections (Job Titles + Alternate Titles, Core Industries, Company Types) into a single unified section with:
- A side heading: **"Where Embedded Systems Jobs Exist"**
- A short underline subtitle explaining the section purpose (e.g., "Know the real job titles, industries, and company types where embedded engineers get hired.")
- All three sub-sections preserved inside as distinct visual blocks within the single parent container
- Existing card designs, colors, and layouts kept exactly as they are

### Structure

```text
┌─────────────────────────────────────────────────┐
│  WHERE EMBEDDED SYSTEMS JOBS EXIST              │
│  Know the real job titles, industries, and      │
│  company types where embedded engineers          │
│  get hired.                                      │
│                                                  │
│  ┌──────────────────┐ ┌──────────────────┐      │
│  │  Job Titles       │ │ Alternate Titles │      │
│  │  (existing cards) │ │ (existing cards) │      │
│  └──────────────────┘ └──────────────────┘      │
│                                                  │
│  ┌──────────────────────────────────────┐       │
│  │  Core Industries (existing grid)     │       │
│  └──────────────────────────────────────┘       │
│                                                  │
│  ┌──────────────────────────────────────┐       │
│  │  Company Types (existing grid)       │       │
│  └──────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘
```

### Technical Details
- **File**: `src/components/ECEEmbeddedSystems.tsx` (lines ~360–464)
- Wrap existing Job Titles, Alternate Titles, Core Industries, and Company Types blocks inside a single parent `<section>` with Swiss-style gradient background
- Add section header with heading + subtitle at top
- Each sub-block becomes an inner card (keep existing styling intact)
- Remove outer `<section>` wrappers from the three individual blocks since the parent handles the container role
- No structural or data changes to inner content

