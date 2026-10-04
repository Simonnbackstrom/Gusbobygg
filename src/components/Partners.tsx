import Image from "next/image";

const partners: { name: string; src?: string }[] = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

export default function Partners() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-gb-ink text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Vi arbetar med de bästa i branschen.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-gb-line">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white aspect-[3/2] flex items-center justify-center p-6 hover:bg-gb-cream transition-colors"
            >
              {p.src ? (
                <Image
                  src={p.src}
                  alt={p.name}
                  width={140}
                  height={60}
                  className="max-h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-gb-slate text-xs font-bold tracking-[0.15em] uppercase">
                  {p.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
