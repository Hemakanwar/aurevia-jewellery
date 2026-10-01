import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurevia | Timeless Jewellery, Modern Elegance",
  description: "Discover timeless Indian jewellery at Aurevia, featuring elegant Kundan, Polki, Gold, Diamond, Bridal and contemporary jewellery collections.",
  openGraph: {
    title: "Aurevia | Timeless Jewellery, Modern Elegance",
    description: "Discover timeless Indian jewellery at Aurevia, featuring elegant Kundan, Polki, Gold, Diamond, Bridal and contemporary jewellery collections.",
    siteName: "AUREVIA",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
