import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweatherHeading = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
  variable: "--font-heading",
});

const merriweatherBody = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dr. Carlos Antônio Moura",
  description:
    "Links úteis do Dr. Carlos Antônio Moura — CORC, blog, consultas, YouTube e Spotify.",
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
      className={`${merriweatherHeading.variable} ${merriweatherBody.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
