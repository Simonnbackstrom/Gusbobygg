import Image from "next/image";

const photos = [
  { src: "/images/kamera/bygg-01.jpg", alt: "Betongarbete på grundläggning" },
  { src: "/images/kamera/portratt.jpg", alt: "Byggarbetare med Gusbo-emblemet" },
  { src: "/images/flygfoto/03.jpg", alt: "Flygfoto över gård vid sjö" },
  { src: "/images/kamera/bygg-06.jpg", alt: "Byggplats med hjullastare" },
  { src: "/images/kamera/djur-01.jpg", alt: "Mjölkkor" },
  { src: "/images/kamera/bygg-03.jpg", alt: "Armeringsjärn och betong" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14 md:mb-16">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mb-8" />
          <h2 className="text-gb-ink text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
            Verkligheten på gården.
          </h2>
        </div>

        {/* Editorial 3-col grid, first image tall */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[60vh] min-h-[400px]">
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative col-span-1 overflow-hidden group">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative col-span-1 overflow-hidden group">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative col-span-2 overflow-hidden group">
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 h-[30vh] min-h-[220px]">
          {photos.slice(4).map((p) => (
            <div key={p.src} className="relative overflow-hidden group">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
