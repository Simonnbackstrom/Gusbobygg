const steps = [
  {
    number: "01",
    title: "Du hör av dig",
    desc: "Ring eller mejla. Vi återkopplar inom ett par dagar och bokar in ett möte.",
  },
  {
    number: "02",
    title: "Vi kommer till gården",
    desc: "Vi tittar på platsen tillsammans. Du berättar hur du vill jobba, antal djur och planer.",
  },
  {
    number: "03",
    title: "Du får ett pris",
    desc: "Pris på hela bygget. Mark, platta, stomme, VVS och el i samma offert. Ibland redan på mötet.",
  },
  {
    number: "04",
    title: "Du bestämmer",
    desc: "Säger du ja så skriver vi avtal. Säger du nej är det ingen fara.",
  },
  {
    number: "05",
    title: "Projektering",
    desc: "Vi samlar leverantörerna. Ritningar, tidplan och tillstånd läggs på plats innan första spadtaget.",
  },
  {
    number: "06",
    title: "Bygget startar",
    desc: "Varje leverantör gör sitt. Vi projektleder helheten. Du sköter gården.",
  },
  {
    number: "07",
    title: "Byggmöte varje månad",
    desc: "Vi stämmer av med alla inblandade en gång i månaden tills nycklarna är dina.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white border-t border-gb-line py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14 md:mb-16">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-5">
            Från första samtal till färdig lagård.
          </h2>
          <p className="text-gb-slate text-lg leading-[1.6]">
            Sju steg. En kontakt genom hela bygget.
          </p>
        </div>

        <ol className="max-w-3xl divide-y divide-gb-line border-y border-gb-line">
          {steps.map((s) => (
            <li
              key={s.number}
              className="flex items-baseline gap-6 md:gap-10 py-5 md:py-7"
            >
              <span className="shrink-0 text-gb-forest text-2xl md:text-3xl font-extrabold tabular-nums tracking-tight leading-none w-10 md:w-12">
                {s.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-gb-ink text-lg md:text-xl font-extrabold tracking-tight leading-tight mb-1.5">
                  {s.title}
                </h3>
                <p className="text-gb-slate text-sm md:text-base leading-[1.6]">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
