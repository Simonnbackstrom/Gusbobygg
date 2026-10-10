import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Story from "@/components/Story";
import Team from "@/components/Team";
import OmOssGallery from "@/components/OmOssGallery";
import WhyGusbo from "@/components/WhyGusbo";
import Partners from "@/components/Partners";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Om Gusbo Bygg — rötter i jordbruket, hantverk som håller",
  description:
    "Vi är ett byggföretag med rötter i jordbruket. Här är historien, laget och varför bönder väljer att bygga med oss.",
  alternates: { canonical: "/varfor-gusbo" },
  openGraph: {
    title: "Om Gusbo Bygg | Gusbo Bygg",
    description:
      "Byggföretag med rötter i jordbruket — vårt lag, vår historia och vårt arbetssätt.",
    url: "/varfor-gusbo",
    type: "website",
  },
};

export default function VarforGusboPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        image="/images/team/edvin.jpg"
        imageAlt="Edvin Säll, grundare av Gusbo Bygg"
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
      <Reveal><Team /></Reveal>
      <Reveal><OmOssGallery /></Reveal>
      <Reveal><WhyGusbo /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><CtaBand heading="Nyfiken på att prata om ditt bygge?" /></Reveal>
      <Footer />
    </main>
  );
}
