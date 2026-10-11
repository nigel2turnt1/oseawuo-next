export function TagPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-cool-gray"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
