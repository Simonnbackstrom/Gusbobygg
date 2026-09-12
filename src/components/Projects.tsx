import Image from "next/image";

const projects = [
  {
    type: "Mjölkstall",
    location: "Dalarna",
    desc: "Totalentreprenad för 200 kor — markarbete, betong, stomme, VVS och el.",
    year: "2024",
    img: "/images/project-1.jpg",
    size: "large",
  },
  {
    type: "Köttproduktion",
    location: "Västra Götaland",
    desc: "Ombyggnation och utbyggnad. 350 djurplatser.",
    year: "2024",
    img: "/images/project-2.jpg",
    size: "small",
  },
  {
    type: "Mjölkstall",
    location: "Skåne",
    desc: "Nybyggnation med robotmjölkning. 160 kor.",
    year: "2023",
    img: "/images/project-3.jpg",
    size: "small",
  },
  {
    type: "Maskinpark",
    location: "Uppland",
    desc: "Maskinhall och foderlager. 800 hektar spannmål.",
    year: "2023",
    img: "/images/project-4.jpg",
    size: "large",
  },
];

export default function Projects() {
  return (
    <section id="projekt" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#24402F] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Projekt
            </p>
            <h2 className="text-[#121212] text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Referensprojekt
            </h2>
          </div>
          <p className="text-[#53584F] max-w-xs text-sm leading-relaxed">
            Hör av dig om du vill veta mer om ett projekt eller besöka en anläggning.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-[#121212] ${
                p.size === "large" ? "md:row-span-1 aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.img}
                alt={`${p.type}, ${p.location}`}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="text-[#8ab49a] text-xs font-bold tracking-[0.18em] uppercase">
                    {p.type}
                  </span>
                  <span className="text-white/40 text-xs font-medium">{p.year}</span>
                </div>
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                    {p.location}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
