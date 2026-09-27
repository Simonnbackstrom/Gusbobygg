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
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 md:whitespace-nowrap">
          Vi bygger ladugårdar åt bönder.
        </h1>

        <p className="text-white/80 text-xl sm:text-2xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
          Och vi vet vad vi gör.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+46701234567"
            className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
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
