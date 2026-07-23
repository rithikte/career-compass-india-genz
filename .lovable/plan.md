Apply the requested teal-to-navy gradient to the Domain Chapters page headline.

Change: Add a CSS class to the selected `<h1>` at `src/components/DomainChapters.tsx` line 188 and inject a style block that applies a linear gradient using the colors the user provided:
- `#18B7B8` — bright teal/cyan
- `#25757F` — deep teal
- `#061B38` / `#03152F` — very dark navy

The gradient will be applied via `background-clip: text` and `-webkit-text-fill-color: transparent` so the headline text itself shows the gradient, matching the established pattern used on other pages.

No other layout, typography, or content changes are planned.