import type { MetadataRoute } from "next";

const SITE = "https://gusbobygg.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE}/vad-vi-gor`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/projekt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/varfor-gusbo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/vanliga-fragor`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE}/integritetspolicy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
