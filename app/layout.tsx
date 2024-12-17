import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SiteHeader } from "@/components/site-header"
import { SecondaryNav } from "@/components/secondary-nav"
import { SiteFooter  } from "@/components/site-footer"

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
  title: "UNSD",
  description: "Uganda Suppliers National Database",
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
        <SiteHeader />
        <SecondaryNav />
        
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
