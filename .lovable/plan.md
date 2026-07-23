1. Modify the headline element in `src/components/FresherDailyWork.tsx` (line 327) by adding a dedicated gradient class to it.
2. Update the component's style block:
   - Set `.fdw-headline` to use `font-family: 'Poppins', 'Inter', sans-serif;`, `font-weight: 700;`, `letter-spacing: -0.02em;`, `line-height: 1.05;`, and `font-size: clamp(1.9rem, 4.5vw, 3.4rem);`.
   - Add a new `.fdw-headline-gradient` class that applies `background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);`, `-webkit-background-clip: text;`, `background-clip: text;`, and `-webkit-text-fill-color: transparent;` so the gradient fills the text itself.
3. Leave the surrounding page background, panels, borders, and accent colors unchanged unless they conflict with the new headline; if needed, only adjust the headline text color fallback.
4. Verify the file compiles by checking the dev server output after the change.