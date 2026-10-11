import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { SITE_CONFIG } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Barristers & Solicitors, Tema, Ghana`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Oseawuo Chambers & Co is a full-service Ghanaian law firm delivering trusted legal counsel in maritime, energy, corporate, litigation and more — for over five decades.",
  metadataBase: new URL("https://www.oseawuochambers.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="site-content flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
