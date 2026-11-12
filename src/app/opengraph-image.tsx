import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gusbo Bygg — Vi bygger framtidens jordbruk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-dark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#24402F",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={logoSrc}
          width={220}
          height={220}
          style={{
            width: 220,
            height: 220,
            borderRadius: 9999,
            backgroundColor: "#ffffff",
            objectFit: "contain",
            marginBottom: 56,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          GUSBO BYGG
        </div>
        <div
          style={{
            display: "flex",
            width: 96,
            height: 4,
            backgroundColor: "#ffffff",
            opacity: 0.6,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
          }}
        >
          Vi bygger framtidens jordbruk.
        </div>
      </div>
    ),
    { ...size },
  );
}
