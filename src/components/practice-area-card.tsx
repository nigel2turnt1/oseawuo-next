import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DynamicIcon } from "@/components/dynamic-icon";
import type { PracticeArea } from "@/lib/data";

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="glass-card group relative flex flex-col rounded-3xl bg-card p-7 shadow-[0_1px_2px_rgba(11,26,42,0.06)] ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(11,26,42,0.12)] hover:ring-gold/30"
    >
      <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
        <DynamicIcon name={area.icon} className="size-5" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
        {area.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy">
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
