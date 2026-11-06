import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gusbo Bygg",
    short_name: "Gusbo Bygg",
    description:
      "Totalentreprenör inom djurstallar och lantbruksbyggnader med rötter i jordbruket.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#24402F",
    lang: "sv-SE",
    categories: ["business", "productivity"],
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32 16x16",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "692x760",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
