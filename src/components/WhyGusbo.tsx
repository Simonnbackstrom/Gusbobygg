const reasons = [
  {
    number: "01",
    title: "Helhetsansvar utan undantag",
    desc: "Vi håller ihop hela kedjan. Ingen skyfflar ansvar — du har en kontaktpunkt från första möte till färdigt stall.",
  },
  {
    number: "02",
    title: "Vi förstår lantbruket",
    desc: "Ingen annan totalentreprenör har samma bakgrund i jordbruket. Vi vet vad som fungerar i praktiken — inte bara på ritningen.",
  },
  {
    number: "03",
    title: "Inga krångel, inga överraskningar",
    desc: "Konkurrenterna är billigare men struliga. Vi är trovärdiga. Det du får är det som utlovades.",
  },
  {
    number: "04",
    title: "Rakt och personligt",
    desc: "Inget formulär, ingen säljpitch. Du pratar direkt med oss — och vi pratar ditt språk.",
  },
];

export default function WhyGusbo() {
  return (
    <section id="varfor-gusbo" className="bg-[#121212] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Editorial layout: label + big quote */}
        <div className="mb-20 md:mb-24">
          <p className="text-[#8ab49a] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Varför Gusbo
          </p>
          <blockquote className="text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-3xl">
            "Trovärdiga och kompetenta i det vi håller på med. Vi bygger
            ladugårdar åt bönder och vi vet vad vi gör."
          </blockquote>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {reasons.map((r) => (
            <div key={r.number} className="bg-[#121212] p-8 md:p-10 hover:bg-[#1a1f19] transition-colors group">
              <span className="text-[#24402F] text-xs font-bold tracking-widest block mb-6 group-hover:text-[#8ab49a] transition-colors">
                {r.number}
              </span>
              <h3 className="text-white text-lg font-bold mb-3 leading-snug">{r.title}</h3>
              <p className="text-[#6b726a] leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
