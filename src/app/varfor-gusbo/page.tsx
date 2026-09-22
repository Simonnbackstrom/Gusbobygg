import Nav from "@/components/Nav";
import Story from "@/components/Story";
import WhyGusbo from "@/components/WhyGusbo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function VarforGusboPage() {
  return (
    <main>
      <Nav />
      <div className="pt-20">
        <Story />
        <WhyGusbo />
        <CtaBand />
      </div>
      <Footer />
    </main>
  );
}
