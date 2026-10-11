import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";


import { PracticeAreasExplorer } from "@/components/practice-areas-explorer";


export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore the practice areas of Oseawuo Chambers & Co, spanning maritime, energy, corporate, litigation, construction, IP, labour and criminal law.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        breadcrumb="Practice Areas"
        eyebrow="Legal Services"
        title={<>Expertise for <span className="text-gold">every legal challenge.</span></>}
        description="Specialized counsel across modern legal domains, backed by decades of experience and a clear understanding of your needs."
        image="/images/law1.jpg"
        imageLabel="Our expertise"
        imageCaption="Strategic advice. Thorough preparation. Dedicated advocacy."
        secondaryAction={{ label: "Browse Practice Areas", href: "#practice-areas" }}
      />
      <section id="practice-areas" className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PracticeAreasExplorer />
        </div>
      </section>
    </>
  );
}


