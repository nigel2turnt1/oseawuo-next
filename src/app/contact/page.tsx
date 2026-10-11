import type { Metadata } from "next";
import { Briefcase, Mail, MapPin, Phone, Scale, Zap } from "lucide-react";

import { ContactHero } from "@/components/heroes/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfoStrip } from "@/components/contact-info-strip";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Oseawuo Chambers & Co. Reach out today to schedule a consultation or learn more about our legal services in Tema, Ghana.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s discuss <span className="text-gold">your next step.</span>
          </>
        }
        description="Whether you have questions or need expert legal advice, our team is here to help. Reach out to us today to schedule a consultation or learn more about our services."
        image="/images/contact2.jpg"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ContactInfoStrip
            items={[
              {
                icon: Phone,
                label: "Call Us",
                note: "Mon–Fri, 8am–5pm GMT",
                content: (
                  <>
                    <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}>
                      {SITE_CONFIG.phone}
                    </a>
                    {SITE_CONFIG.phoneAlt.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[^+\d]/g, "")}`}>
                        {p}
                      </a>
                    ))}
                  </>
                ),
              },
              {
                icon: Mail,
                label: "Email Us",
                note: "We reply promptly",
                content: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>,
              },
              {
                icon: MapPin,
                label: "Visit Us",
                content: <span>{SITE_CONFIG.address}</span>,
                note: "",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-[2.5rem] bg-card p-8 shadow-sm ring-1 ring-navy/5 sm:p-10">
              <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
                Send a Message
              </span>
              <h2 className="mt-5 text-balance font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-navy p-8 text-cool-gray sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-silver">
                Why Contact Us?
              </h3>
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Scale,
                    title: "Expert Legal Advice",
                    description:
                      "Get professional guidance from our experienced attorneys on any legal matter.",
                  },
                  {
                    icon: Zap,
                    title: "Quick Response",
                    description:
                      "We prioritize client communication and respond promptly.",
                  },
                  {
                    icon: Briefcase,
                    title: "Professional Service",
                    description:
                      "Our team is dedicated to providing comprehensive and personalized legal services.",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-navy-light text-gold">
                      <Icon className="size-4.5" />
                    </span>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-silver">
                        {title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-cool-gray/85">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 rounded-2xl bg-white/5 p-5 text-sm">
                <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-gold">
                  Direct Contact
                </h4>
                <p className="flex justify-between gap-2">
                  <span className="text-cool-gray/70">Phone:</span>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`} className="text-cool-gray hover:text-gold">
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p className="flex justify-between gap-2">
                  <span className="text-cool-gray/70">Email:</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-cool-gray hover:text-gold">
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p className="text-cool-gray/85">{SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
            Find Us
          </span>
          <h3 className="mt-5 text-balance font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Our Location
          </h3>
          <div className="relative mt-10 overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-navy/5">
            <iframe
              title={`${SITE_CONFIG.shortName} - Google Maps`}
              src={SITE_CONFIG.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-96 w-full"
            />
          </div>
          <a
            href={SITE_CONFIG.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-gold hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  );
}

