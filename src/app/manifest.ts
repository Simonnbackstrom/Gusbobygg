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
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
