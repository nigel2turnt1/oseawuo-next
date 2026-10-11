import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type HeroAction = { label: string; href: string };

export type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
  imageLabel: string;
  imageCaption: string;
  breadcrumb: string;
  parent?: HeroAction;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  details?: ReactNode;
};

export function PageHero({
  eyebrow, title, description, image, imageAlt = "", imageLabel,
  imageCaption, breadcrumb, parent,
  primaryAction = { label: "Book a Consultation", href: "/contact" },
  secondaryAction = { label: "Explore Our Expertise", href: "/practice-areas" },
  details,
}: PageHeroProps) {
  return (
    <section className="page-hero relative isolate overflow-hidden bg-navy">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-cool-gray sm:mb-12">
          {breadcrumb === "Home" ? (
            <span aria-current="page">Oseawuo Chambers &amp; Co</span>
          ) : (
            <>
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <ChevronRight aria-hidden="true" className="size-3 text-gold/70" />
              {parent && <><Link href={parent.href} className="transition-colors hover:text-gold">{parent.label}</Link><ChevronRight aria-hidden="true" className="size-3 text-gold/70" /></>}
              <span aria-current="page">{breadcrumb}</span>
            </>
          )}
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="hero-intro min-w-0">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold/70" />{eyebrow}
            </p>
            <h1 className="mt-5 max-w-2xl text-balance text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.045em] text-silver sm:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cool-gray sm:text-lg">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" render={<Link href={primaryAction.href} />} className="h-13 bg-gold px-6 text-navy hover:bg-gold-light">
                {primaryAction.label}<ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href={secondaryAction.href} />} className="h-13 border-white/20 bg-white/5 px-6 text-silver hover:bg-white/10 hover:text-silver">
                {secondaryAction.label}
              </Button>
            </div>
            {details && <div className="mt-8 border-t border-white/15 pt-6">{details}</div>}
          </div>
          <figure className="hero-visual relative min-w-0 overflow-hidden rounded-3xl border border-white/15 bg-navy-light shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1280px) 540px, (min-width: 1024px) 45vw, 100vw" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <figcaption className="hero-proof relative border-t border-white/10 px-6 py-5 sm:px-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{imageLabel}</p>
              <p className="mt-2 text-base font-medium leading-snug text-silver">{imageCaption}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
