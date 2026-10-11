import type { ReactNode } from "react";
import { PageHero } from "@/components/heroes/page-hero";
import { SITE_CONFIG } from "@/lib/site-config";

export function AboutHero(props: { eyebrow: string; title: ReactNode; description: string; image: string }) {
  return <PageHero {...props} breadcrumb="About Us" imageLabel="Our foundation" imageCaption={`Serving our clients with integrity since ${SITE_CONFIG.founded}.`} secondaryAction={{ label: "Meet Our Team", href: "/team" }} />;
}
