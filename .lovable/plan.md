## Goal

Add a new page/tab called **UG Homepage** right after "Home Page" in the top navigation of `/home`. It's a self-contained, dark "Dark Intelligence Interface" landing experience — 100% responsive (mobile-first) — following the exact content, color, typography, spacing, and motion spec provided.

## Where it plugs in

The app renders "pages" as switchable sections inside `src/pages/Index.tsx` via a `sections` array (Home, Embedded Product Engineering, Home Page). I'll add a new entry `{ id: 'ug-homepage', title: 'UG Homepage', component: UGHomepage }` placed **after** the `home-page` entry, so a new "UG Homepage" tab appears after "Home Page".

## New component

Create `src/components/UGHomepage.tsx` — a single scoped, dark-themed component. Because this page uses its own palette (deep navy `#0B1020`, cards `#121A2F`) that intentionally differs from the app's light Swiss theme, the component wraps everything in its own container with these colors applied via inline style tokens / arbitrary Tailwind values, so it stays isolated and doesn't disturb the global light theme or other sections.

### Sections (in order, matching spec)

1. **Hero** (accent `#6DD4C8`) — Editorial hero: headline "Start with what you like. See where it can take you.", supporting paragraphs, primary CTA, plus a simple animated "career journey line" graphic (Subject → Domain → … reveal).
2. **Why Start With Subjects** (`#89C2D9`) — Split layout with two comparison/outcome cards ("Better career alignment", "Better prepared freshers").
3. **What is Undergraduate Maps** (`#6E9F9A`) — Horizontal process flow: Subject → Domain → Industry → Career Path → Fresher Role → Skills → Projects → Hiring Reality, with sequential reveal (wraps to vertical on mobile).
4. **What You Will Discover** (`#7FC8A9`) — Bento grid of 7 items (Domains & industries, Fresher roles, Skills & tools, Mini & major projects, Hiring expectations, Placement prep, Career growth) with staggered reveal + hover lift.
5. **Why This Matters** (`#FF7B72` problem / `#8FBFA3` solution) — Problem vs Solution cards.
6. **Our Approach** (`#8FA7BF`) — Connected system diagram linking subjects → domains → roles → skills → projects → hiring.
7. **CTA** (`#6DD4C8`) — Minimal CTA block "Start Exploring Career Maps" + "Explore Now" button.

### Design implementation

- **Colors**: base bg `#0B1020`, cards `#121A2F`, text `#F5F7FA`, borders `#232C44`, per-section accents as listed. Subtle glass overlay `rgba(255,255,255,0.03)` on cards.
- **Cards**: radius 20px, 1px `#232C44` border, 24px padding, soft shadow.
- **Buttons**: primary bg `#6DD4C8`, text `#0B1020`, radius 16px, padding 16×28, hover = brightness up + 2–4px lift, 250ms ease-out.
- **Typography**: add Satoshi (via Fontshare CDN), IBM Plex Sans + Inter (Google Fonts) links in `index.html`. Hero/section headings = Satoshi, body/cards/buttons = Inter, diagram/process/technical labels = IBM Plex Sans. Max text width 60–75ch, line-height 1.6–1.8, only Regular/Medium/Bold.
- **Spacing**: section gaps 48px desktop / 32px mobile, hero gap 64–96 / 48–64, consistent vertical rhythm.
- **Icons**: outline-only, 2px stroke, rounded (lucide-react, already in project), uniform size, no fills.
- **Motion**: use existing `animate-fade-in` plus a lightweight in-view reveal (IntersectionObserver hook) so cards/lines/process steps animate once on entering the viewport, 200–300ms ease-out, staggered where specified. Respect `prefers-reduced-motion`.
- **Responsive**: mobile-first; process flow and system diagram stack vertically on small screens, bento grid collapses to 1 column, split layouts stack.

## Files touched

- `src/pages/Index.tsx` — add the new section entry after "Home Page".
- `src/components/UGHomepage.tsx` — new component (all 7 sections + a small in-view reveal helper).
- `index.html` — add Satoshi / Inter / IBM Plex Sans font `<link>`s.

## Notes

- The CTA "Explore Now" button will scroll back to / switch to the existing Home section (career explorer) unless you'd prefer it link elsewhere.
- No backend, routing, or business-logic changes — this is a presentation-only addition. The rest of the app's light theme is untouched.
