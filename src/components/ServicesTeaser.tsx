import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Mjölkstallar",
    desc: "Moderna anläggningar för robotmjölkning och fodersystem.",
    img: "/images/kamera/djur-02.jpg",
    href: "/vad-vi-gor",
  },
  {
    title: "Djurstallar",
    desc: "Köttproduktion, smågrisar, hästar.",
    img: "/images/kamera/djur-01.jpg",
    href: "/vad-vi-gor",
  },
  {
    title: "Lantbruksbyggnader",
    desc: "Maskinhallar, foderlager och plansilor.",
    img: "/images/flygfoto/05.jpg",
    href: "/vad-vi-gor",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Vad vi bygger
          </h2>
          <p className="text-gb-slate text-lg leading-relaxed">
            Markarbete, betong, stomme, installation. En kontaktpunkt genom
            hela bygget. Ny ladugård, maskinhall eller ombyggnation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative aspect-[4/5] overflow-hidden bg-gb-ink"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gb-ink/95 via-gb-ink/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="text-white text-2xl font-extrabold tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-gb-mint text-sm font-bold tracking-wide group-hover:gap-3 transition-all">
                  Läs mer
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#offert"
            className="inline-flex items-center gap-3 bg-gb-forest text-white font-bold text-base px-8 py-4 hover:bg-gb-forest-hover transition-colors duration-200"
          >
            Kontakta oss
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
