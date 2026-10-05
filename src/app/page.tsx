import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Concept from "@/components/Concept";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reveal><Statement /></Reveal>
      <Reveal><Concept /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Reviews /></Reveal>
      <Reveal><Story cta={{ label: "Läs mer om oss", href: "/varfor-gusbo" }} /></Reveal>
      <Reveal><HomeForm /></Reveal>
      <Footer />
    </main>
  );
}
