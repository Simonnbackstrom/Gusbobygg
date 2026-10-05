import Image from "next/image";

const team = [
  {
    id: "platschef",
    name: "Namn Efternamn",
    role: "Platschef",
    bio: "Håller ihop leverantörerna på plats. Ser till att tidplanen håller.",
    img: "/images/team/team.jpg",
    position: "15% center",
  },
  {
    id: "edvin",
    name: "Edvin Säll",
    role: "Grundare & projektledare",
    bio: "Uppvuxen på gård. Driver bygget från första samtal till överlämning.",
    img: "/images/team/edvin.jpg",
    position: "center",
  },
  {
    id: "byggledare",
    name: "Namn Efternamn",
    role: "Byggledare",
    bio: "Erfaren byggare med rötter i jordbruket. Kvalitetssäkrar varje moment.",
    img: "/images/team/team.jpg",
    position: "85% center",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <h2 className="text-gb-ink text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Laget bakom bygget.
          </h2>
          <p className="text-gb-slate text-lg leading-relaxed">
            Ett litet lag med rötter i jordbruket. Vi kan hantverket och vi
            kan gården. Det märks från första samtalet till sista slaget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {team.map((m) => (
            <div key={m.id} className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: m.position }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute -bottom-1 -left-1 right-6 h-1 bg-gb-forest" />
              </div>
              <h3 className="text-gb-ink text-xl md:text-2xl font-bold tracking-tight leading-tight mb-1">
                {m.name}
              </h3>
              <p className="text-gb-forest text-xs font-bold tracking-[0.15em] uppercase mb-3">
                {m.role}
              </p>
              <p className="text-gb-slate text-base leading-[1.6]">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
