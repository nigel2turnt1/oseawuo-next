import {
  Anchor,
  Zap,
  Briefcase,
  Hammer,
  Building2,
  Gavel,
  Lightbulb,
  Users,
  Shield,
  History,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Heart,
  Globe2,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Anchor,
  Zap,
  Briefcase,
  Hammer,
  Building2,
  Gavel,
  Lightbulb,
  Users,
  Shield,
  History,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Heart,
  Globe2,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Briefcase;
  return <Icon className={className} />;
}
