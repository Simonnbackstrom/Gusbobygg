import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeForm() {
  return (
    <section
      id="offert"
      className="bg-white py-24 md:py-32 border-t border-gb-line"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <h2 className="text-gb-ink text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Berätta om ditt
              <br />
              byggprojekt.
            </h2>
            <p className="text-gb-slate text-lg leading-relaxed mb-10 max-w-md">
              Fyll i formuläret så återkommer vi med en första bedömning. Vill
              du hellre prata direkt går det bra att ringa.
            </p>
            <a
              href="tel:+46701234567"
              className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              070-XXX XX XX
            </a>

            <div className="mt-10 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gb-forest">
                <Image
                  src="/images/team/edvin.jpg"
                  alt="Edvin Säll"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="leading-tight">
                <p className="text-gb-ink text-sm font-bold">Edvin Säll</p>
                <p className="text-gb-slate text-xs mt-0.5">Grundare</p>
              </div>
            </div>
          </div>

          <div>
            <form
              action="mailto:info@gusbobygg.se"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gb-slate text-xs font-bold tracking-[0.12em] uppercase">
                    Namn
                  </label>
                  <input
                    type="text"
                    name="namn"
                    placeholder="Anders Karlsson"
                    required
                    className="bg-white border border-gb-line text-gb-ink placeholder:text-gb-muted px-4 py-3 text-sm focus:outline-none focus:border-gb-forest transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gb-slate text-xs font-bold tracking-[0.12em] uppercase">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="070-XXX XX XX"
                    className="bg-white border border-gb-line text-gb-ink placeholder:text-gb-muted px-4 py-3 text-sm focus:outline-none focus:border-gb-forest transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gb-slate text-xs font-bold tracking-[0.12em] uppercase">
                  E-post
                </label>
                <input
                  type="email"
                  name="epost"
                  placeholder="anders@gard.se"
                  className="bg-white border border-gb-line text-gb-ink placeholder:text-gb-muted px-4 py-3 text-sm focus:outline-none focus:border-gb-forest transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gb-slate text-xs font-bold tracking-[0.12em] uppercase">
                  Vad ska du bygga?
                </label>
                <textarea
                  name="meddelande"
                  rows={5}
                  placeholder="Berätta kort om ditt projekt, typ av stall, ungefärlig storlek och tidplan om du vet."
                  className="bg-white border border-gb-line text-gb-ink placeholder:text-gb-muted px-4 py-3 text-sm focus:outline-none focus:border-gb-forest transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-sm px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200 self-start tracking-wide"
              >
                Skicka meddelande
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
