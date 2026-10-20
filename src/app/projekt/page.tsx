import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import ProjectsDetail from "@/components/ProjectsDetail";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Referensprojekt, ladugårdar och djurstallar vi byggt",
  description:
    "Mjölkladugårdar och ungdjurstall vi tagit totalansvar för i Hälsingland och Gästrikland, från ritning till inflytt, med en kontaktpunkt genom hela bygget.",
  alternates: { canonical: "/projekt" },
  openGraph: {
    title: "Referensprojekt, ladugårdar och djurstallar | Gusbo Bygg",
    description:
      "Mjölkladugårdar och ungdjurstall vi byggt i Hälsingland och Gästrikland.",
    url: "/projekt",
    type: "website",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Referensprojekt", path: "/projekt" },
]);

export default function ProjektPage() {
  return (
    <main>
      <script {...jsonLdProps(breadcrumbs)} />
      <Nav />
      <PageHeader
        eyebrow="Referensprojekt"
        title={
          <>
            Bygget talar
            <br />
            för sig självt.
          </>
        }
        lead="Projekt vi tagit totalansvar för, från första skiss till överlämning, med en kontaktpunkt, tydlig tidplan och hantverk som håller."
      />
      <ProjectsDetail />
      <Reveal><CtaBand heading="Vill du prata om liknande projekt?" /></Reveal>
      <Footer />
    </main>
  );
}
