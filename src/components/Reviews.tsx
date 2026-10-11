import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "Gusbo höll ihop hela bygget från ritning till färdig lagård. Vi kunde fokusera på gården och lita på att allt annat rullade.",
    name: "Namn Namnsson",
    role: "Mjölkbonde, Ort",
  },
  {
    quote:
      "De pratar samma språk som oss bönder. Inga krångliga svar, bara raka besked och ett bygge som fungerar i praktiken.",
    name: "Namn Namnsson",
    role: "Lantbrukare, Ort",
  },
  {
    quote:
      "Yrkeskunskapen märks från första mötet. Tidplanen höll, ekonomin höll, och stallet gör precis det vi behöver.",
    name: "Namn Namnsson",
    role: "Djuruppfödare, Ort",
  },
];

export default function Reviews() {
  return (
    <section className="bg-gb-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-gb-ink text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Rykte byggs genom
            <br />
            varje avslutat bygge.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 100} className="flex">
            <figure
              className="bg-white border border-gb-line p-10 md:p-12 flex flex-col w-full"
            >
              <Quote
                size={36}
                strokeWidth={2}
                className="text-gb-forest mb-6 shrink-0"
              />
              <div className="flex gap-1 mb-6" aria-label="5 av 5 stjärnor">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-gb-ink text-lg md:text-xl leading-[1.65] mb-10 flex-1 font-medium">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="border-t border-gb-line pt-6">
                <p className="text-gb-ink text-base font-bold">{r.name}</p>
                <p className="text-gb-slate text-sm mt-1">{r.role}</p>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
          >
            Kontakta oss
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
