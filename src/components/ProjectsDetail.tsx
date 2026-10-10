import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    slug: "mjolkladugard-edsbyn",
    label: "Projekt 01",
    title: "Mjölkladugård för fyra robotar i Edsbyn",
    location: "Edsbyn",
    year: "2026",
    category: "Mjölkladugård",
    scope: "Totalentreprenad",
    facts: [
      { label: "Byggnad", value: "Mjölkladugård" },
      { label: "Robotar", value: "Fyra" },
      { label: "Stomme", value: "Betong" },
      { label: "År", value: "2026" },
      { label: "Omfattning", value: "Totalentreprenad" },
    ],
    body: [
      "En ny mjölkladugård byggd från grunden åt en gård i Edsbyn. Stommen är i betong och stallet är dimensionerat för fyra robotar, med flöden för foder, gödsel och personal planerade utifrån hur arbetet ser ut i vardagen.",
      "Vi tog hela entreprenaden och samordnade VVS och el genom bygget. En kontaktpunkt mot gården, en tydlig tidplan och installationer som greppar in i varandra från första dagen.",
    ],
    img: "/images/flygfoto/01.jpg",
  },
  {
    slug: "ungdjurstall-kilafors",
    label: "Projekt 02",
    title: "Ungdjurstall med automatisk kalvamma i Kilafors",
    location: "Kilafors",
    year: "2026",
    category: "Ungdjurstall",
    scope: "Totalentreprenad",
    facts: [
      { label: "Byggnad", value: "Ungdjurstall" },
      { label: "Platser", value: "56 ungdjur" },
      { label: "Utrustning", value: "Automatisk kalvamma" },
      { label: "År", value: "2026" },
      { label: "Omfattning", value: "Totalentreprenad" },
    ],
    body: [
      "Ett ungdjurstall utanför Kilafors med plats för 56 ungdjur. Stallet är planerat kring en automatisk kalvamma, med flöden och boxar anpassade för att djuren ska kunna gå lugnt och säkert mellan utfodring, vila och skötsel.",
      "Vi stod för hela entreprenaden, från grundläggning till färdig anläggning, och samordnade underentreprenörer så att gården hade en kontaktpunkt genom hela projektet.",
    ],
    img: "/images/flygfoto/hero.jpg",
  },
];

export default function ProjectsDetail() {
  return (
    <section id="projekt" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <h1 className="text-gb-ink text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02] mb-8">
            Referensprojekt
            <br />
            från gårdar vi byggt åt.
          </h1>
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
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p) => (
            <Reveal key={p.label} className="block">
            <article id={p.slug} className="scroll-mt-24">
              <div className="relative overflow-hidden bg-gb-ink aspect-[16/9] mb-10 md:mb-12">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                {p.status && (
                  <div className="absolute top-5 right-5 flex items-center gap-2 bg-gb-forest px-3 py-1.5">
                    <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                      {p.status}
                    </span>
                  </div>
                )}
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
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 md:mt-32 flex justify-center">
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
          >
            Kontakta oss
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
