import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";


import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";
import { PRACTICE_AREAS } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-cool-gray">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative flex size-11 shrink-0 overflow-hidden rounded-full bg-navy-light">
                <Image
                  src="/images/logo.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </span>
              <span className="font-heading text-lg font-semibold text-silver">
                {SITE_CONFIG.shortName.toUpperCase()}
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-cool-gray/80">
              Trusted legal advocacy and strategic counsel, delivering
              excellence and results for clients across Ghana and beyond
              since {SITE_CONFIG.founded}.
            </p>

          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cool-gray/85 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {PRACTICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-sm text-cool-gray/85 transition-colors hover:text-gold"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-cool-gray/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="space-x-1">
                  <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`} className="hover:text-gold">
                    {SITE_CONFIG.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cool-gray/60 sm:flex-row">
          <p>
            © {year} {SITE_CONFIG.name}. All Rights Reserved.
          </p>
          <p>Barristers &amp; Solicitors</p>
        </div>
      </div>
    </footer>
  );
}


