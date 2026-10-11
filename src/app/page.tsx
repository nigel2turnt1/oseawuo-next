import { PageHero } from "@/components/heroes/page-hero";

import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { PracticeAreasExplorer } from "@/components/practice-areas-explorer";
import { FeatureRow } from "@/components/feature-row";
import { SITE_CONFIG } from "@/lib/site-config";
import { VALUE_PILLARS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        eyebrow="Trusted Legal Advisors"
        title={<>Protecting your rights with <span className="text-gold">integrity &amp; expertise.</span></>}
        description={`At ${SITE_CONFIG.name}, we provide dedicated and reliable legal counsel tailored to your needs.`}
        image="/images/homehero.jpg"
        imageLabel={`Established ${SITE_CONFIG.founded}`}
        imageCaption="Trusted counsel. A lasting commitment."
        secondaryAction={{ label: "Discover Our Firm", href: "/about" }}
        details={<p className="flex items-center gap-2 text-sm text-cool-gray"><CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-gold" />Personal attention. Comprehensive legal expertise.</p>}
      />
      {/* Practice Areas */}
      <section id="services" className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal Services"
            title="Our Practice Areas"
            description="Specialized expertise across modern legal domains"
            className="mb-14"
          />
          <PracticeAreasExplorer />
        </div>
      </section>

      {/* Why Choose Us — zigzag feature rows */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Us"
            title={`Why ${SITE_CONFIG.shortName}`}
            description="Strategic expertise. Trusted counsel. Proven results."
            className="mb-16"
          />
          <div className="space-y-20">
            {VALUE_PILLARS.map((pillar, i) => (
              <FeatureRow
                key={pillar.title}
                eyebrowNumber={String(i + 1).padStart(2, "0")}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                image={pillar.image}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[3rem] bg-navy shadow-[0_30px_60px_rgba(11,26,42,0.25)]">
            <div className="absolute inset-6 rounded-[2.5rem] border border-gold/20" />
            <Scale className="size-20 text-gold" />
            <span className="absolute bottom-8 rounded-full border border-gold/40 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-gold backdrop-blur">
              Est. {SITE_CONFIG.founded}
            </span>
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
              Our Firm
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Excellence through experience
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {SITE_CONFIG.shortName} brings decades of legal expertise
              combined with a genuine commitment to client success. Our team
              delivers strategic solutions grounded in thorough legal
              analysis and proven advocacy.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Comprehensive Case Strategy",
                "Meticulous Legal Research",
                "Secure Client Portal",
                "24/7 Expert Legal Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl bg-secondary/60 px-4 py-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              render={<Link href="/about" />}
              className="mt-8 bg-navy text-white hover:bg-navy/90"
            >
              Discover Our Story <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-center shadow-[0_30px_60px_rgba(11,26,42,0.25)] sm:px-16">
          <div className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full bg-gold/10 blur-3xl" />
          <span className="relative inline-flex items-center rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Get Started
          </span>
          <h2 className="relative mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-silver sm:text-4xl">
            Ready to discuss your legal matter?
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-cool-gray">
            Let {SITE_CONFIG.shortName} put decades of legal expertise to
            work for you. Schedule a consultation with our senior partners
            today.
          </p>
          <div className="relative mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              render={<Link href="/contact" />}
              className="h-13 bg-gold px-9 text-base text-navy hover:bg-gold-light"
            >
              <CalendarCheck className="size-4" /> Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/about" />}
              className="h-13 border-white/20 bg-white/5 px-9 text-base text-silver backdrop-blur hover:bg-white/10 hover:text-silver"
            >
              Learn More <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}



