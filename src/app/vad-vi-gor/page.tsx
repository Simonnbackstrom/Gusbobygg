import Nav from "@/components/Nav";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function VadViGorPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <WhatWeDo />
        <Process />
        <Gallery />
        <CtaBand heading="Har du ett projekt i tanken?" />
      </div>
      <Footer />
    </main>
  );
}
