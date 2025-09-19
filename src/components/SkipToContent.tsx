export default function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white border px-3 py-2 rounded shadow"
    >
      Skip to content
    </a>
  );
}