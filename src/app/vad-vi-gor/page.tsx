import Nav from "@/components/Nav";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function VadViGorPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <Reveal><WhatWeDo /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><CtaBand heading="Har du ett projekt i tanken?" /></Reveal>
      </div>
      <Footer />
    </main>
  );
}
