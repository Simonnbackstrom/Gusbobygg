import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

type CtaBandProps = {
  heading?: string;
};

export default function CtaBand({
  heading = "Ska du bygga stall? Ring oss så pratar vi.",
}: CtaBandProps = {}) {
  return (
    <section className="bg-gb-cream py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-10" />

          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-10">
            {heading}
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+46701234567"
              className="inline-flex items-center justify-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              070-XXX XX XX
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-gb-forest text-gb-forest font-bold text-base px-8 py-4 hover:bg-gb-forest hover:text-white transition-colors duration-200"
            >
              Skicka meddelande
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
