import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function KontaktPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <Reveal><Contact /></Reveal>
      </div>
      <Footer />
    </main>
  );
}
