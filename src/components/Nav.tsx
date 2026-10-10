"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const primaryLinks = [
  { label: "Vad vi bygger", href: "/vad-vi-gor" },
  { label: "Om oss", href: "/varfor-gusbo" },
  { label: "Projekt", href: "/projekt" },
];
const kontaktLink = { label: "Kontakt", href: "/kontakt" };
const mobileLinks = [...primaryLinks, kontaktLink];

const SCROLL_THRESHOLD = 60;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translucent = scrolled && !open;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          translucent
            ? "bg-white/80 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Gusbo Bygg - startsida"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo-liggande.png"
              alt="Aktiebolaget Gusbo Bygg"
              width={1550}
              height={384}
              priority
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {primaryLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-bold tracking-wide transition-colors duration-200 relative ${
                    active ? "text-gb-forest" : "text-gb-ink hover:text-gb-forest"
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
              href="tel:+46703622532"
              aria-label="Ring oss"
              className="flex items-center gap-2 text-sm font-bold px-3 py-2.5 sm:px-5 bg-gb-forest hover:bg-gb-forest-hover text-white transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2.5} />
              <span className="hidden sm:inline">Ring oss</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-1 text-gb-ink"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      </header>

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
            href="tel:+46703622532"
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
