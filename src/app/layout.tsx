import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bean and Brew Café | Cozy Coffee & Fresh Bites",
  description:
    "Bean and Brew Café – your cozy neighborhood spot for handcrafted coffee, delicious food, and warm vibes. Relax, sip, and savor unforgettable café moments.",
  keywords: [
    "Bean and Brew Café",
    "coffee shop",
    "cafe near me",
    "specialty coffee",
    "fresh food",
    "cozy cafe",
    "best coffee",
  ],
  authors: [{ name: "Bean and Brew Café" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
