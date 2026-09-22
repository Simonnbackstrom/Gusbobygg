import Nav from "@/components/Nav";
import WhatWeDo from "@/components/WhatWeDo";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function VadViGorPage() {
  return (
    <main>
      <Nav />
      <div className="pt-20">
        <WhatWeDo />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
