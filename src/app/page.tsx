import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesTeaser from "@/components/ServicesTeaser";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <ServicesTeaser />
      <Story />
      <Projects />
      <CtaBand />
      <Footer />
    </main>
  );
}
