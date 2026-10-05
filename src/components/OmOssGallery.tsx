import Image from "next/image";

const images = [
  { src: "/images/om-oss/bild-29.jpg", alt: "Betongarbete på byggplats", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/om-oss/bild-4.jpg", alt: "Hjullastare och maskinpark", span: "" },
  { src: "/images/om-oss/bild-51.jpg", alt: "Byggare vid betongbil", span: "" },
  { src: "/images/om-oss/bild-115.jpg", alt: "Kor på gård med utsikt över skog och fält", span: "md:col-span-2" },
  { src: "/images/om-oss/bild-38.jpg", alt: "Betong hälls över armering", span: "" },
  { src: "/images/om-oss/bild-22.jpg", alt: "Händer som sätter armering i betongplatta", span: "" },
  { src: "/images/om-oss/bild-41.jpg", alt: "Vibrering av färsk betong", span: "" },
  { src: "/images/om-oss/bild-84.jpg", alt: "Byggare mäter nivå med laser", span: "" },
  { src: "/images/om-oss/bild-10.jpg", alt: "Rengöring av betongbil", span: "" },
];

export default function OmOssGallery() {
  return (
    <section className="bg-gb-cream py-24 md:py-32 border-t border-gb-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span aria-hidden className="block h-[2px] w-16 bg-gb-forest mx-auto mb-8" />
          <h2 className="text-gb-ink text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Från verkligheten.
          </h2>
          <p className="text-gb-slate text-lg leading-relaxed">
            Bilder från våra byggarbetsplatser och gårdarna vi bygger åt.
            Hantverk, maskiner och djur. Det är det här vi lever för.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
