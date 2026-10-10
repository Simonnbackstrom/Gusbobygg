import type { Metadata } from "next";
import { Clock, MapPin, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kontakt — prata med oss om ditt ladugårdsbygge",
  description:
    "Ring, mejla eller skicka ett meddelande så hör vi av oss inom ett par dagar. Totalentreprenör för djurstallar i Hälsingland och Gästrikland.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Gusbo Bygg",
    description:
      "Ring, mejla eller skicka meddelande — vi återkommer inom ett par dagar.",
    url: "/kontakt",
    type: "website",
  },
};

const infoItems = [
  {
    icon: Clock,
    label: "Öppettider",
    value: "Mån–fre 07–17",
  },
  {
    icon: Mail,
    label: "Svarstid",
    value: "Inom ett par dagar",
  },
  {
    icon: MapPin,
    label: "Besöksadress",
    value: "Gusbo 6613, 823 91 Kilafors",
  },
];

export default function KontaktPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            Prata med oss
            <br />
            om ditt bygge.
          </>
        }
        lead="Ring, mejla eller skicka ett meddelande. Vi återkommer inom ett par dagar."
      />
      <Reveal>
        <section className="bg-gb-cream border-b border-gb-line">
          <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <item.icon size={16} strokeWidth={2.5} className="text-gb-forest" />
                  </span>
                  <div>
                    <p className="text-gb-forest text-xs font-bold tracking-[0.2em] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-gb-ink text-base md:text-lg font-semibold leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  );
}
