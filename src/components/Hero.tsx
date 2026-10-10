import Image from "next/image";
import { Phone } from "lucide-react";

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

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full text-center">
        <h1
          className="gb-hero-rise text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 md:whitespace-nowrap"
          style={{ animationDelay: "120ms" }}
        >
          Vi bygger ladugårdar åt bönder.
        </h1>

        <span
          className="gb-hero-rise block w-16 h-0.5 bg-gb-forest mx-auto mb-6"
          style={{ animationDelay: "220ms" }}
          aria-hidden
        />

        <p
          className="gb-hero-rise text-white/80 text-xl sm:text-2xl font-medium max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: "320ms" }}
        >
          Totalentreprenör med rötter i jordbruket.
        </p>

        <div
          className="gb-hero-fade flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "560ms" }}
        >
          <a
            href="tel:+46703622532"
            className="inline-flex items-center justify-center gap-3 bg-white text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-cream transition-colors duration-200"
          >
            <Phone size={18} strokeWidth={2.5} />
            Ring oss direkt
          </a>
          <a
            href="/vad-vi-gor"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white font-semibold text-base px-8 py-4 hover:border-white hover:bg-white/5 transition-all duration-200"
          >
            Så jobbar vi
          </a>
        </div>

      </div>
    </section>
  );
}
