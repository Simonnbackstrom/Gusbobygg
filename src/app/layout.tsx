import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gusbo Bygg – Totalentreprenör inom djurstallar och lantbruk",
  description:
    "Vi bygger ladugårdar åt bönder och vi vet vad vi gör. Totalentreprenör inom djurstallar och lantbruksbyggnader, med rötter i jordbruket.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
