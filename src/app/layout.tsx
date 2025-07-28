import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instagram Unfollowers Analyzer",
  description: "Analyze your Instagram followers and followings to see who doesn't follow you back",
  keywords: "instagram, unfollowers, followers, social media, analyzer, privacy, local processing",
  authors: [{ name: "Ibrahim El-Khansa", url: "https://ibrahimelkhansa.com" }],
  creator: "Ibrahim El Khansa",
  publisher: "Ibrahim El Khansa",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.myunfollowers.app/",
    title: "Instagram Unfollowers Analyzer",
    description: "Analyze your Instagram followers and followings to see who doesn't follow you back - completely private and secure",
    siteName: "Instagram Unfollowers Analyzer",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="main-container">
          <section className="main-container__content">{children}</section>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
