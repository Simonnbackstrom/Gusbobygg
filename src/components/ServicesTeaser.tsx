import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Mjölkstallar",
    desc: "Moderna anläggningar för robotmjölkning och fodersystem.",
    img: "/images/kamera/djur-02.jpg",
  },
  {
    title: "Djurstallar",
    desc: "Köttproduktion, smågrisar, hästar.",
    img: "/images/kamera/djur-01.jpg",
  },
  {
    title: "Lantbruksbyggnader",
    desc: "Maskinhallar, foderlager och plansilor.",
    img: "/images/flygfoto/05.jpg",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-20">
          <div>
            <p className="text-[#24402F] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Vad vi gör
            </p>
            <h2 className="text-[#121212] text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Vad vi bygger
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#53584F] text-lg leading-relaxed">
              Markarbete, betong, stomme, installation. En kontaktpunkt genom
              bygget — ny ladugård, maskinhall eller ombyggnation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative aspect-[4/5] overflow-hidden bg-[#121212]"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-[#121212]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="text-white text-2xl font-extrabold tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/vad-vi-gor"
            className="inline-flex items-center gap-3 text-[#24402F] font-bold text-sm tracking-wide border-b-2 border-[#24402F] pb-1 hover:gap-4 transition-all"
          >
            Vad vi gör
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
