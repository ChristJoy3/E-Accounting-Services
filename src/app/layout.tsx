import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Loader } from "@/components/Loader";
import { site } from "@/lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const serif = DM_Serif_Display({
  variable: "--ff-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--ff-sans",
  subsets: ["latin"],
});

const description =
  "Bookkeeping, accounting, payroll, and PEI tax filing for individuals, families, and businesses in Charlottetown. Free consultations. Serving clients since 2008.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Bookkeeping Charlottetown & PEI Tax Filing`,
  description,
  keywords: [
    "bookkeeping Charlottetown",
    "PEI tax filing",
    "payroll services PEI",
    "accountant Charlottetown",
    "small business accounting PEI",
    "sales tax returns PEI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description,
  },
  twitter: { card: "summary", title: site.name, description },
};

export const viewport: Viewport = {
  themeColor: "#2B3017",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  slogan: site.tagline,
  description,
  url: site.url,
  telephone: `+1-${site.phone}`,
  faxNumber: `+1-${site.fax}`,
  email: site.email,
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.provinceCode,
    postalCode: site.address.postal,
    addressCountry: "CA",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Prince Edward Island" },
  sameAs: [site.facebook],
};

// Runs before first paint so hero letters start hidden only when they will animate.
const motionFlag = `if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('motion')`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <Loader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
