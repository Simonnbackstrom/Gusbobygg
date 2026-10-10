import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    slug: "mjolkladugard-edsbyn",
    name: "Mjölkladugård i Edsbyn",
    location: "Edsbyn",
    year: "2026",
    category: "Mjölkladugård",
    teaser:
      "Modern mjölkladugård i betong, planerad för fyra robotar och lugna djurflöden.",
    highlights: [
      { value: "4", label: "robotar" },
      { value: "Betong", label: "stomme" },
      { value: "Total", label: "entreprenad" },
    ],
    img: "/images/flygfoto/01.jpg",
  },
  {
    slug: "ungdjurstall-kilafors",
    name: "Ungdjurstall i Kilafors",
    location: "Kilafors",
    year: "2026",
    category: "Ungdjurstall",
    teaser:
      "Ungdjurstall för 56 djur med automatisk kalvamma och genomtänkta flöden mellan boxarna.",
    highlights: [
      { value: "56", label: "ungdjur" },
      { value: "Auto", label: "kalvamma" },
      { value: "Total", label: "entreprenad" },
    ],
    img: "/images/flygfoto/hero.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projekt" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <p className="text-gb-forest text-xs font-bold tracking-[0.25em] uppercase mb-5">
            Referensprojekt
          </p>
          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Bygget talar för sig självt.
          </h2>
          <p className="text-gb-slate text-lg leading-relaxed">
            Varje gård är sin egen plats — men arbetssättet är detsamma. Här är
            några av de bygg­projekt vi driver just nu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.slug}
              href={`/projekt#${p.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-gb-ink aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gb-ink/90 via-gb-ink/20 to-transparent" />

                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5">
                  <span className="text-gb-forest text-[11px] font-bold tracking-[0.2em] uppercase">
                    0{i + 1} · {p.year}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 md:p-7">
                  <div className="flex items-center gap-2 text-white/80 text-xs font-semibold tracking-wide mb-3">
                    <MapPin size={13} strokeWidth={2.5} />
                    <span>{p.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span>{p.category}</span>
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight leading-[1.1]">
                    {p.name}
                  </h3>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gb-slate text-base leading-relaxed mb-6">
                  {p.teaser}
                </p>

                <dl className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-gb-line">
                  {p.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="text-gb-ink text-xl md:text-2xl font-extrabold tracking-tight leading-none">
                        {h.value}
                      </dt>
                      <dd className="text-gb-slate text-[11px] font-semibold tracking-[0.1em] uppercase mt-1.5">
                        {h.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span className="inline-flex items-center gap-2 text-gb-forest text-sm font-bold tracking-wide group-hover:gap-3 transition-all duration-200">
                  Läs mer om projektet
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/projekt"
            className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
          >
            Alla projekt
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center gap-3 border-2 border-gb-forest text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-forest hover:text-white transition-colors duration-200"
          >
            Prata med oss
          </a>
        </div>
      </div>
    </section>
  );
}
