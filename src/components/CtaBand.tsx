import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/flygfoto/03.jpg"
        alt="Gårdsmiljö vid sjö"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#24402F]/90" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-2xl">
              Ska du bygga stall?
              <br />
              Ring oss så pratar vi.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+46701234567"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#24402F] font-bold text-base px-8 py-4 hover:bg-[#f0f5f1] transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              070-XXX XX XX
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white font-semibold text-base px-8 py-4 hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              Kontakt
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
