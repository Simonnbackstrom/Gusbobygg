import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjektPage() {
  return (
    <main>
      <Nav />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
