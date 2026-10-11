import Image from "next/image";

import { DynamicIcon } from "@/components/dynamic-icon";
import { cn } from "@/lib/utils";

export function FeatureRow({
  eyebrowNumber,
  title,
  description,
  icon,
  image,
  reverse,
}: {
  eyebrowNumber: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div
        className={cn(
          "relative h-64 overflow-hidden rounded-lg sm:h-80",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
        <span className="absolute top-5 left-5 flex size-12 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
          <DynamicIcon name={icon} className="size-5" />
        </span>
      </div>
      <div className={cn(reverse && "lg:order-1")}>
        <span className="font-heading text-6xl font-semibold text-navy/10">
          {eyebrowNumber}
        </span>
        <h3 className="-mt-6 font-heading text-2xl font-semibold text-navy sm:text-3xl">
          {title}
        </h3>
        <div className="mt-4 h-px w-14 bg-gold" />
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
