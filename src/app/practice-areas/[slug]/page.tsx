import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon } from "@/components/dynamic-icon";
import { SectionHeading } from "@/components/section-heading";
import { TagPills } from "@/components/tag-pills";
import { HorizontalStepper } from "@/components/horizontal-stepper";
import { getPracticeAreaBySlug, PRACTICE_AREAS } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/site-config";

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = PRACTICE_AREAS.filter((a) => a.id !== area.id).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={area.title}
        parent={{ label: "Practice Areas", href: "/practice-areas" }}
        eyebrow="Specialist Legal Counsel"
        title={<span className="text-gold">{area.title}</span>}
        description={area.heroSubtitle}
        image={area.image}
        imageLabel="Focused expertise"
        imageCaption={area.description}
        primaryAction={{ label: "Discuss This Matter", href: "/contact" }}
        secondaryAction={{ label: "Explore Our Services", href: "#practice-overview" }}
        details={
          <ul className="grid gap-3 text-sm text-cool-gray">
            {area.keyBenefits.map((benefit) => <li key={benefit} className="flex items-start gap-2.5"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />{benefit}</li>)}
          </ul>
        }
      />

      <section id="practice-overview" className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-16 lg:col-span-2">
            {/* Overview as pull-quote card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 sm:p-10">
              <Quote className="size-9 text-gold/60" />
              <p className="mt-4 text-balance text-lg leading-relaxed text-cool-gray">
                {area.overview}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                Areas of Expertise
              </h2>
              <div className="mt-6">
                <TagPills items={area.expertise} />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                Our Services
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {area.services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-navy/5 transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-heading text-base font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                Our Process
              </h2>
              <div className="mt-6">
                <HorizontalStepper steps={area.process} />
              </div>
            </div>

            {area.faqs.length > 0 ? (
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 rounded-3xl bg-card px-6 shadow-sm ring-1 ring-navy/5">
                  <Accordion>
                    {area.faqs.map((faq, i) => (
                      <AccordionItem key={faq.question} value={`faq-${i}`}>
                        <AccordionTrigger className="font-heading text-base text-navy">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-navy p-8 text-center shadow-[0_20px_45px_rgba(11,26,42,0.2)]">
              <h3 className="font-heading text-lg font-semibold text-silver">
                Speak with a Specialist
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cool-gray">
                Schedule a consultation with our {area.title.toLowerCase()} team.
              </p>
              <Button
                render={<Link href="/contact" />}
                className="mt-6 w-full bg-gold text-navy hover:bg-gold-light"
              >
                Contact {SITE_CONFIG.shortName}
              </Button>
            </div>

            <div className="rounded-[2rem] bg-secondary/60 p-8">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Why Choose Us
              </h3>
              <div className="mt-5 space-y-5">
                {area.whyChoose.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-sm font-semibold text-navy">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {area.recentCases.length > 0 ? (
              <div className="rounded-[2rem] bg-card p-8 shadow-sm ring-1 ring-navy/5">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Recent Matters
                </h3>
                <div className="mt-5 space-y-5">
                  {area.recentCases.map((c) => (
                    <div key={c.title} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                          {c.outcome}
                        </span>
                        <span className="text-xs text-muted-foreground">{c.year}</span>
                      </div>
                      <h4 className="mt-1.5 text-sm font-semibold text-navy">{c.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Explore More"
            title="Related Practice Areas"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {otherAreas.map((other) => (
              <Link
                key={other.id}
                href={`/practice-areas/${other.slug}`}
                className="group rounded-3xl bg-card p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-navy text-gold">
                  <DynamicIcon name={other.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-navy">
                  {other.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

