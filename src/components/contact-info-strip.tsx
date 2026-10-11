import type { LucideIcon } from "lucide-react";

export function ContactInfoStrip({
  items,
}: {
  items: { icon: LucideIcon; label: string; content: React.ReactNode; note?: string }[];
}) {
  return (
    <div className="grid divide-y divide-border overflow-hidden rounded-[2rem] bg-card shadow-sm ring-1 ring-navy/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map(({ icon: Icon, label, content, note }) => (
        <div key={label} className="flex flex-col items-center gap-2 p-8 text-center">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-navy text-gold">
            <Icon className="size-5" />
          </span>
          <h3 className="mt-1 font-heading text-sm font-semibold uppercase tracking-widest text-navy">
            {label}
          </h3>
          <div className="text-sm text-muted-foreground [&_a]:block [&_a]:transition-colors [&_a]:hover:text-gold">
            {content}
          </div>
          {note ? <span className="text-xs text-gold">{note}</span> : null}
        </div>
      ))}
    </div>
  );
}
