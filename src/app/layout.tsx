import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visit Pandeglang | The Sunset of Java - Official Regional Tourism Platform",
  description: "Official discovery and tourism platform of Pandeglang Regency, Banten. Explore Ujung Kulon National Park, Tanjung Lesung coastlines, Mount Karang highlands, and authentic Banten heritage.",
  keywords: [
    "Pandeglang",
    "Ujung Kulon",
    "Tanjung Lesung",
    "The Sunset of Java",
    "Banten Tourism",
    "Java Rhino Sanctuary",
    "Mount Karang",
    "Rampak Beduk",
  ],
  authors: [{ name: "Bintang Al Akbar Januari" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Visit Pandeglang | The Sunset of Java",
    description: "From prehistoric rhino sanctuaries to turquoise coastlines and cultural heritage — discover Pandeglang at the edge of Java.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#E76F51]/20 selection:text-[#0F382C]">
        {children}
      </body>
    </html>
  );
}
