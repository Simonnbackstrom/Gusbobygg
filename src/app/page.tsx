import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import ServicesTeaser from "@/components/ServicesTeaser";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Statement />
      <ServicesTeaser />
      <Projects />
      <Reviews />
      <Story cta={{ label: "Läs mer om oss", href: "/varfor-gusbo" }} />
      <HomeForm />
      <Footer />
    </main>
  );
}
