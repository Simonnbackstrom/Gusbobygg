import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vad vi bygger — ladugårdar, djurstallar och lantbruksbyggnader",
  description:
    "Mjölkladugårdar, ungdjurstall, maskinhallar och om- och tillbyggnader. Totalentreprenad med en kontaktpunkt från ritning till inflytt.",
  alternates: { canonical: "/vad-vi-gor" },
  openGraph: {
    title: "Vad vi bygger | Gusbo Bygg",
    description:
      "Ladugårdar, djurstallar och lantbruksbyggnader — totalentreprenad från ritning till inflytt.",
    url: "/vad-vi-gor",
    type: "website",
  },
};

export default function VadViGorPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        image="/images/flygfoto/hero.jpg"
        imageAlt="Gårdsmiljö med ladugård och silo"
        priority
        eyebrow="Vad vi bygger"
        title={
          <>
            Ladugårdar och djurstallar
            <br />
            från ritning till inflytt.
          </>
        }
        lead="Mjölkladugårdar, ungdjurstall och om- och tillbyggnader. Du köper hela bygget av oss — en kontakt, ett avtal, från första samtalet till att korna står inne."
        cta={
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+46703622532"
              className="inline-flex items-center justify-center gap-3 bg-white text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-cream transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              070-362 25 32
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white font-bold text-base px-8 py-4 hover:bg-white/10 hover:border-white transition-colors duration-200"
            >
              Skicka meddelande
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
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
