import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const buildLinks = [
  { label: "Så funkar det", href: "/vad-vi-gor" },
  { label: "Processen steg för steg", href: "/vad-vi-gor#process" },
  { label: "Allt som ingår", href: "/vad-vi-gor#vad-vi-gor" },
  { label: "Mjölkladugård", href: "/projekt#mjolkladugard-edsbyn" },
  { label: "Ungdjurstall", href: "/projekt#ungdjurstall-kilafors" },
  { label: "Våra referensprojekt", href: "/projekt" },
];

const quickLinks = [
  { label: "Startsida", href: "/" },
  { label: "Om oss", href: "/varfor-gusbo" },
  { label: "Tre skäl att bygga med oss", href: "/varfor-gusbo#varfor-gusbo" },
  { label: "Vanliga frågor", href: "/vanliga-fragor" },
  { label: "Få pris på ditt bygge", href: "/kontakt" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Green top accent */}
      <div className="h-0.5 bg-gb-forest" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Col 1: Company info */}
          <div className="md:col-span-4">
            <Link href="/" aria-label="Gusbo Bygg - startsida" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-liggande.png"
                alt="Aktiebolaget Gusbo Bygg"
                width={1550}
                height={384}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-gb-slate text-sm leading-relaxed mb-5">
              Totalentreprenör inom djurstallar och lantbruksbyggnader. Vi
              bygger ladugårdar åt bönder, från första ritning till den
              dagen korna står inne.
            </p>
            <p className="text-gb-slate text-sm leading-relaxed mb-6">
              Rötter i jordbruket, hantverk som håller. Vi utgår från
              Hälsingland och tar jobb i hela Sverige.
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

          {/* Col 2: Vi bygger */}
          <div className="md:col-span-3">
            <p className="text-gb-ink text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Vi bygger
            </p>
            <ul className="space-y-3">
              {buildLinks.map((l) => (
                <li key={l.label}>
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

          {/* Col 3: Snabblänkar */}
          <div className="md:col-span-2">
            <p className="text-gb-ink text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Snabblänkar
            </p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
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

          {/* Col 4: Kontakt */}
          <div className="md:col-span-3">
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
              <a
                href="https://www.linkedin.com/in/edvin-säll-41a42a43b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gb-slate hover:text-gb-forest transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full bg-gb-forest/10 flex items-center justify-center shrink-0 group-hover:bg-gb-forest transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    className="text-gb-forest group-hover:text-white transition-colors"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                aria-label="Instagram (länk kommer snart)"
                className="flex items-center gap-3 text-gb-slate hover:text-gb-forest transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full bg-gb-forest/10 flex items-center justify-center shrink-0 group-hover:bg-gb-forest transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="text-gb-forest group-hover:text-white transition-colors"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gb-line">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gb-muted text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Aktiebolaget Gusbo Bygg · Org.nr 559518-1362
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/integritetspolicy"
              className="text-gb-muted hover:text-gb-forest text-xs transition-colors duration-200"
            >
              Integritetspolicy
            </Link>
            <p className="text-gb-muted text-xs">
              Byggt av <span className="text-gb-slate font-semibold">Dinmedia</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
