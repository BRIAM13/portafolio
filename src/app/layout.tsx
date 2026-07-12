import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Cursor from "@/components/cursor";
import Grain from "@/components/grain";
import Nav from "@/components/nav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Briam Ronceros — Portafolio",
  description:
    "Portafolio de Briam Luis Ronceros Achulli, estudiante de Ingeniería de Sistemas. Proyectos de software multiplataforma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-graphite text-ink">
        <SmoothScroll>
          <Grain />
          <Cursor />
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
