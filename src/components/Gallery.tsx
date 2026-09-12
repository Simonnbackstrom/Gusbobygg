import Image from "next/image";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Stommontage" },
  { src: "/images/gallery-2.jpg", alt: "Betongarbete" },
  { src: "/images/gallery-3.jpg", alt: "Färdigt stall" },
  { src: "/images/gallery-4.jpg", alt: "Installation" },
  { src: "/images/gallery-5.jpg", alt: "Takläggning" },
  { src: "/images/gallery-6.jpg", alt: "Inflyttningsklart" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial header */}
        <div className="flex items-end justify-between mb-10">
          <p className="text-[#24402F] text-xs font-bold tracking-[0.2em] uppercase">
            Från bygget
          </p>
          <p className="text-[#9ca39d] text-xs">Provisoriska bilder</p>
        </div>

        {/* 3-col grid, first image tall */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[60vh] min-h-[400px]">
          {/* Large left image */}
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="33vw"
            />
          </div>

          {/* Top right: two images side by side */}
          <div className="relative col-span-1 overflow-hidden group">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="33vw"
            />
          </div>
          <div className="relative col-span-1 overflow-hidden group">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="33vw"
            />
          </div>

          {/* Bottom right: one wide image */}
          <div className="relative col-span-2 overflow-hidden group">
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="66vw"
            />
          </div>
        </div>

        {/* Bottom row: two equal images */}
        <div className="grid grid-cols-2 gap-2 mt-2 h-[30vh] min-h-[180px]">
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
