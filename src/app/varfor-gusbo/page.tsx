import Nav from "@/components/Nav";
import Story from "@/components/Story";
import Team from "@/components/Team";
import WhyGusbo from "@/components/WhyGusbo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function VarforGusboPage() {
  return (
    <main>
      <Nav />
      <div className="pt-32">
        <Story cta={{ label: "Prata med oss", href: "/kontakt" }} />
        <Team />
        <WhyGusbo />
        <CtaBand heading="Nyfiken på att prata om ditt bygge?" />
      </div>
      <Footer />
    </main>
  );
}
