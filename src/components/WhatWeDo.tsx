const services = [
  {
    number: "01",
    title: "Mjölkstallar",
    desc: "Vi planerar, samordnar och bygger moderna mjölkstallar för bonden och djuren, med plats för robotmjölkning och fodersystem.",
  },
  {
    number: "02",
    title: "Djurstallar",
    desc: "Köttproduktion, smågrisar, hästar. Stallar anpassade för verksamheten och djuren.",
  },
  {
    number: "03",
    title: "Lantbruksbyggnader",
    desc: "Maskinhallar, foderlager, plansilor och övriga byggnader.",
  },
  {
    number: "04",
    title: "Stomförsäljning",
    desc: "Prefabricerade stommar för egna byggprojekt. Vi levererar till övriga entreprenörer och den danska marknaden.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="vad-vi-gor" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-24">
          <div className="md:col-span-7">
            <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
            <h1 className="text-gb-ink text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Vi bygger,
              <br />
              samordnar och
              <br />
              levererar.
            </h1>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-gb-slate text-lg md:text-xl leading-[1.7]">
              Totalentreprenör för lantbrukets byggnader. Från första skiss
              till slutbesiktning håller vi ihop bygget så bonden kan sköta
              sitt.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="divide-y divide-gb-line">
          {services.map((s) => (
            <div
              key={s.number}
              className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[5rem_1fr_2fr] gap-4 md:gap-8 items-start hover:bg-gb-cream -mx-6 px-6 transition-colors duration-200"
            >
              <span className="text-gb-ghost text-sm font-bold tracking-widest group-hover:text-gb-forest transition-colors">
                {s.number}
              </span>
              <h3 className="text-gb-ink text-xl font-bold">{s.title}</h3>
              <p className="text-gb-slate leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
