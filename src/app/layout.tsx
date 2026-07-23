import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";

const alegreyaSansHeading = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-heading",
});

const alegreyaSansBody = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dra. Kátia Caetano | Psicóloga Clínica",
  description:
    "Links úteis de Dra. Kátia Caetano — Psicóloga Clínica especializada em Terapia Cognitivo-Comportamental (TCC). Supervisões, comunidade e mais.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${alegreyaSansHeading.variable} ${alegreyaSansBody.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
