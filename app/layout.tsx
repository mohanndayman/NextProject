import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ultimate Ceramic Flooring Collection",
  description:
    "Transform your space with our meticulously curated selection of ceramic flooring options",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "black" }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
