import type { Metadata } from "next";

import { TeamHero } from "@/components/heroes/team-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamMemberCard } from "@/components/team-member-card";
import { SITE_CONFIG } from "@/lib/site-config";
import { ASSOCIATES, SENIOR_PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the senior partners and associates of Oseawuo Chambers & Co — experienced legal professionals delivering client-focused services.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero
        eyebrow="Our People"
        title={
          <>
            Meet Our <span className="text-gold">Legal Team</span>
          </>
        }
        description={`The senior partners and associates of ${SITE_CONFIG.name} bring decades of combined experience across every major practice area.`}
      />

      {/* Senior partners — large spotlight rows */}
      <section id="senior-partners" className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Senior Partners"
            description="Our senior partners guide the firm's strategic direction and lead its most significant matters."
            align="left"
            className="mb-12"
          />
          <div className="space-y-6">
            {SENIOR_PARTNERS.map((member) => (
              <TeamMemberCard key={member.name} member={member} variant="spotlight" />
            ))}
          </div>
        </div>
      </section>

      {/* Associates — compact directory */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our People"
            title="Associates"
            description="A diverse bench of associates delivering dedicated, client-focused representation across our practice areas."
            align="left"
            className="mb-12"
          />
          <div className="grid gap-2 rounded-[2rem] bg-card p-4 shadow-sm ring-1 ring-navy/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
            {ASSOCIATES.map((member) => (
              <TeamMemberCard key={member.name} member={member} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

