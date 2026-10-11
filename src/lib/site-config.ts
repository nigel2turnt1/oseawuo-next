export const SITE_CONFIG = {
  name: "Oseawuo Chambers & Co",
  shortName: "Oseawuo Chambers",
  tagline: "Barristers & Solicitors",
  founded: 1979,
  email: "info@oseawuochambers.com",
  phone: "+233 (0)303 313741",
  phoneAlt: ["+233 (0)276 277356", "+233 (0)244 378577"],
  address:
    "No. 4, Onyina Crescent, Off Sixth Avenue, Near NHIS Office, Community 8, Tema – Ghana",
  mapCoordinates: { lat: 5.669, lng: -0.016 },
  mapEmbedSrc: "https://maps.google.com/maps?q=5.669,-0.016&z=16&output=embed",
  mapLink: "https://www.google.com/maps?q=5.669,-0.016",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;
