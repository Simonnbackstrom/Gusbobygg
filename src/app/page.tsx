import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import WhyGusbo from "@/components/WhyGusbo";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <WhatWeDo />
      <WhyGusbo />
      <Gallery />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
