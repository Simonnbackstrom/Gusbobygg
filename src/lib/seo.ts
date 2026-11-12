export const SITE_URL = "https://gusbobygg.com";
export const SITE_NAME = "Gusbo Bygg";
export const SITE_LOCALE = "sv-SE";

const GEO = { latitude: 61.2311, longitude: 16.5597 };
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Gusbo+6613+823+91+Kilafors";

const logoNode = {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  url: `${SITE_URL}/icon.png`,
  contentUrl: `${SITE_URL}/icon.png`,
  caption: SITE_NAME,
  width: 512,
  height: 512,
};

const organizationNode = {
  "@type": ["GeneralContractor", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Aktiebolaget Gusbo Bygg",
  alternateName: SITE_NAME,
  legalName: "Aktiebolaget Gusbo Bygg",
  url: SITE_URL,
  logo: logoNode,
  image: { "@id": `${SITE_URL}/#logo` },
  description:
    "Totalentreprenör inom djurstallar och lantbruksbyggnader med rötter i jordbruket.",
  slogan: "Vi bygger framtidens jordbruk",
  telephone: "+46703622532",
  email: "info@gusbobygg.se",
  vatID: "SE559518136201",
  taxID: "559518-1362",
  priceRange: "$$$$",
  currenciesAccepted: "SEK",
  paymentAccepted: "Faktura",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gusbo 6613",
    postalCode: "823 91",
    addressLocality: "Kilafors",
    addressRegion: "Gävleborgs län",
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", ...GEO },
  hasMap: MAPS_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Hälsingland" },
    { "@type": "AdministrativeArea", name: "Gästrikland" },
    { "@type": "AdministrativeArea", name: "Gävleborgs län" },
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", ...GEO },
      geoRadius: 200000,
    },
  ],
  knowsAbout: [
    "Mjölkladugårdar",
    "Djurstallar",
    "Ungdjurstall",
    "Maskinhallar",
    "Lantbruksbyggnader",
    "Totalentreprenad lantbruk",
    "Om- och tillbyggnad lantbruk",
  ],
  sameAs: ["https://www.linkedin.com/in/edvin-säll-41a42a43b/"],
};

const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: SITE_LOCALE,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode],
};

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Hem", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
};

export function serviceCatalogJsonLd(services: ServiceInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/vad-vi-gor#service`,
    serviceType: "Totalentreprenad lantbruksbyggnader",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hälsingland" },
      { "@type": "AdministrativeArea", name: "Gästrikland" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Byggtjänster för lantbruk",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          provider: { "@id": `${SITE_URL}/#organization` },
          url: `${SITE_URL}${s.path}`,
        },
      })),
    },
  };
}

type ProjectInput = {
  slug: string;
  name: string;
  description: string;
  image: string;
  locality: string;
  year: string;
};

export function projectItemListJsonLd(
  pagePath: string,
  projects: ProjectInput[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}${pagePath}#projects`,
    name: "Referensprojekt",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${pagePath}#${p.slug}`,
      item: {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${pagePath}#${p.slug}`,
        name: p.name,
        description: p.description,
        image: `${SITE_URL}${p.image}`,
        temporalCoverage: p.year,
        contentLocation: {
          "@type": "Place",
          name: p.locality,
          address: {
            "@type": "PostalAddress",
            addressLocality: p.locality,
            addressCountry: "SE",
          },
        },
        creator: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  };
}

export function jsonLdProps(data: object | object[]) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
