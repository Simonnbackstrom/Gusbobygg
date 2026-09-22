import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <main>
      <Nav />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
