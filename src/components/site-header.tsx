"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <header
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-5",
          scrolled
            ? "border-white/10 bg-navy/75 shadow-[0_8px_30px_rgba(11,26,42,0.35)]"
            : "border-white/5 bg-navy/40"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full bg-navy-light">
            <Image
              src="/images/logo.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-semibold tracking-wide text-silver sm:text-base">
              {SITE_CONFIG.shortName.toUpperCase()}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
              {SITE_CONFIG.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium tracking-wide text-cool-gray/90 transition-colors hover:text-gold",
                isActive(link.href) && "bg-gold/10 text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/contact" />}
            className="bg-gold text-navy hover:bg-gold-light"
          >
            Book a Consultation
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-silver hover:bg-navy-light hover:text-gold lg:hidden"
              />
            }
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="mobile-navigation bg-navy text-silver">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-silver">
                <Image
                  src="/images/logo.jpeg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                {SITE_CONFIG.shortName}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-medium text-cool-gray transition-colors hover:bg-navy-light hover:text-gold",
                    isActive(link.href) && "bg-navy-light text-gold"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 px-4">
              <Button
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                className="w-full bg-gold text-navy hover:bg-gold-light"
              >
                Book a Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

