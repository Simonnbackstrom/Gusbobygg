"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const primaryLinks = [
  { label: "Så funkar det", href: "/vad-vi-gor" },
  { label: "Om oss", href: "/varfor-gusbo" },
  { label: "Projekt", href: "/projekt" },
];
const kontaktLink = { label: "Kontakt", href: "/kontakt" };
const mobileLinks = [...primaryLinks, kontaktLink];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-dark.png"
              alt="Gusbo Bygg"
              width={96}
              height={96}
              priority
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-gb-ink font-extrabold text-xl md:text-2xl tracking-tight">
                GUSBO BYGG
              </span>
              <span className="hidden sm:inline text-gb-forest text-[11px] font-bold tracking-[0.2em] uppercase mt-1.5">
                Totalentreprenör
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {primaryLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-bold tracking-wide transition-colors duration-200 relative ${
                    active
                      ? "text-gb-forest"
                      : "text-gb-ink hover:text-gb-forest"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gb-forest" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={kontaktLink.href}
              className={`hidden md:inline-flex text-sm font-bold tracking-wide transition-colors duration-200 relative ${
                pathname === kontaktLink.href
                  ? "text-gb-forest"
                  : "text-gb-ink hover:text-gb-forest"
              }`}
            >
              {kontaktLink.label}
              {pathname === kontaktLink.href && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gb-forest" />
              )}
            </Link>
            <a
              href="tel:+46701234567"
              className="hidden sm:flex items-center gap-2 bg-gb-forest hover:bg-gb-forest-hover text-white text-sm font-bold px-5 py-2.5 transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2.5} />
              Ring oss
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-gb-ink p-1"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Green accent bar */}
        <div className="h-0.5 bg-gb-forest" />
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 md:hidden">
          <nav className="flex flex-col gap-2">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-3xl font-extrabold tracking-tight py-4 border-b border-gb-line transition-colors ${
                  pathname === l.href ? "text-gb-forest" : "text-gb-ink hover:text-gb-forest"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+46701234567"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 self-start"
          >
            <Phone size={18} strokeWidth={2.5} />
            Ring oss direkt
          </a>
        </div>
      )}
    </>
  );
}
