import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(siteSettingsQuery);

  return {
    title: settings?.title || "Clothing Store Showcase",
    description: settings?.description || "Premium clothing collection",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(siteSettingsQuery);
  const primaryColor = settings?.primaryColor || '#1a1a1a';

  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        style={{ '--primary-color-dynamic': primaryColor } as React.CSSProperties}
      >
        <Header />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
