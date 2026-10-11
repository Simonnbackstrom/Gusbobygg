import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Concept from "@/components/Concept";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reveal><Concept /></Reveal>
      <Projects />
      <Reveal><Reviews /></Reveal>
      <Reveal><Statement /></Reveal>
      <Reveal><Faq limit={4} /></Reveal>
      <Reveal><HomeForm /></Reveal>
      <Footer />
    </main>
  );
}
