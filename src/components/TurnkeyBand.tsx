import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function TurnkeyBand() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] mb-12 md:mb-16">
          <Image
            src="/images/flygfoto/fardigt-stall.jpg"
            alt="Färdig ladugård med solcellstak på en gård i Hälsingland"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
        </Reveal>

        <Reveal className="max-w-3xl mx-auto text-center">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <h2 className="text-gb-ink text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Få en färdig ladugård
            <br />
            till din gård.
          </h2>
          <p className="text-gb-slate text-lg md:text-xl leading-relaxed mb-10">
            Allt är klart när du släpper in korna. Ett pris. Ett avtal. En
            kontakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+46703622532"
              className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              070-362 25 32
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-gb-forest text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-forest hover:text-white transition-colors duration-200"
            >
              Skicka meddelande
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
