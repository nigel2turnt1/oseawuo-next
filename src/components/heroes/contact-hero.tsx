import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/heroes/page-hero";
import { SITE_CONFIG } from "@/lib/site-config";

export function ContactHero(props: { eyebrow: string; title: ReactNode; description: string; image: string }) {
  return (
    <PageHero {...props} breadcrumb="Contact" imageLabel="Visit our chambers" imageCaption="Community 8, Tema · Ghana"
      primaryAction={{ label: "Send an Enquiry", href: "#contact-form" }}
      secondaryAction={{ label: "Get Directions", href: SITE_CONFIG.mapLink }}
      details={
        <div className="flex flex-col gap-3 text-sm text-cool-gray">
          <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 hover:text-gold"><Phone aria-hidden="true" className="size-4 shrink-0 text-gold" />{SITE_CONFIG.phone}</a>
          <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 break-all hover:text-gold"><Mail aria-hidden="true" className="size-4 shrink-0 text-gold" />{SITE_CONFIG.email}</a>
        </div>
      }
    />
  );
}
