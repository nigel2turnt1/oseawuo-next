import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em]",
          dark ? "bg-white/10 text-gold" : "bg-gold/15 text-navy"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-5xl",
          dark ? "text-silver" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-balance text-base leading-relaxed",
            dark ? "text-cool-gray" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

