import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Mjölkstallar",
    desc: "Moderna anläggningar planerade för robot och rutin. Från plan till färdigt stall — vi håller ihop hela bygget så du kan sköta gården.",
    href: "#offert",
  },
  {
    number: "02",
    title: "Djurstallar",
    desc: "Stallar för köttproduktion, smågrisar och hästar. Anpassade efter hur djuren rör sig och hur du sköter dem varje dag.",
    href: "#offert",
  },
  {
    number: "03",
    title: "Lantbruksbyggnader",
    desc: "Maskinhallar, foderlager, plansilor och verkstäder. Funktionella byggnader som ritas utifrån gårdens flöde.",
    href: "#offert",
  },
  {
    number: "04",
    title: "Stomförsäljning",
    desc: "Prefabricerade stommar för byggprojekt. Vi levererar till andra entreprenörer och den danska marknaden.",
    href: "#offert",
  },
];

export default function WhatWeDo() {
  return (
    <section id="vad-vi-gor" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mb-24 md:mb-32">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
          <h1 className="text-gb-ink text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02] mb-8">
            Bygg för lantbrukets vardag.
          </h1>
          <p className="text-gb-slate text-lg md:text-xl leading-[1.7] max-w-2xl">
            Totalentreprenör för lantbrukets byggnader. Från första skiss till
            slutbesiktning håller vi ihop bygget så bonden kan sköta sitt.
          </p>
        </div>
      </div>

      <div className="border-t border-gb-line">
        {services.map((s) => (
          <div key={s.number} className="border-b border-gb-line">
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="md:col-span-2">
                  <span className="text-gb-forest text-sm font-bold tracking-[0.25em]">
                    {s.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h2 className="text-gb-ink text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                    {s.title}
                  </h2>
                  <p className="text-gb-slate text-lg md:text-xl leading-[1.7] max-w-3xl mb-8">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-3 text-gb-forest font-bold text-sm md:text-base tracking-wide border-b-2 border-gb-forest pb-1 hover:gap-4 transition-all"
                  >
                    Läs mer
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
