const services = [
  {
    number: "01",
    title: "Mjölkstallar",
    desc: "Vår kärnkompetens. Vi planerar, samordnar och bygger moderna mjölkstallar som fungerar för bonden och djuren — med plats för robotmjölkning, fodersystem och allt därtill.",
  },
  {
    number: "02",
    title: "Djurstallar",
    desc: "Köttproduktion, smågrisar, hästar — vi bygger stallar anpassade för din verksamhet och dina djur, inte tvärtom.",
  },
  {
    number: "03",
    title: "Lantbruksbyggnader",
    desc: "Maskinhallar, foderlager, plansilor och övriga byggnader. Samma helhetsansvar, samma raka process.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-20">
          <div>
            <p className="text-[#24402F] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Vad vi gör
            </p>
            <h2 className="text-[#121212] text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Totalentreprenör
              <br />
              med eget
              <br />
              lantbruksarv
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#53584F] text-lg leading-relaxed">
              Vi samordnar hela bygget och håller i arbetsledningen på plats.
              Rör, VVS, el och snickeri — allt samordnat av oss. Vår bakgrund
              i jordbruket ger kompetens som andra byggbolag saknar.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="divide-y divide-[#e8ece9]">
          {services.map((s) => (
            <div
              key={s.number}
              className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[5rem_1fr_2fr] gap-4 md:gap-8 items-start hover:bg-[#f7f8f7] -mx-6 px-6 transition-colors duration-200"
            >
              <span className="text-[#d0d8d2] text-sm font-bold tracking-widest group-hover:text-[#24402F] transition-colors">
                {s.number}
              </span>
              <h3 className="text-[#121212] text-xl font-bold">{s.title}</h3>
              <p className="text-[#53584F] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
