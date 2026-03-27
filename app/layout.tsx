import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Nikhil Lende | Full Stack Developer",
  description: "Portfolio of Nikhil Lende, a Full Stack Developer with 2 years of experience building scalable SaaS, multi-tenant systems, and modern APIs using Next.js, Node.js, and Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans relative overflow-x-hidden`}>
        <div className="noise-bg" />
        <div className="blob-1" />
        <div className="blob-2" />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
