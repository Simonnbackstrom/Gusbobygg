import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd, jsonLdProps, serviceCatalogJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vad vi bygger, ladugårdar, djurstallar och lantbruksbyggnader",
  description:
    "Mjölkladugårdar, ungdjurstall, maskinhallar och om- och tillbyggnader, totalentreprenad med en kontaktpunkt från ritning till inflytt.",
  alternates: { canonical: "/vad-vi-gor" },
  openGraph: {
    title: "Vad vi bygger | Gusbo Bygg",
    description:
      "Ladugårdar, djurstallar och lantbruksbyggnader, totalentreprenad från ritning till inflytt.",
    url: "/vad-vi-gor",
    type: "website",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Vad vi bygger", path: "/vad-vi-gor" },
]);

const serviceCatalog = serviceCatalogJsonLd([
  {
    name: "Mjölkladugård",
    description:
      "Nybyggnation av mjölkladugårdar med boxar, mjölkrobot, foder och gödselhantering planerat efter besättning.",
    path: "/vad-vi-gor",
  },
  {
    name: "Ungdjurstall",
    description:
      "Ungdjurstall med rätt flöden, kalvamma och klimat för kvigor från avvänjning till inseminering.",
    path: "/vad-vi-gor",
  },
  {
    name: "Maskinhall och lantbruksbyggnad",
    description:
      "Maskinhallar, logar och lantbruksbyggnader med stomme i trä eller stål.",
    path: "/vad-vi-gor",
  },
  {
    name: "Om- och tillbyggnad",
    description:
      "Tillbyggnad eller ombyggnad av befintlig ladugård när grunden är bra och det räcker att bygga vidare.",
    path: "/vad-vi-gor",
  },
  {
    name: "Mark, platta och grundläggning",
    description:
      "Avbaning, dränering, fyllning och betongplatta dimensionerad efter besättning och maskiner.",
    path: "/vad-vi-gor",
  },
  {
    name: "VVS och el i lantbruksbyggnad",
    description:
      "Vatten, avlopp, värme, belysning, kraft och styr, förberett för robot, foder och ventilation.",
    path: "/vad-vi-gor",
  },
]);

export default function VadViGorPage() {
  return (
    <main>
      <script {...jsonLdProps(breadcrumbs)} />
      <script {...jsonLdProps(serviceCatalog)} />
      <Nav />
      <PageHeader
        image="/images/flygfoto/hero.jpg"
        imageAlt="Gårdsmiljö med ladugård och silo"
        priority
        eyebrow="Så bygger vi"
        title="Totalentreprenör för ditt nya kostall."
        lead="Vi bygger ditt kostall efter ett beprövat koncept, från första ritning till den dag korna står inne, med en kontakt och ett avtal hela vägen."
        cta={
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-3 bg-white text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-cream transition-colors duration-200"
          >
            Kontakta oss
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        }
      />
      <Reveal><WhatWeDo /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Gallery /></Reveal>
      <Reveal><CtaBand heading="Har du ett projekt i tanken?" /></Reveal>
      <Footer />
    </main>
  );
}
