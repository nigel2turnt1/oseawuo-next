import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AboutHero } from "@/components/heroes/about-hero";
import { SectionHeading } from "@/components/section-heading";
import { NumberedListRow } from "@/components/numbered-list-row";
import { PillCloud } from "@/components/pill-cloud";
import { SITE_CONFIG } from "@/lib/site-config";
import { FIRM_VALUES, RECOGNITIONS, TRUST_INDICATORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oseawuo Chambers - our mission, values, and commitment to excellence in legal services.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero
        eyebrow="About Us"
        title={
          <>
            A tradition of <span className="text-gold">trusted counsel.</span>
          </>
        }
        description={`Founded on principles of justice and dedication, ${SITE_CONFIG.shortName} has been providing exceptional legal services for over five decades. Our mission is to safeguard your rights with unwavering integrity and expert counsel.`}
        image="/images/about.jpg"
      />

      {/* Firm intro — text-led, stat callout aside */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
              Our Story
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Building trust through excellence
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {SITE_CONFIG.shortName} was founded on the principle that every
              client deserves exceptional legal representation backed by
              several years of dedicated experience and expertise. For over
              five decades, we have served individuals, families, and
              businesses with an unwavering commitment to finding lasting
              solutions to our clients&apos; needs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our team comprises highly skilled lawyers with diverse
              backgrounds and specializations. We believe in combining
              cutting-edge legal strategies with timeless values of
              integrity and professionalism.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FIRM_VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-secondary/60 p-4 text-center"
                >
                  <span className="block font-heading text-sm font-semibold text-navy">
                    {value.title}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                    {value.description}
                  </span>
                </div>
              ))}
            </div>
            <Button
              render={<Link href="/contact" />}
              className="mt-8 bg-navy text-white hover:bg-navy/90"
            >
              Book a Consultation
            </Button>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-5 rounded-[2rem] bg-navy p-8 shadow-[0_20px_45px_rgba(11,26,42,0.2)]">
              <BookOpen className="size-10 shrink-0 text-gold" />
              <div>
                <span className="block font-heading text-3xl font-semibold text-silver">
                  {SITE_CONFIG.founded}
                </span>
                <span className="text-xs uppercase tracking-widest text-cool-gray/70">
                  Year Founded
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-[2rem] bg-secondary/60 p-8">
              <span className="font-heading text-3xl font-semibold text-navy">
                9+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Practice Areas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — flanked pull-quote */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/40 text-gold">
            <Quote className="size-6" />
          </span>
          <h2 className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Our Mission
          </h2>
          <blockquote className="mt-6 text-balance font-heading text-2xl leading-snug text-silver sm:text-3xl">
            {SITE_CONFIG.shortName} tackles challenging projects creatively
            and offers fearless representation underpinned by meticulous
            legal research and professional integrity. We combine sector
            expertise with client-first service to deliver effective
            results.
          </blockquote>
        </div>
      </section>

      {/* Why choose — numbered list, not cards */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title={`Why Choose ${SITE_CONFIG.shortName}`}
              description="Partner-led, local expertise with international perspective — we combine strategic thinking, sector knowledge and pragmatic execution."
              align="left"
            />
            <div className="mt-8 flex flex-col gap-3 rounded-[2rem] bg-secondary/60 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-heading text-base font-semibold text-navy">
                  Talk to a specialist
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Advisory sessions and tailored transactional support.
                </p>
              </div>
              <Button
                render={<Link href="/contact" />}
                className="shrink-0 bg-navy text-white hover:bg-navy/90"
              >
                Schedule
              </Button>
            </div>
          </div>
          <div>
            {TRUST_INDICATORS.map((indicator, i) => (
              <NumberedListRow
                key={indicator.title}
                index={i + 1}
                title={indicator.title}
                description={indicator.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions — pill cloud */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recognition"
            title="Professional Affiliations"
            className="mb-12"
          />
          <PillCloud items={RECOGNITIONS} />
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-card px-6 py-14 shadow-[0_20px_50px_rgba(11,26,42,0.08)] ring-1 ring-navy/5 sm:px-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
              Get In Touch
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Need legal guidance?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We are here to help you navigate your legal challenges with
              expertise and care.
            </p>
            <Button
              size="lg"
              render={<Link href="/contact" />}
              className="mt-8 bg-navy text-white hover:bg-navy/90"
            >
              Contact Us Today
            </Button>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-[2rem] lg:h-72">
            <Image
              src="/images/millicent.jpg"
              alt={`${SITE_CONFIG.shortName} - Contact`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 384px, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
