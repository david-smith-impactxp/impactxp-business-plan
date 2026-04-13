import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "ImpactXP — Business Plan",
  description: "Investment proposal and growth strategy for ImpactXP.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-white font-sans text-[#011935]">{children}</body>
    </html>
  );
}
