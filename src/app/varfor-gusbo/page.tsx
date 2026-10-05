import Nav from "@/components/Nav";
import Story from "@/components/Story";
import Team from "@/components/Team";
import OmOssGallery from "@/components/OmOssGallery";
import WhyGusbo from "@/components/WhyGusbo";
import Partners from "@/components/Partners";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function VarforGusboPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <Reveal><Story cta={{ label: "Prata med oss", href: "/kontakt" }} /></Reveal>
        <Reveal><Team /></Reveal>
        <Reveal><OmOssGallery /></Reveal>
        <Reveal><WhyGusbo /></Reveal>
        <Reveal><Partners /></Reveal>
        <Reveal><CtaBand heading="Nyfiken på att prata om ditt bygge?" /></Reveal>
      </div>
      <Footer />
    </main>
  );
}
