export function PillCloud({
  items,
}: {
  items: { name: string; type: string }[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <span
          key={item.name}
          className="group inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-medium text-navy shadow-sm ring-1 ring-navy/5 transition-shadow hover:shadow-md"
        >
          {item.name}
          <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
            {item.type}
          </span>
        </span>
      ))}
    </div>
  );
}
