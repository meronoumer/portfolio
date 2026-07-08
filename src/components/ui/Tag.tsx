export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink/15 bg-paper-dim px-3 py-1 text-sm text-ink-soft transition duration-200 hover:-translate-y-0.5 hover:border-ink/30 hover:bg-paper hover:shadow-sm">
      {children}
    </span>
  );
}
