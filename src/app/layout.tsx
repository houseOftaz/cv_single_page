import type { Metadata } from "next";
import { Roboto, Courier_Prime } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "DAVOZ Anastasia CV",
  description: "My beautiful neumorphism single page cv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${courierPrime.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
