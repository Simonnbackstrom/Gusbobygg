import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gusbo Bygg - Totalentreprenör inom djurstallar och lantbruk",
  description:
    "Vi bygger ladugårdar åt bönder och vi vet vad vi gör. Totalentreprenör inom djurstallar och lantbruksbyggnader, med rötter i jordbruket.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${montserrat.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
