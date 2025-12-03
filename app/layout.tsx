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
  metadataBase: new URL("https://kedaiterasbude.com"), // ganti domain kalo sudah ready
  title: {
    default:
      "Kedai Teras Bude | Rumah Makan Cita Rasa Rumahan Enak & Terjangkau",
    template: "%s | Kedai Teras Bude",
  },
  description:
    "Kedai Teras Bude menyajikan masakan rumahan dengan cita rasa autentik. Tersedia layanan makan di tempat & pesan antar. Menu lengkap: geprek, pecel lele, nasi goreng, minuman segar.",
  keywords: [
    "Kedai Teras Bude",
    "rumah makan enak",
    "kuliner rumahan",
    "ayam geprek",
    "warung makan murah",
    "resto keluarga",
    "makanan nusantara",
  ],
  icons: {
    icon: "/logo/logo.webp",
    shortcut: "/logo/logo.webp",
    apple: "/logo/logo.webp",
  },
  openGraph: {
    title: "Kedai Teras Bude - Rumah Makan Enak & Terjangkau",
    description:
      "Rumah makan nyaman dengan cita rasa rumahan. Pesan antar & makan di tempat tersedia.",
    url: "https://kedaiterasbude.com",
    siteName: "Kedai Teras Bude",
    images: [
      {
        url: "/logo/logo.webp",
        width: 800,
        height: 600,
        alt: "Logo Kedai Teras Bude",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedai Teras Bude - Rumah Makan Rumahan Enak & Murah",
    description:
      "Tempat makan nyaman menu rumahan lezat dan terjangkau. Ayo pesan sekarang!",
    images: ["/logo/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kedaiterasbude.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
