import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Story from "@/components/Story";
import OmOssGallery from "@/components/OmOssGallery";
import WhyGusbo from "@/components/WhyGusbo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Om Gusbo Bygg, rötter i jordbruket, hantverk som håller",
  description:
    "Vi är ett byggföretag med rötter i jordbruket. Här är historien, laget och varför bönder väljer att bygga med oss.",
  alternates: { canonical: "/varfor-gusbo" },
  openGraph: {
    title: "Om Gusbo Bygg | Gusbo Bygg",
    description:
      "Byggföretag med rötter i jordbruket. Vårt lag, vår historia och vårt arbetssätt.",
    url: "/varfor-gusbo",
    type: "website",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Om oss", path: "/varfor-gusbo" },
]);

export default function VarforGusboPage() {
  return (
    <main>
      <script {...jsonLdProps(breadcrumbs)} />
      <Nav />
      <PageHeader
        image="/images/flygfoto/04.jpg"
        imageAlt="Gård och landskap i Hälsingland"
        priority
        eyebrow="Om oss"
        title={
          <>
            Rötter i
            <br />
            jordbruket.
          </>
        }
        lead="Vi är ett byggföretag med rötter i gården. Här är historien, laget och varför bönder väljer att bygga med oss."
      />
      <Reveal><Story cta={{ label: "Prata med oss", href: "/kontakt" }} /></Reveal>
      <Reveal><OmOssGallery /></Reveal>
      <Reveal><WhyGusbo /></Reveal>
      <Reveal><CtaBand heading="Nyfiken på att prata om ditt bygge?" /></Reveal>
      <Footer />
    </main>
  );
}
