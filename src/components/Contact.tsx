import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#24402F] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-[#8ab49a] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Kontakt
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Ska du bygga stall?
            <br />
            Hör av dig.
          </h2>
          <p className="text-[#c8d9cc] text-lg leading-relaxed mb-12">
            Vi svarar på dina frågor och berättar hur processen ser ut.
            Inget formulär — du pratar direkt med oss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+46701234567"
              className="inline-flex items-center gap-3 bg-white text-[#24402F] font-bold text-base px-8 py-4 hover:bg-[#f0f5f1] transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              Ring oss
            </a>
            <a
              href="mailto:info@gusbobygg.se"
              className="inline-flex items-center gap-3 border-2 border-white/40 text-white font-semibold text-base px-8 py-4 hover:border-white/80 hover:bg-white/5 transition-all duration-200"
            >
              <Mail size={18} strokeWidth={2} />
              info@gusbobygg.se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
