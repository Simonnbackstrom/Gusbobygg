import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    label: "Projekt 01",
    location: "Kilafors",
    year: "2025",
    category: "Ladugård",
    img: "/images/flygfoto/01.jpg",
  },
  {
    label: "Projekt 02",
    location: "Bollnäs",
    year: "2025",
    category: "Djurstall",
    img: "/images/flygfoto/hero.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projekt" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Referensprojekt
          </h2>
          <p className="text-gb-slate text-sm leading-relaxed">
            Vi lägger upp referenser här efterhand. Ring så berättar vi mer om
            pågående och avslutade projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p) => (
            <article key={p.label} className="group">
              <div className="relative overflow-hidden bg-gb-ink aspect-[16/9]">
                <Image
                  src={p.img}
                  alt={p.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="pt-5">
                <p className="text-gb-slate text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
                  {p.label}
                </p>
                <p className="text-gb-slate text-sm">
                  {p.location} · {p.year} · {p.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
          >
            Kontakta oss
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
