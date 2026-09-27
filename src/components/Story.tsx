import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type StoryProps = {
  cta?: { label: string; href: string };
};

export default function Story({ cta }: StoryProps = {}) {
  return (
    <section className="bg-gb-ink py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 relative aspect-[3/4] md:aspect-[3/4]">
            <Image
              src="/images/team/edvin.jpg"
              alt="Edvin Säll, Gusbo Bygg"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute -bottom-1 -left-1 right-6 h-1 bg-gb-forest" />
          </div>

          <div className="md:col-span-7">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Ett hantverk som
              <br />
              bär historia vidare.
            </h2>
            <div className="space-y-5 text-gb-body-inv text-lg leading-relaxed">
              <p>
                Emblemet på jackan kommer från gården. Det är utgångspunkten
                för allt vi gör. En identitet formad av arbete i stall,
                skiften och ladugårdar snarare än på ritbordet.
              </p>
              <p>
                När vi bygger åt en bonde vet vi hur en gård fungerar från
                insidan. Var mjölkroboten står, hur fodret hittar in, hur en
                besättning rör sig. Den kunskapen låter sig inte hyras in.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-gb-forest pl-6 text-white text-xl md:text-2xl font-semibold leading-snug italic">
              &ldquo;Trovärdiga och kompetenta i det vi håller på med. Vi bygger
              ladugårdar åt bönder och vi vet vad vi gör.&rdquo;
            </blockquote>

            {cta && (
              <Link
                href={cta.href}
                className="mt-10 inline-flex items-center gap-3 text-white font-bold text-sm tracking-wide border-b-2 border-gb-forest pb-1 hover:text-gb-mint hover:gap-4 transition-all"
              >
                {cta.label}
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
