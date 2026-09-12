import Image from "next/image";
import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Green overlay */}
      <div className="absolute inset-0 bg-[#24402F]/85" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <p className="text-[#8ab49a] text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Totalentreprenör · Djurstallar & Lantbruk
        </p>

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-3xl mb-8">
          Vi bygger
          <br />
          ladugårdar åt
          <br />
          bönder.
        </h1>

        <p className="text-[#c8d9cc] text-xl sm:text-2xl font-medium max-w-xl mb-12 leading-relaxed">
          Och vi vet vad vi gör. Hela kedjan, från planering till
          inflyttning — utan krångel.
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
            href="mailto:info@gusbobygg.se"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white font-semibold text-base px-8 py-4 hover:border-white/80 hover:bg-white/5 transition-all duration-200"
          >
            Skicka ett mejl
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
