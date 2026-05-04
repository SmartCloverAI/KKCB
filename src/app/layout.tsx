import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Kids Kicking Cancer with Budo",
  description:
    "Bilingual public website for the Bucharest chapter of Kids Kicking Cancer with Budo.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={`${sora.variable} ${newsreader.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
