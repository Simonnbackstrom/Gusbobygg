import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Vad vi gör", href: "/vad-vi-gor" },
  { label: "Varför Gusbo", href: "/varfor-gusbo" },
  { label: "Projekt", href: "/projekt" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Green top accent */}
      <div className="h-0.5 bg-gb-forest" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Company info */}
          <div>
            <Link href="/" aria-label="Gusbo Bygg - startsida" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-liggande.png"
                alt="Aktiebolaget Gusbo Bygg"
                width={1550}
                height={384}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-gb-slate text-sm leading-relaxed mb-6">
              Totalentreprenör inom djurstallar och lantbruksbyggnader. Rötter
              i jordbruket.
            </p>
            <div className="flex items-start gap-2 text-gb-slate text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-gb-forest" />
              <span className="leading-relaxed">
                Gusbo 6613
                <br />
                823 91 Kilafors
              </span>
            </div>
            <p className="text-gb-muted text-xs mt-4">Org.nr: 559518-1362</p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-gb-ink text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Snabblänkar
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gb-slate text-sm hover:text-gb-forest transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-gb-ink text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Kontakt
            </p>
            <div className="space-y-4">
              <a
                href="tel:+46703622532"
                className="flex items-center gap-3 text-gb-slate hover:text-gb-forest transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full bg-gb-forest/10 flex items-center justify-center shrink-0 group-hover:bg-gb-forest transition-colors">
                  <Phone size={14} className="text-gb-forest group-hover:text-white transition-colors" />
                </span>
                <span className="text-sm">070-362 25 32</span>
              </a>
              <a
                href="mailto:info@gusbobygg.se"
                className="flex items-center gap-3 text-gb-slate hover:text-gb-forest transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full bg-gb-forest/10 flex items-center justify-center shrink-0 group-hover:bg-gb-forest transition-colors">
                  <Mail size={14} className="text-gb-forest group-hover:text-white transition-colors" />
                </span>
                <span className="text-sm">info@gusbobygg.se</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gb-line">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gb-muted text-xs">
            © {new Date().getFullYear()} Aktiebolaget Gusbo Bygg · Org.nr 559518-1362
          </p>
          <p className="text-gb-muted text-xs">
            Byggt av <span className="text-gb-slate font-semibold">Dinmedia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
