import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Statement() {
  return (
    <section className="bg-gb-cream py-20 md:py-28 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-gb-ink">
              <Image
                src="/images/team/edvin.jpg"
                alt="Edvin Säll, grundare av Gusbo Bygg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div aria-hidden className="absolute -bottom-1 -left-1 right-10 h-1 bg-gb-forest" />
            </div>
            <div className="mt-5">
              <p className="text-gb-ink text-sm font-bold">Edvin Säll</p>
              <p className="text-gb-slate text-xs mt-0.5">Grundare, Gusbo Bygg</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="text-gb-ink text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.05]">
              Vi bygger ladugårdar åt{" "}
              <span className="text-gb-forest underline decoration-gb-forest/30 decoration-[3px] underline-offset-[8px]">
                bönder
              </span>
              .
            </h2>

            <p className="text-gb-ink text-lg md:text-xl font-semibold leading-snug mt-5">
              Trovärdiga och kompetenta.
            </p>

            <p className="text-gb-ink/75 text-base md:text-lg leading-[1.6] mt-5">
              Vi är själva uppvuxna på gård. Det gör att vi förstår hur ditt
              arbete ser ut innan vi ritar första linjen. Ett stall ska funka
              på riktigt, inte bara på pappret.
            </p>

            <div className="mt-8 border-l-2 border-gb-forest pl-5 text-gb-slate text-sm md:text-base leading-[1.7]">
              Edvin växte upp i ladugården och har arbetat med djur innan han
              byggde åt dem. Den kombinationen av bondens vardag och
              hantverkarens öga är det som gör att stallen vi reser håller
              för drift, djur och de som ska jobba där varje dag.
            </div>

            <div className="mt-10">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
              >
                Kontakta oss
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
