import Image from "next/image";

export default function Team() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-gb-ink text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Laget bakom bygget.
          </h2>
          <p className="text-gb-slate text-lg leading-relaxed">
            Ett litet lag med rötter i jordbruket. Vi kan hantverket och vi
            kan gården. Det märks från första samtalet till sista slaget.
          </p>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/team/team.jpg"
            alt="Laget bakom Gusbo Bygg"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
