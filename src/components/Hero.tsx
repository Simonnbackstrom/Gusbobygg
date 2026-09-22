import Image from "next/image";
import { Phone, ArrowDown } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-[#121212]/55 to-[#121212]/20" />
      {/* Subtle green tint on top for brand cohesion */}
      <div className="absolute inset-0 bg-[#24402F]/25 mix-blend-multiply" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.02] tracking-tight max-w-4xl mb-8">
          Vi bygger
          <br />
          ladugårdar åt
          <br />
          bönder.
        </h1>

        <p className="text-white/80 text-xl sm:text-2xl font-medium max-w-xl mb-12 leading-relaxed">
          Och vi vet vad vi gör.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+46701234567"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#24402F] font-bold text-base px-8 py-4 hover:bg-[#f0f5f1] transition-colors duration-200"
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
