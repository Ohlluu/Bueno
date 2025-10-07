import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Grits & Eggs Podcast - Raw, Unfiltered, Real | Deante' Kyle",
  description: "The raw and unfiltered takes on pop culture, politics, and all things entertainment. Hosted by Deante' Kyle. BIA Awards 2025 Nominee. Watch on YouTube, Listen on Spotify & Apple Podcasts.",
  keywords: "grits and eggs podcast, deante kyle, black podcast, pop culture podcast, politics podcast, entertainment podcast, bia awards, raw unfiltered podcast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
