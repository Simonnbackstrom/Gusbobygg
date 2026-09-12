const stats = [
  { value: "40+", label: "Projekt genomförda" },
  { value: "20 år", label: "I branschen" },
  { value: "1", label: "Kontaktpunkt för hela bygget" },
  { value: "100%", label: "Helhetsansvar" },
];

export default function Stats() {
  return (
    <section className="bg-[#24402F] py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0">
              <p className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-1">
                {s.value}
              </p>
              <p className="text-[#8ab49a] text-xs font-semibold tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
