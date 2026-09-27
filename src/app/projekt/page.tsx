import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function ProjektPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <Projects />
        <CtaBand heading="Vill du prata om liknande projekt?" />
      </div>
      <Footer />
    </main>
  );
}
