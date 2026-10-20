import Reveal from "./Reveal";

const reasons = [
  {
    title: "Vi tar hela bygget",
    desc: "En kontakt och ett pris, och vi sköter allt från första mötet till nycklarna i din hand.",
  },
  {
    title: "Vi kan gården",
    desc: "Vi är uppvuxna i lantbruket och vet hur ett stall ska funka när korna är inne, inte bara på ritningen.",
  },
  {
    title: "Rakt och enkelt",
    desc: "Du ringer oss direkt, utan mellanled, och vi pratar som bönder gör.",
  },
];

export default function WhyGusbo() {
  return (
    <section id="varfor-gusbo" className="bg-gb-forest py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span aria-hidden className="block h-[2px] w-16 bg-white mx-auto mb-8" />
          <p className="text-white text-xs font-bold tracking-[0.25em] uppercase mb-5">
            Därför Gusbo
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Tre skäl att bygga med oss.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100} className="flex">
              <div className="bg-gb-cream p-8 md:p-10 text-center w-full">
                <h3 className="text-gb-ink text-xl md:text-2xl font-bold mb-4 leading-snug">
                  {r.title}
                </h3>
                <p className="text-gb-slate leading-relaxed text-base">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-white text-center text-base md:text-lg font-semibold mt-16 md:mt-20 max-w-2xl mx-auto">
          &ldquo;Vi bygger ladugårdar åt bönder, och vi vet vad vi gör.&rdquo;
        </p>
      </div>
    </section>
  );
}
