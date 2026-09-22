import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-[#121212] py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 relative aspect-[3/4] md:aspect-[3/4]">
            <Image
              src="/images/kamera/portratt.jpg"
              alt="Byggarbetare med Gusbo Byggs emblem"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute -bottom-1 -left-1 right-6 h-1 bg-[#24402F]" />
          </div>

          <div className="md:col-span-7">
            <p className="text-[#8ab49a] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Rötter i bondgården
            </p>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Ett hantverk som
              <br />
              bär historia vidare.
            </h2>
            <div className="space-y-5 text-[#c8c8c8] text-lg leading-relaxed">
              <p>
                Emblemet på jackan kommer från gården. Det är utgångspunkten
                för allt vi gör &mdash; en identitet formad av arbete i stall,
                skiften och ladugårdar snarare än på ritbordet.
              </p>
              <p>
                När vi bygger åt en bonde vet vi hur en gård fungerar från
                insidan. Var mjölkroboten står, hur fodret hittar in, hur en
                besättning rör sig. Den kunskapen låter sig inte hyras in.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-[#24402F] pl-6 text-white text-xl md:text-2xl font-semibold leading-snug italic">
              &ldquo;Trovärdiga och kompetenta i det vi håller på med. Vi bygger
              ladugårdar åt bönder och vi vet vad vi gör.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
