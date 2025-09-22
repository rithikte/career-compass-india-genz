export default function SourceBadge({ href, label = "Source" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center text-xs px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
    >
      Source: {label} ↗
    </a>
  );
}