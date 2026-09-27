const steps = [
  {
    number: "01",
    title: "Möte",
    desc: "Vi träffas på gården, går igenom behovet, funktionen och budgeten.",
  },
  {
    number: "02",
    title: "Projektering",
    desc: "Ritningar, tidplan och myndighetsprocess. Vi håller ihop det.",
  },
  {
    number: "03",
    title: "Bygge",
    desc: "Vår arbetsledning är på plats. Rör, VVS, el och snickeri under ett tak.",
  },
  {
    number: "04",
    title: "Överlämning",
    desc: "Slutbesiktning, dokumentation och kontakt om något behöver justeras.",
  },
];

export default function Process() {
  return (
    <section className="bg-gb-cream py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-7">
            <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
            <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Så jobbar vi.
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-gb-slate text-lg leading-relaxed">
              En kontaktpunkt genom hela bygget. Fyra tydliga steg från
              första samtal till nycklarna hänger på sin plats.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gb-line border border-gb-line">
          {steps.map((s) => (
            <div
              key={s.number}
              className="bg-gb-cream p-8 md:p-10 flex flex-col"
            >
              <span className="text-gb-forest text-sm font-bold tracking-[0.18em] mb-6">
                {s.number}
              </span>
              <h3 className="text-gb-ink text-xl md:text-2xl font-extrabold tracking-tight mb-4">
                {s.title}
              </h3>
              <p className="text-gb-slate text-sm md:text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
