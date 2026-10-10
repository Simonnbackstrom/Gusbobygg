import Image from "next/image";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  image?: string;
  imageAlt?: string;
  cta?: ReactNode;
  height?: "compact" | "full";
  priority?: boolean;
};

export default function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  cta,
  height,
  priority = false,
}: PageHeaderProps) {
  const hasImage = Boolean(image);
  const resolvedHeight = height ?? (hasImage ? "full" : "compact");
  const isFull = resolvedHeight === "full";

  return (
    <section
      className={`relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20 ${
        hasImage
          ? "bg-gb-ink flex items-end"
          : "bg-white border-b border-gb-line"
      } ${isFull ? "min-h-[380px] md:min-h-[52vh]" : ""}`}
    >
      {hasImage && (
        <>
          <Image
            src={image!}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gb-ink/85 via-gb-ink/50 to-gb-ink/25" />
          <div className="absolute inset-0 bg-gb-forest/20 mix-blend-multiply" />
        </>
      )}

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <span
          aria-hidden
          className={`gb-hero-rise block h-[2px] w-16 mb-8 ${
            hasImage ? "bg-white" : "bg-gb-forest"
          }`}
          style={{ animationDelay: "60ms" }}
        />

        {eyebrow && (
          <p
            className={`gb-hero-rise text-xs font-bold tracking-[0.25em] uppercase mb-5 ${
              hasImage ? "text-white/90" : "text-gb-forest"
            }`}
            style={{ animationDelay: "160ms" }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={`gb-hero-rise text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance ${
            hasImage ? "text-white" : "text-gb-ink"
          }`}
          style={{ animationDelay: "240ms" }}
        >
          {title}
        </h1>

        {lead && (
          <p
            className={`gb-hero-rise mt-6 max-w-2xl text-lg md:text-xl leading-relaxed ${
              hasImage ? "text-white/85" : "text-gb-slate"
            }`}
            style={{ animationDelay: "360ms" }}
          >
            {lead}
          </p>
        )}

        {cta && (
          <div
            className="gb-hero-fade mt-10"
            style={{ animationDelay: "560ms" }}
          >
            {cta}
          </div>
        )}
      </div>
    </section>
  );
}
