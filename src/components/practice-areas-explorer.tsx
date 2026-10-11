"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { PracticeAreaCard } from "@/components/practice-area-card";
import { cn } from "@/lib/utils";
import { PRACTICE_AREAS } from "@/lib/data";

const CATEGORIES = ["All", ...PRACTICE_AREAS.map((a) => a.title)];

export function PracticeAreasExplorer() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = PRACTICE_AREAS.filter((area) => {
    const matchesCategory = category === "All" || area.title === category;
    const q = query.toLowerCase().trim();
    const matchesQuery =
      !q ||
      area.title.toLowerCase().includes(q) ||
      area.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-4">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search practice areas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 rounded-full pl-10 shadow-sm"
            aria-label="Search practice areas"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={cn(
                "rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-200",
                category === cat
                  ? "bg-navy text-white shadow-md"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          No practice areas match your search.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      )}
    </div>
  );
}
