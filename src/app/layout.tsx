import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const SITE_URL = "https://gusbobygg.se";
const SITE_NAME = "Gusbo Bygg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gusbo Bygg — Totalentreprenör inom djurstallar och lantbruk",
    template: "%s | Gusbo Bygg",
  },
  description:
    "Vi bygger ladugårdar åt bönder och vi vet vad vi gör. Totalentreprenör inom djurstallar och lantbruksbyggnader, med rötter i jordbruket.",
  applicationName: SITE_NAME,
  authors: [{ name: "Aktiebolaget Gusbo Bygg" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "ladugård",
    "djurstall",
    "mjölkladugård",
    "ungdjurstall",
    "totalentreprenad lantbruk",
    "lantbruksbyggnad",
    "Hälsingland",
    "Gästrikland",
    "Kilafors",
    "byggföretag lantbruk",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Gusbo Bygg — Totalentreprenör inom djurstallar och lantbruk",
    description:
      "Vi bygger ladugårdar åt bönder. Totalentreprenör med rötter i jordbruket.",
    images: [
      {
        url: "/images/flygfoto/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Gårdsmiljö med ladugård, silo och skog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gusbo Bygg — Totalentreprenör inom djurstallar och lantbruk",
    description:
      "Vi bygger ladugårdar åt bönder. Totalentreprenör med rötter i jordbruket.",
    images: ["/images/flygfoto/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  category: "construction",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  name: "Aktiebolaget Gusbo Bygg",
  alternateName: "Gusbo Bygg",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/images/flygfoto/hero.jpg`,
  description:
    "Totalentreprenör inom djurstallar och lantbruksbyggnader. Rötter i jordbruket.",
  telephone: "+46703622532",
  email: "info@gusbobygg.se",
  vatID: "SE559518136201",
  taxID: "559518-1362",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gusbo 6613",
    postalCode: "823 91",
    addressLocality: "Kilafors",
    addressRegion: "Gävleborgs län",
    addressCountry: "SE",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Hälsingland" },
    { "@type": "AdministrativeArea", name: "Gästrikland" },
    { "@type": "AdministrativeArea", name: "Gävleborgs län" },
  ],
  sameAs: ["https://www.linkedin.com/in/edvin-säll-41a42a43b/"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "sv-SE",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${montserrat.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
