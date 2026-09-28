const stats = [
  { value: "20+", label: "År i branschen" },
  { value: "100+", label: "Projekt genomförda" },
];

export default function Statement() {
  return (
    <section className="bg-gb-cream py-16 md:py-20 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-gb-ink text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.05]">
            Vi bygger stall
            <br />
            som funkar för{" "}
            <span className="text-gb-forest underline decoration-gb-forest/30 decoration-[3px] underline-offset-[8px]">
              bonden
            </span>
            .
          </h2>

          <p className="text-gb-ink/75 text-base md:text-lg leading-[1.6] mt-6 max-w-2xl mx-auto">
            Vi är själva uppvuxna på gård. Det gör att vi förstår hur ditt
            arbete ser ut innan vi ritar första linjen. Ett stall ska funka
            på riktigt, inte bara på pappret.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-8 bg-gb-forest" />
            <p className="text-gb-forest text-xs md:text-sm font-bold tracking-wide">
              Edvin Säll, Gusbo Bygg
            </p>
            <span aria-hidden className="h-px w-8 bg-gb-forest" />
          </div>
        </div>

        <div className="mt-12 md:mt-14 border-t-2 border-gb-forest pt-6 grid grid-cols-2 gap-6 md:gap-16 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center gap-1 md:gap-2"
            >
              <p className="text-gb-forest text-3xl md:text-4xl font-extrabold tracking-tight leading-none">
                {s.value}
              </p>
              <p className="text-gb-ink text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
