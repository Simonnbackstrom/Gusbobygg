import Image from "next/image";

const projects = [
  { label: "Projekt 01", img: "/images/flygfoto/01.jpg" },
  { label: "Projekt 02", img: "/images/flygfoto/hero.jpg" },
  { label: "Projekt 03", img: "/images/flygfoto/03.jpg" },
  { label: "Projekt 04", img: "/images/flygfoto/06.jpg" },
];

export default function Projects() {
  return (
    <section id="projekt" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#24402F] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Referensprojekt — kommer snart
            </p>
            <h2 className="text-[#121212] text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Referensprojekt
            </h2>
          </div>
          <p className="text-[#53584F] max-w-xs text-sm leading-relaxed">
            Vi lägger upp referenser här efterhand. Ring så berättar vi mer om
            pågående och avslutade projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.label}
              className="group relative overflow-hidden bg-[#121212] aspect-[4/3]"
            >
              <Image
                src={p.img}
                alt={p.label}
                fill
                className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/85 via-[#121212]/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                <span className="text-white/60 text-xs font-bold tracking-[0.18em] uppercase">
                  {p.label}
                </span>
                <span className="text-white/40 text-xs mt-1">—</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
