import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#24402F] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Left: headline + direct contact */}
          <div>
            <p className="text-[#8ab49a] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Kontakt
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Ska du bygga stall?
              <br />
              Hör av dig.
            </h2>
            <p className="text-[#c8d9cc] text-lg leading-relaxed mb-10">
              Vi svarar på dina frågor och berättar hur processen ser ut.
              Föredrar du att ringa är det snabbast.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+46701234567"
                className="inline-flex items-center gap-3 bg-white text-[#24402F] font-bold text-base px-8 py-4 hover:bg-[#f0f5f1] transition-colors duration-200 self-start"
              >
                <Phone size={18} strokeWidth={2.5} />
                Ring oss direkt
              </a>
              <a
                href="mailto:info@gusbobygg.se"
                className="inline-flex items-center gap-3 text-[#8ab49a] hover:text-white text-sm font-semibold transition-colors duration-200 self-start"
              >
                <Mail size={16} strokeWidth={2} />
                info@gusbobygg.se
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form
              action="mailto:info@gusbobygg.se"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#8ab49a] text-xs font-bold tracking-[0.12em] uppercase">
                    Namn
                  </label>
                  <input
                    type="text"
                    name="namn"
                    placeholder="Anders Karlsson"
                    required
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#8ab49a] text-xs font-bold tracking-[0.12em] uppercase">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="070-XXX XX XX"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#8ab49a] text-xs font-bold tracking-[0.12em] uppercase">
                  E-post
                </label>
                <input
                  type="email"
                  name="epost"
                  placeholder="anders@gard.se"
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#8ab49a] text-xs font-bold tracking-[0.12em] uppercase">
                  Vad ska du bygga?
                </label>
                <textarea
                  name="meddelande"
                  rows={5}
                  placeholder="Berätta kort om ditt projekt, typ av stall, ungefärlig storlek och tidplan om du vet."
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-[#24402F] font-bold text-sm px-8 py-4 hover:bg-[#f0f5f1] transition-colors duration-200 self-start tracking-wide"
              >
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
