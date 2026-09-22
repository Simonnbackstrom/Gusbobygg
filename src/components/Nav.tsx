"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Vad vi gör", href: "/vad-vi-gor" },
  { label: "Varför Gusbo", href: "/varfor-gusbo" },
  { label: "Projekt", href: "/projekt" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-[#121212]/97 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-white font-bold text-xl tracking-tight">
              GUSBO BYGG
            </span>
            <span className="hidden sm:inline text-[#53584F] text-xs font-semibold tracking-[0.15em] uppercase mt-0.5">
              Totalentreprenör
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+46701234567"
              className="hidden sm:flex items-center gap-2 bg-[#24402F] hover:bg-[#1a3022] text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2.5} />
              Ring oss
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-white p-1"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#121212] flex flex-col pt-24 px-8 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-3xl font-extrabold tracking-tight py-4 border-b border-white/10 transition-colors ${
                  pathname === l.href ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+46701234567"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center gap-3 bg-[#24402F] text-white font-bold text-base px-8 py-4 self-start"
          >
            <Phone size={18} strokeWidth={2.5} />
            Ring oss direkt
          </a>
        </div>
      )}
    </>
  );
}
