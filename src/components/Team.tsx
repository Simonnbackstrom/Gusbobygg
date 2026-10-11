import Image from "next/image";

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center max-w-4xl mx-auto">
          <div className="md:col-span-5 relative aspect-[3/4] overflow-hidden group">
            <Image
              src="/images/team/edvin.jpg"
              alt="Edvin Säll"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute -bottom-1 -left-1 right-6 h-1 bg-gb-forest" />
          </div>

          <div className="md:col-span-7">
            <h3 className="text-gb-ink text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-1">
              Edvin Säll
            </h3>
            <p className="text-gb-forest text-xs font-bold tracking-[0.15em] uppercase mb-5">
              Grundare & projektledare
            </p>
            <p className="text-gb-slate text-lg leading-[1.7]">
              Uppvuxen på gård och med hantverket i blodet. Edvin driver varje
              bygge från första samtalet till överlämningen. En kontakt hela
              vägen, någon som vet var projektet står och som förstår hur en
              gård faktiskt fungerar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
