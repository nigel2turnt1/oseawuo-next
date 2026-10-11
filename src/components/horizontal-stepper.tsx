export function HorizontalStepper({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {steps.map((step, i) => (
        <div key={step.title} className="relative rounded-3xl bg-card p-6 shadow-sm ring-1 ring-navy/5">
          <span className="flex size-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
            {i + 1}
          </span>
          <h3 className="mt-4 font-heading text-base font-semibold text-navy">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
          {i < steps.length - 1 ? (
            <span className="absolute top-1/2 -right-4 hidden h-px w-6 -translate-y-1/2 bg-border sm:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
