import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Vad vi gör", href: "#vad-vi-gor" },
  { label: "Varför Gusbo", href: "#varfor-gusbo" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#121212]">
      {/* Green top accent */}
      <div className="h-0.5 bg-[#24402F]" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Company info */}
          <div>
            <div className="mb-6">
              <p className="text-white font-bold text-lg tracking-tight">GUSBO BYGG</p>
              <p className="text-[#53584F] text-xs font-semibold tracking-[0.15em] uppercase mt-0.5">
                Aktiebolaget
              </p>
            </div>
            <p className="text-[#53584F] text-sm leading-relaxed mb-6">
              Totalentreprenör med rötter i lantbruket. Vi bygger djurstallar
              och lantbruksbyggnader — trovärdiga och kompetenta från start till
              mål.
            </p>
            <div className="flex items-start gap-2 text-[#53584F] text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#24402F]" />
              <span>Sverige</span>
            </div>
            <p className="text-[#3a3f38] text-xs mt-4">Org.nr: 556XXX-XXXX</p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Snabblänkar
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#53584F] text-sm hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Kontakt
            </p>
            <div className="space-y-4">
              <a
                href="tel:+46701234567"
                className="flex items-center gap-3 text-[#53584F] hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full bg-[#24402F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#24402F] transition-colors">
                  <Phone size={14} className="text-[#8ab49a]" />
                </span>
                <span className="text-sm">070-XXX XX XX</span>
              </a>
              <a
                href="mailto:info@gusbobygg.se"
                className="flex items-center gap-3 text-[#53584F] hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full bg-[#24402F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#24402F] transition-colors">
                  <Mail size={14} className="text-[#8ab49a]" />
                </span>
                <span className="text-sm">info@gusbobygg.se</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#3a3f38] text-xs">
            © {new Date().getFullYear()} Gusbo Bygg AB · Org.nr 556XXX-XXXX
          </p>
          <p className="text-[#3a3f38] text-xs">
            Byggt av{" "}
            <span className="text-[#53584F]">Dinmedia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
