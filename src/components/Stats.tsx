const stats = [
  { value: "—", label: "Projekt genomförda" },
  { value: "—", label: "År i branschen" },
];

export default function Stats() {
  return (
    <section className="bg-[#24402F] py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Nyckeltal — uppdateras
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 divide-y-2 sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="pt-8 sm:pt-0 sm:px-8 first:pt-0 first:sm:pl-0 last:sm:pr-0"
            >
              <p className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-1">
                {s.value}
              </p>
              <p className="text-white/60 text-xs font-semibold tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
