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
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
