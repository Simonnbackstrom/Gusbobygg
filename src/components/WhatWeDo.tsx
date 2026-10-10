import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    h: "Allt ingår i paketet",
    p: "Ett pris. Mark, platta, stomme, VVS och el är med från början. Inga tillägg på vägen.",
    img: "/images/kamera/bygg-03.jpg",
    alt: "Betongarbete på byggplats",
  },
  {
    number: "02",
    h: "Vi anlitar leverantörerna",
    p: "Varje leverantör har egen arbetsledare. Vi håller ihop dem och planerar flödet.",
    img: "/images/kamera/bygg-06.jpg",
    alt: "Byggplats med hjullastare",
  },
  {
    number: "03",
    h: "Du har en kontakt",
    p: "En person att ringa, en som vet var projektet står. Du slipper hänga i luren mellan hantverkare.",
    img: "/images/team/edvin.jpg",
    alt: "Edvin Säll, grundare och projektledare",
  },
];

const included = [
  { label: "Mark", desc: "Avbaning, dränering, fyllning." },
  { label: "Platta", desc: "Betong och grund efter besättning och maskiner." },
  { label: "Stomme", desc: "Trä eller stål. Tak, väggar och fasad." },
  { label: "VVS", desc: "Vatten, avlopp, värme och ventilation." },
  { label: "El", desc: "Belysning, kraft och styr. Förberett för robot och foder." },
];

export default function WhatWeDo() {
  return (
    <section id="vad-vi-gor" className="bg-white">
      <div className="bg-gb-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-12 md:mb-14">
            <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
            <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-5">
              Allt som ingår i priset.
            </h2>
            <p className="text-gb-slate text-lg leading-[1.6]">
              Fem delar, en leverans, ett avtal.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-5">
            {included.map((item, i) => (
              <li
                key={item.label}
                className="bg-white border border-gb-line p-6 md:p-7"
              >
                <span className="block text-gb-forest text-sm font-bold tabular-nums tracking-[0.2em] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-gb-ink text-xl md:text-2xl font-extrabold tracking-tight mb-2">
                  {item.label}
                </h3>
                <p className="text-gb-slate text-sm md:text-base leading-[1.6]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gb-line">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14 md:mb-20">
            <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
            <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-5">
              Så jobbar vi.
            </h2>
            <p className="text-gb-slate text-lg leading-[1.6]">
              Tre saker som gör att du kan luta dig tillbaka under bygget.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                <div
                  className={`md:col-span-6 relative aspect-[4/3] overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="md:col-span-6">
                  <span className="block text-gb-forest text-sm font-bold tracking-[0.25em] mb-5">
                    {p.number}
                  </span>
                  <h3 className="text-gb-ink text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-5">
                    {p.h}
                  </h3>
                  <p className="text-gb-slate text-lg leading-[1.7]">{p.p}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-24 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
            >
              Få pris på ditt stall
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              href="/projekt"
              className="inline-flex items-center justify-center gap-3 border-2 border-gb-forest text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-forest hover:text-white transition-colors duration-200"
            >
              Se våra projekt
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
