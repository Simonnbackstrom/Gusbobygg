import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    label: "Projekt 01",
    title: "Ny ladugård utanför Kilafors",
    location: "Kilafors",
    year: "2025",
    category: "Ladugård",
    scope: "Totalentreprenad",
    facts: [
      { label: "Byggnad", value: "Ladugård" },
      { label: "Yta", value: "ca 2 400 m²" },
      { label: "År", value: "2025" },
      { label: "Omfattning", value: "Nyckelfärdigt" },
    ],
    body: [
      "En ny ladugård byggd från grunden åt en mjölkgård i Kilafors. Vi tog över hela projektet. Markarbete, betong, stomme och installationer. Bonden kunde fokusera på drift och djur under bygget.",
      "Stallet är planerat för robotmjölkning med genomtänkta flöden för foder, gödsel och personal. Ventilation och belysning är dimensionerade efter djurantal och rutiner, och materialvalet är gjort för att klara många år av dagligt slitage.",
    ],
    img: "/images/flygfoto/01.jpg",
  },
  {
    label: "Projekt 02",
    title: "Djurstall i Bollnäs",
    location: "Bollnäs",
    year: "2025",
    category: "Djurstall",
    scope: "Totalentreprenad",
    facts: [
      { label: "Byggnad", value: "Djurstall" },
      { label: "Yta", value: "ca 1 800 m²" },
      { label: "År", value: "2025" },
      { label: "Omfattning", value: "Nyckelfärdigt" },
    ],
    body: [
      "Ett nytt djurstall åt en gård utanför Bollnäs. Byggnaden är ritad utifrån hur besättningen rör sig genom stallet, med breda gångar, tydliga zoner och god ventilation.",
      "Vi stod för hela entreprenaden, från grundläggning till färdig anläggning. Vi samordnade underentreprenörer så att gården hade en kontaktpunkt genom hela projektet.",
    ],
    img: "/images/flygfoto/hero.jpg",
  },
];

export default function ProjectsDetail() {
  return (
    <section id="projekt" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-24">
          <div className="md:col-span-7">
            <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
            <h1 className="text-gb-ink text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Referensprojekt
              <br />
              från gårdar vi byggt åt.
            </h1>
          </div>
          <div className="md:col-span-5 flex items-end">
            <div className="space-y-5 text-gb-slate text-lg leading-[1.7]">
              <p>
                Här samlar vi projekt vi tagit ansvar för, från första skiss
                och ritning till slutbesiktning och överlämning. Varje bygge
                är olika, men arbetssättet är detsamma: en kontaktpunkt,
                tydlig tidplan och hantverk som håller.
              </p>
              <p>
                Vi lägger upp fler referenser efterhand. Vill du veta mer om
                ett specifikt bygge eller höra vad som passar din gård, hör
                av dig så berättar vi.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p) => (
            <article key={p.label}>
              <div className="relative overflow-hidden bg-gb-ink aspect-[16/9] mb-10 md:mb-12">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-7">
                  <p className="text-gb-forest text-xs font-bold tracking-[0.25em] uppercase mb-4">
                    {p.label}
                  </p>
                  <h2 className="text-gb-ink text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">
                    {p.title}
                  </h2>
                  <div className="space-y-5 text-gb-slate text-base md:text-lg leading-[1.7]">
                    {p.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="border-t-2 border-gb-forest pt-6">
                    <p className="text-gb-ink text-xs font-bold tracking-[0.2em] uppercase mb-5">
                      Fakta
                    </p>
                    <dl className="divide-y divide-gb-line">
                      {p.facts.map((f) => (
                        <div
                          key={f.label}
                          className="flex justify-between gap-6 py-3"
                        >
                          <dt className="text-gb-slate text-sm">{f.label}</dt>
                          <dd className="text-gb-ink text-sm font-semibold text-right">
                            {f.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 md:mt-32 flex justify-center">
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
