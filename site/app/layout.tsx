import type { Metadata } from "next";
import { Fraunces, Libre_Franklin, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valuing Our Worth | Empowering Women to Rise",
  description:
    "Empowering women to reclaim their financial confidence, rediscover their voice, and step boldly into purpose and prosperity.",
  robots: "index, follow",
  openGraph: {
    title: "Valuing Our Worth | Empowering Women to Rise",
    description:
      "Empowering women to reclaim their financial confidence, rediscover their voice, and step boldly into purpose and prosperity.",
    url: "https://valuingourworth.com",
    siteName: "Valuing Our Worth",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Valuing Our Worth | Empowering Women to Rise",
    description:
      "Empowering women to reclaim their financial confidence, rediscover their voice, and step boldly into purpose and prosperity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${libreFranklin.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
