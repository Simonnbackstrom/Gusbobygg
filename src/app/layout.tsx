import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SITE_URL, SITE_NAME, siteGraph } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gusbo Bygg, totalentreprenör inom djurstallar och lantbruk",
    template: "%s | Gusbo Bygg",
  },
  description:
    "Vi bygger framtidens jordbruk, och vi vet vad som behövs. Totalentreprenör inom djurstallar och lantbruksbyggnader, med rötter i jordbruket.",
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
    title: "Gusbo Bygg, totalentreprenör inom djurstallar och lantbruk",
    description:
      "Vi bygger framtidens jordbruk. Totalentreprenör med rötter i jordbruket.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gusbo Bygg, totalentreprenör inom djurstallar och lantbruk",
    description:
      "Vi bygger framtidens jordbruk. Totalentreprenör med rötter i jordbruket.",
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
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#24402F",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${montserrat.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
      </body>
    </html>
  );
}
