import type { ReactNode } from "react";
import { PageHero } from "@/components/heroes/page-hero";

export function TeamHero(props: { eyebrow: string; title: ReactNode; description: string }) {
  return <PageHero {...props} breadcrumb="Our Team" image="/images/team1.JPG" imageLabel="Our people" imageCaption="Experienced partners. A shared commitment to your success." secondaryAction={{ label: "Meet the Partners", href: "#senior-partners" }} />;
}
