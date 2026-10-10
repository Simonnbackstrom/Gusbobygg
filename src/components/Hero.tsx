import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <Image
        src="/images/flygfoto/hero.jpg"
        alt="Gårdsmiljö med ladugård, silo och skog"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark bottom-to-top gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-gb-ink/95 via-gb-ink/55 to-gb-ink/20" />
      {/* Subtle green tint on top for brand cohesion */}
      <div className="absolute inset-0 bg-gb-forest/25 mix-blend-multiply" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full flex flex-col items-center text-center">
        <h1
          className="gb-hero-rise text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 max-w-[18ch] md:max-w-none md:whitespace-nowrap text-balance"
          style={{ animationDelay: "120ms" }}
        >
          Vi bygger ladugårdar åt bönder.
        </h1>

        <span
          className="gb-hero-rise block w-16 h-0.5 bg-gb-forest mb-6"
          style={{ animationDelay: "220ms" }}
          aria-hidden
        />

        <p
          className="gb-hero-rise text-white/80 text-lg sm:text-2xl font-medium max-w-xl mb-12 leading-relaxed"
          style={{ animationDelay: "320ms" }}
        >
          Totalentreprenör med rötter i jordbruket.
        </p>

        <div
          className="gb-hero-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:w-auto"
          style={{ animationDelay: "560ms" }}
        >
          <a
            href="/kontakt"
            className="group inline-flex items-center justify-center gap-3 bg-white text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-cream hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 ease-out"
          >
            Kontakta oss
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+46703622532"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white font-semibold text-base px-8 py-4 hover:border-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            <Phone size={18} strokeWidth={2.5} />
            Ring oss 070-362 25 32
          </a>
        </div>

      </div>
    </section>
  );
}
