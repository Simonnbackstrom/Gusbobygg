import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så här hanterar Aktiebolaget Gusbo Bygg personuppgifter som du lämnar via kontaktformulär, e-post eller telefon.",
  alternates: { canonical: "/integritetspolicy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "Personuppgiftsansvarig",
    body: [
      "Aktiebolaget Gusbo Bygg (org.nr 559518-1362), Gusbo 6613, 823 91 Kilafors, är personuppgiftsansvarig för de personuppgifter vi behandlar via denna webbplats.",
      "Har du frågor om vår behandling når du oss på info@gusbobygg.se eller 070-362 25 32.",
    ],
  },
  {
    h: "Vilka uppgifter vi samlar in",
    body: [
      "När du kontaktar oss via formulär på webbplatsen, e-post eller telefon kan vi komma att behandla följande uppgifter: namn, telefonnummer, e-postadress, gårdens namn eller plats, samt det meddelande och den information om ditt bygge du själv väljer att lämna.",
      "Vi samlar inte in uppgifter via spårande cookies eller tredjeparts­analysverktyg. Endast tekniskt nödvändiga cookies från vår hostingleverantör används för att webbplatsen ska fungera.",
    ],
  },
  {
    h: "Varför vi behandlar uppgifterna",
    body: [
      "Vi använder uppgifterna för att återkomma på din förfrågan, lämna offert, planera platsbesök och genomföra uppdrag du beställer av oss. Om vi tecknar avtal behandlar vi uppgifterna för att fullgöra avtalet och efterleva lagkrav (till exempel bokförings- och skattelagstiftning).",
    ],
  },
  {
    h: "Rättslig grund",
    body: [
      "Behandlingen sker med stöd av vårt berättigade intresse av att besvara din förfrågan, eller för att fullgöra ett avtal med dig. När det är nödvändigt för att följa lag (till exempel bokföringslagen) är rättslig grund rättslig förpliktelse.",
    ],
  },
  {
    h: "Hur länge vi sparar uppgifterna",
    body: [
      "Förfrågningar som inte leder till avtal gallras senast 24 månader efter sista kontakt. Uppgifter kopplade till ett kundavtal sparas så länge avtalet löper och därefter så länge det krävs enligt gällande lag — normalt sju år enligt bokföringslagen.",
    ],
  },
  {
    h: "Vem får ta del av uppgifterna",
    body: [
      "Dina uppgifter behandlas av oss som jobbar på Gusbo Bygg. Vi delar bara uppgifter med underleverantörer och samarbetspartners när det är nödvändigt för att utföra ett uppdrag åt dig (till exempel arkitekter, konstruktörer eller leverantörer av mark-, VVS- och elinstallationer).",
      "Vi säljer eller lämnar aldrig ut uppgifter till tredje part i marknadsförings­syfte.",
    ],
  },
  {
    h: "Dina rättigheter",
    body: [
      "Du har rätt att få veta vilka uppgifter vi behandlar om dig, att få felaktiga uppgifter rättade, och att under vissa förutsättningar få uppgifter raderade eller behandlingen begränsad. Du har också rätt till dataportabilitet och att invända mot behandling som sker med stöd av berättigat intresse.",
      "Begäran skickar du till info@gusbobygg.se. Du har alltid rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att vi behandlar dina personuppgifter felaktigt.",
    ],
  },
  {
    h: "Ändringar i policyn",
    body: [
      "Vi kan komma att uppdatera den här policyn. Senaste versionen hittar du alltid på denna sida.",
    ],
  },
];

export default function IntegritetspolicyPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Integritetspolicy"
        title={
          <>
            Så hanterar vi dina
            <br />
            personuppgifter.
          </>
        }
        lead="En rak genomgång av vilka uppgifter vi tar emot, varför, och vilka rättigheter du har."
      />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="space-y-14 md:space-y-16">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-gb-ink text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
                  {s.h}
                </h2>
                <div className="space-y-4 text-gb-slate text-base md:text-lg leading-[1.7]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-gb-muted text-xs">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE", { year: "numeric", month: "long" })}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
