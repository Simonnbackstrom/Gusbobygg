const reasons = [
  {
    number: "01",
    title: "Vi tar hela bygget",
    desc: "En kontakt. Ett pris. Vi sköter allt. Från första mötet till nycklarna i din hand.",
  },
  {
    number: "02",
    title: "Vi kan gården",
    desc: "Vi är uppvuxna i lantbruket. Vi vet hur ett stall ska funka när korna är inne. Inte bara på ritningen.",
  },
  {
    number: "03",
    title: "Rakt och enkelt",
    desc: "Du ringer oss direkt. Inga mellanled. Vi pratar som bönder gör.",
  },
];

export default function WhyGusbo() {
  return (
    <section id="varfor-gusbo" className="bg-gb-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-mint mx-auto mb-8" />
          <p className="text-gb-mint text-xs font-bold tracking-[0.25em] uppercase mb-5">
            Därför Gusbo
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Tre skäl att bygga med oss.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="bg-gb-ink p-8 md:p-10 hover:bg-gb-ink-hover transition-colors text-center"
            >
              <span className="text-gb-mint text-sm font-bold tracking-[0.25em] block mb-6">
                {r.number}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-snug">
                {r.title}
              </h3>
              <p className="text-white/85 leading-relaxed text-base">{r.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-white text-center text-base md:text-lg font-semibold mt-16 md:mt-20 max-w-2xl mx-auto">
          &ldquo;Vi bygger ladugårdar åt bönder. Och vi vet vad vi gör.&rdquo;
        </p>
      </div>
    </section>
  );
}
