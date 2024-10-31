import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Адвокат по уголовным делам | Главная",
  description: "Адвокат по уголовным делам в Москве – помощь и консультации.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Добавляем футер здесь */}
      </body>
    </html>
  );
}
