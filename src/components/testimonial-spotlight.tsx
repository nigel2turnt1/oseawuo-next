"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialSpotlight() {
  const [index, setIndex] = React.useState(0);
  const t = TESTIMONIALS[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <div className="mx-auto max-w-4xl text-center">
      <Quote className="mx-auto size-10 text-gold/50" />
      <blockquote className="mx-auto mt-6 text-balance font-heading text-2xl leading-snug text-silver sm:text-3xl">
        “{t.quote}”
      </blockquote>
      <div className="mt-8 flex flex-col items-center gap-1">
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
          {t.name}
        </span>
        <span className="text-xs uppercase tracking-wide text-cool-gray/70">
          {t.caseType}
        </span>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-white/15 text-cool-gray transition-colors hover:border-gold/50 hover:text-gold"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/20"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-white/15 text-cool-gray transition-colors hover:border-gold/50 hover:text-gold"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
