import { Plus } from "lucide-react";
import Reveal from "./Reveal";

export const faqs = [
  {
    q: "Vad kostar det ungefär att bygga en ladugård?",
    a: "Priset beror på djurantal, utrustning, markförhållanden och val av stomme. När vi varit på plats och vet dina planer kan vi ge ett fast pris på hela bygget — ibland redan på första mötet.",
  },
  {
    q: "Hur lång tid tar hela processen, från första samtalet till inflytt?",
    a: "Från ritning till färdigt stall ligger de flesta bygg­projekt på 10–16 månader beroende på storlek, bygglov och markarbete. Vi lägger upp en tidplan tidigt och håller den — avvikelser ska du få veta om direkt, inte i efterhand.",
  },
  {
    q: "Vem söker bygglov och sköter alla tillstånd?",
    a: "Det gör vi. I projekteringen samlar vi ihop ritningar, markundersökningar, bygglov och eventuella djurskydds­anmälningar. Du behöver inte jaga papper själv.",
  },
  {
    q: "Hur fungerar totalentreprenad — vad ingår egentligen?",
    a: "Du får en kontaktpunkt och ett pris för hela bygget. Mark, platta, stomme, VVS, el och installationer. Vi anlitar och styr alla leverantörer och tar helhetsansvaret mot dig.",
  },
  {
    q: "Står ni för markundersökningar och geoteknik?",
    a: "Ja. Behövs det provgropar, geotekniker eller radon­mätning så är det en del av projekteringen. Vi ser till att marken håller för det ni vill bygga.",
  },
  {
    q: "Kan ni koppla ihop oss med finansiering?",
    a: "Vi jobbar med flera av de vanliga lantbruks­bankerna och kan hänvisa vidare när det är dags. Själva finansieringen tecknar du som gårdsägare, men vi hjälper till med underlag och kalkyler.",
  },
  {
    q: "Vilka områden bygger ni i?",
    a: "Vi utgår från Kilafors i Hälsingland och bygger främst i Hälsingland, Gästrikland och närliggande län. Är gården längre bort, hör av dig så ser vi om det passar.",
  },
  {
    q: "Kan vi bygga om eller bygga till en befintlig ladugård istället för nytt?",
    a: "Absolut. Om- och tillbyggnader är ofta rätt väg när grunden är bra. Vi kommer ut och tittar, bedömer vad som går att återanvända och vad som bör rivas.",
  },
  {
    q: "Hur hanterar ni leverantörer och underentreprenörer?",
    a: "Varje leverantör har sin egen arbetsledare på plats, och vi projektleder helheten. Du har en person att ringa — vi håller ihop resten.",
  },
  {
    q: "Vad händer om tidplan eller pris börjar glida?",
    a: "Avvikelser ska upp på bordet direkt, inte komma som en överraskning vid slutfakturan. Vi har byggmöte varje månad så länge projektet pågår, och eventuella ändringar beslutas tillsammans.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <Reveal className="divide-y divide-gb-line border-y border-gb-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-6 md:py-7">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h2 className="text-gb-ink text-lg md:text-xl font-extrabold tracking-tight leading-tight flex-1">
                  {item.q}
                </h2>
                <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-gb-forest/10 flex items-center justify-center group-open:bg-gb-forest transition-colors duration-200">
                  <Plus
                    size={16}
                    strokeWidth={2.5}
                    className="text-gb-forest group-open:text-white group-open:rotate-45 transition-all duration-200"
                  />
                </span>
              </summary>
              <p className="text-gb-slate text-base md:text-lg leading-[1.7] mt-4 pr-14">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
