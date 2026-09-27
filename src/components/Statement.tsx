const stats = [
  { value: "20+", label: "År i branschen" },
  { value: "100+", label: "Projekt genomförda" },
];

export default function Statement() {
  return (
    <section className="bg-gb-cream py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-gb-ink text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Vi bygger stall
            <br />
            som funkar för{" "}
            <span className="text-gb-forest underline decoration-gb-forest/30 decoration-[3px] underline-offset-[8px]">
              bonden
            </span>
            .
          </h2>

          <p className="text-gb-ink/75 text-lg md:text-xl leading-[1.7] mt-10 max-w-2xl mx-auto">
            Vi är själva uppvuxna på gård. Det gör att vi förstår hur ditt
            arbete ser ut innan vi ritar första linjen. Ett stall ska funka
            på riktigt, inte bara på pappret.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gb-forest" />
            <p className="text-gb-forest text-sm md:text-base font-bold tracking-wide">
              Edvin Säll, Gusbo Bygg
            </p>
            <span aria-hidden className="h-px w-10 bg-gb-forest" />
          </div>
        </div>

        <div className="mt-20 md:mt-24 border-t-2 border-gb-forest pt-10 grid grid-cols-2 gap-6 md:gap-16 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center gap-2 md:gap-3"
            >
              <p className="text-gb-forest text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
                {s.value}
              </p>
              <p className="text-gb-ink text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
