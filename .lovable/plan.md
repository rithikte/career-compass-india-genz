## UG Homepage — UI/UX Audit (based on the built component)

### Scorecard (20 parameters)

| # | Parameter | Score | Note |
|---|---|---|---|
| 1 | Visual hierarchy | 82 | Clear label → H2 → body rhythm; hero CTA missing above the fold |
| 2 | Typography system | 80 | Consistent scale, good line-height; Satoshi/IBM Plex likely not loaded → Inter fallback |
| 3 | Color & contrast | 76 | Muted #9BA6BF on #121A2F ≈ 6:1 (ok); tiny uppercase labels at 0.18em tracking read faint |
| 4 | Layout & spacing | 84 | 6xl container, consistent 12/16 section padding |
| 5 | Responsiveness | 83 | Good breakpoints; 8-col stat grid at lg is very tight |
| 6 | Content clarity | 88 | Plain, student-friendly, jargon-free |
| 7 | Information architecture | 80 | Logical order, but Approach and Journey overlap conceptually |
| 8 | CTA effectiveness | 62 | Single CTA at the very bottom only; no hero CTA, no sticky CTA |
| 9 | Motion & micro-interaction | 86 | Well-crafted reveals, hover lift, glow; reduced-motion respected |
| 10 | Consistency of components | 78 | Card/hover patterns duplicated as 5 near-identical CSS blocks |
| 11 | Accessibility (semantics) | 70 | Icons imported but many cards render no icon; decorative glow correctly aria-hidden |
| 12 | Keyboard/focus states | 55 | No visible :focus-visible styles on button or interactive cards |
| 13 | Scannability | 74 | Long unbroken text-only card runs; no icons/numbers as anchors |
| 14 | Trust & credibility | 68 | "Live Statistics" and "Trusted by Thousands" are unverified claims |
| 15 | Emotional tone/brand | 85 | Calm teal-on-navy, distinct from generic purple SaaS |
| 16 | Whitespace balance | 82 | Generous, but hero feels top-heavy with 3 stacked paragraphs |
| 17 | Progressive disclosure | 72 | Everything flat; no expand/see-more for the 8-step journey |
| 18 | Performance hygiene | 74 | Large inline <style> block, 8s infinite blur(80px) animation = repaint cost |
| 19 | Mobile ergonomics | 79 | Tap targets fine; approach arrows hidden on mobile breaks the flow metaphor |
| 20 | Conversion flow | 65 | No secondary path (e.g. "Search a degree"), no anchor nav on a long page |

**Overall: 78/100** — strong visual craft and content, weakest on conversion, focus states, and trust claims.

### Top fixes, in priority order

1. **Hero CTA** — add "Explore Career Maps" primary + "Search your degree" secondary directly under the hero paragraphs; move the Telangana badge above the H1.
2. **Focus visibility** — global `:focus-visible` ring (2px #6DD4C8, 2px offset) on the primary button, journey steps, and any interactive card.
3. **Trust honesty** — replace "Live Statistics" with "Platform Coverage" and "Trusted by Thousands" with a factual coverage headline (matches the project's Truth Curve rule).
4. **Scannability** — render the already-imported icons in Discover / Why-this-matters cards; add step connectors on mobile instead of hiding arrows.
5. **Stat grid** — cap at 4 columns on lg (2 rows of 4) instead of 8 across.
6. **Consistency** — collapse the 5 duplicated hover CSS blocks into one `.ug-card` + CSS-variable accent pattern.
7. **Performance** — reduce hero glow to a static radial gradient with a low-cost opacity pulse instead of animating a `blur(80px)` layer.
8. **Semantics/SEO** — one H1 confirmed; add a `<section aria-labelledby>` per block and ensure the heading fonts are actually loaded or drop them from the stack.

### Technical notes
Dead code to remove: `JourneyChip` (defined, never used) and several unused lucide imports (`AlertCircle`, `CheckCircle2`, `Users`, `Monitor`, `Building2` in some paths).

Say the word and I'll implement any subset of these.