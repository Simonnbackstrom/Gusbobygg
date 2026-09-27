const included = [
  "Markarbete",
  "Betong & grund",
  "Stomme",
  "Tak & fasad",
  "VVS",
  "El",
  "Snickeri",
  "Djur- & fodersystem",
  "Myndighetsprocess",
];

export default function Included() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-7">
            <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
            <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Ingår i totalentreprenaden.
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-gb-slate text-lg leading-relaxed">
              Ett bygge sköts av flera yrkesgrupper. Vi håller ihop dem så
              du bara har en kontakt att ringa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-gb-line">
          {included.map((item, i) => (
            <div
              key={item}
              className="border-b border-gb-line py-6 md:py-7 px-2 flex items-center gap-6 group hover:bg-gb-cream -mx-2 md:mx-0 md:px-6 transition-colors"
            >
              <span className="text-gb-forest text-xs font-bold tracking-[0.18em] w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-gb-ink text-base md:text-lg font-semibold tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
