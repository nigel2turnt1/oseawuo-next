export function NumberedListRow({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 border-b border-border/70 py-8 first:pt-0 last:border-b-0 last:pb-0">
      <span className="font-heading text-3xl font-semibold text-gold/50 tabular-nums">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
