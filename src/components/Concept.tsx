import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    number: "01",
    h: "Allt ingår",
    p: "Mark, platta, stomme, VVS och el. En leverans. Ett pris.",
  },
  {
    number: "02",
    h: "Vi anlitar leverantörerna",
    p: "Varje leverantör har egen arbetsledare. Du slipper hålla reda på dem.",
  },
  {
    number: "03",
    h: "Du har en kontakt",
    p: "Vi projektleder bygget. En person att ringa från start till nycklar.",
  },
];

const steps = [
  {
    number: "01",
    title: "Du hör av dig",
    desc: "Ring eller mejla. Vi återkopplar inom ett par dagar.",
  },
  {
    number: "02",
    title: "Vi kommer till gården",
    desc: "Vi tittar på platsen. Du berättar hur du vill jobba, antal djur och planer.",
  },
  {
    number: "03",
    title: "Du får ett pris",
    desc: "Pris på hela bygget. Ibland redan på mötet.",
  },
  {
    number: "04",
    title: "Du bestämmer",
    desc: "Säger du ja så skriver vi avtal. Säger du nej är det ingen fara.",
  },
  {
    number: "05",
    title: "Projektering",
    desc: "Vi samlar leverantörerna. Ritningar, tidplan och tillstånd på plats.",
  },
  {
    number: "06",
    title: "Bygget startar",
    desc: "Varje leverantör gör sitt. Vi styr helheten. Du sköter gården.",
  },
  {
    number: "07",
    title: "Byggmöte varje månad",
    desc: "Vi ses en gång i månaden tills nycklarna är dina.",
  },
];

export default function Concept() {
  return (
    <section id="koncept" className="bg-white border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Få en färdig ladugård
            <br />
            till din gård.
          </h2>
          <p className="text-gb-slate text-lg md:text-xl leading-[1.6]">
            Allt är klart när du släpper in korna. Ett pris. Ett avtal. En
            kontakt.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/flygfoto/01.jpg"
              alt="Gård före bygget"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute top-4 left-4 bg-white text-gb-ink text-xs font-bold tracking-[0.25em] uppercase px-3 py-1.5">
              Före
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/flygfoto/02.jpg"
              alt="Färdig ladugård på gård"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute top-4 left-4 bg-gb-forest text-white text-xs font-bold tracking-[0.25em] uppercase px-3 py-1.5">
              Efter
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-20 md:mb-28">
          {features.map((f) => (
            <div key={f.h}>
              <h3 className="text-gb-ink text-xl md:text-2xl font-extrabold tracking-tight leading-tight mb-3">
                {f.h}
              </h3>
              <p className="text-gb-slate text-base leading-[1.65]">{f.p}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <span className="inline-block text-gb-forest text-xs font-bold tracking-[0.25em] uppercase mb-5">
            Så går det till
          </span>
          <h3 className="text-gb-ink text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
            Från du ringer tills
            <br />
            korna står inne.
          </h3>
        </div>

        <ol className="max-w-3xl mx-auto mb-14 divide-y divide-gb-line border-y border-gb-line">
          {steps.map((s) => (
            <li
              key={s.number}
              className="flex items-baseline gap-6 md:gap-10 py-5 md:py-6"
            >
              <span className="shrink-0 text-gb-forest text-2xl md:text-3xl font-extrabold tabular-nums tracking-tight leading-none w-10 md:w-12">
                {s.number}
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="text-gb-ink text-lg md:text-xl font-extrabold tracking-tight leading-tight mb-1">
                  {s.title}
                </h4>
                <p className="text-gb-slate text-sm md:text-base leading-[1.6]">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6">
          <a
            href="#offert"
            className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
          >
            Få pris på ditt stall
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <Link
            href="/vad-vi-gor#process"
            className="inline-flex items-center gap-3 text-gb-forest font-bold text-sm md:text-base tracking-wide border-b-2 border-gb-forest pb-1 hover:gap-4 transition-all"
          >
            Läs mer om processen
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
