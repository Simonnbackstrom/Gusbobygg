import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Faq, { faqs } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vanliga frågor om att bygga ladugård",
  description:
    "Svar på det bönder brukar fråga Gusbo Bygg först. Om pris, tidplan, bygglov, mark, finansiering och totalentreprenad för djurstallar och lantbruksbyggnader.",
  alternates: { canonical: "/vanliga-fragor" },
  openGraph: {
    title: "Vanliga frågor om att bygga ladugård | Gusbo Bygg",
    description:
      "Svar på det bönder brukar fråga oss först: pris, tidplan, bygglov, mark, finansiering och totalentreprenad.",
    url: "/vanliga-fragor",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Vanliga frågor", path: "/vanliga-fragor" },
]);

export default function VanligaFragorPage() {
  return (
    <main>
      <script {...jsonLdProps(breadcrumbs)} />
      <Nav />
      <PageHeader
        eyebrow="Vanliga frågor"
        title={
          <>
            Det bönder brukar
            <br />
            fråga oss först.
          </>
        }
        lead="Hittar du inte svaret? Ring eller mejla. Vi återkommer inom ett par dagar."
      />
      <Faq />
      <Reveal>
        <CtaBand heading="Något vi inte svarade på?" />
      </Reveal>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
