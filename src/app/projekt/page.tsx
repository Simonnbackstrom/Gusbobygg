import Nav from "@/components/Nav";
import ProjectsDetail from "@/components/ProjectsDetail";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ProjektPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <Reveal><ProjectsDetail /></Reveal>
        <Reveal><CtaBand heading="Vill du prata om liknande projekt?" /></Reveal>
      </div>
      <Footer />
    </main>
  );
}
