import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  description: "Sidan du letar efter finns inte eller har flyttats.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section className="bg-white py-32 md:py-40 border-t border-gb-line">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gb-slate text-xs font-bold tracking-[0.18em] uppercase mb-4">
            404
          </p>
          <h1 className="text-gb-ink text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Sidan hittades inte.
          </h1>
          <p className="text-gb-slate text-lg leading-relaxed mb-10">
            Länken kan vara gammal eller felstavad. Gå tillbaka till startsidan
            eller hör av dig så pekar vi dig rätt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
            >
              Till startsidan
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 border border-gb-line text-gb-ink font-bold text-base px-8 py-4 hover:bg-gb-cream transition-colors duration-200"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
