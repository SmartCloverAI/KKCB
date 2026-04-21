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
  title: "Kids Kicking Cancer with Budo Romania",
  description:
    "Bilingual public website for the Romanian chapter of Kids Kicking Cancer with Budo."
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
