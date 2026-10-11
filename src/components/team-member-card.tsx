"use client";

import Image from "next/image";
import { ChevronRight, GraduationCap, Languages, Mail, ScrollText, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/data";

function Initials({ name }: { name: string }) {
  const initials = name
    .replace(/^Dr\.\s*\(Med\)\s*/i, "")
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="flex size-full items-center justify-center bg-navy-light text-2xl font-semibold text-gold">
      {initials}
    </div>
  );
}

export function TeamMemberCard({
  member,
  variant = "compact",
}: {
  member: TeamMember;
  variant?: "spotlight" | "compact";
}) {
  return (
    <Dialog>
      <DialogContent
        showCloseButton
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-card p-0 sm:max-w-xl"
      >
        <div className="flex flex-col gap-6 p-6 sm:flex-row">
          <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-3xl border-4 border-gold/20 sm:mx-0">
            {member.image ? (
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            ) : (
              <Initials name={member.name} />
            )}
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl text-navy">
                {member.name}
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm font-medium uppercase tracking-wide text-gold">
              {member.title}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Admitted: {member.admitted}
            </p>
          </div>
        </div>
        <div className="space-y-5 border-t border-border px-6 pb-6">
          <div className="pt-5">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <GraduationCap className="size-4 text-gold" /> Education
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {member.education}
            </p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <ScrollText className="size-4 text-gold" /> Experience
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {member.experience}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy">
                <Languages className="size-4 text-gold" /> Languages
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">{member.languages}</p>
            </div>
            {member.email ? (
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy">
                  <Mail className="size-4 text-gold" /> Email
                </h4>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-1 block text-sm text-muted-foreground hover:text-gold"
                >
                  {member.email}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </DialogContent>
      {variant === "spotlight" ? (
        <SpotlightTrigger member={member} />
      ) : (
        <CompactTrigger member={member} />
      )}
    </Dialog>
  );
}

function SpotlightTrigger({ member }: { member: TeamMember }) {
  return (
    <DialogTrigger
      render={
        <button
          type="button"
          className="group flex w-full flex-col items-center gap-6 rounded-[2rem] bg-card p-8 text-center shadow-[0_1px_2px_rgba(11,26,42,0.06)] ring-1 ring-navy/5 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(11,26,42,0.12)] sm:flex-row sm:text-left"
        />
      }
    >
      <div className="relative size-32 shrink-0 overflow-hidden rounded-[1.75rem] border-4 border-navy/5 transition-colors group-hover:border-gold/30">
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
        ) : (
          <Initials name={member.name} />
        )}
      </div>
      <div>
        <h3 className="font-heading text-xl font-semibold text-navy">{member.name}</h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold">
          {member.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {member.experience}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-navy/70 group-hover:text-navy">
          <User className="size-3.5" /> View Full Profile
        </span>
      </div>
    </DialogTrigger>
  );
}

function CompactTrigger({ member }: { member: TeamMember }) {
  return (
    <DialogTrigger
      render={
        <button
          type="button"
          className={cn(
            "group flex w-full items-center gap-4 rounded-3xl p-4 text-left transition-colors duration-200 hover:bg-secondary/60"
          )}
        />
      }
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl">
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover" sizes="64px" />
        ) : (
          <Initials name={member.name} />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-heading text-sm font-semibold text-navy">
          {member.name}
        </h3>
        <p className="text-xs font-medium uppercase tracking-wide text-gold">
          {member.title}
        </p>
        <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground group-hover:text-navy">
          <User className="size-3" /> View Profile
        </span>
      </div>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
    </DialogTrigger>
  );
}
