import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WebSiteStructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-native-agency.com"),
  title: {
    default: "AI-Native Agency — The Future of Professional Services",
    template: "%s | AI-Native Agency",
  },
  description:
    "65-80% margins. 10x delivery speed. Infinite scale. AI-native agencies are replacing traditional firms \u2014 and YC is backing the shift. See why.",
  keywords: [
    "AI-native agency",
    "AI native agency",
    "AI agency",
    "AI-first agency",
    "AI-powered agency",
    "artificial intelligence agency",
    "YC AI agency",
    "Aaron Epstein AI",
    "software margins agency",
  ],
  authors: [{ name: "AI-Native Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI-Native Agency",
    title: "AI-Native Agency — The Future of Professional Services",
    description:
      "65-80% margins. 10x delivery speed. Infinite scale. AI-native agencies are replacing traditional firms \u2014 and YC is backing the shift.",
    images: [
      {
        url: "/og-image.png",
        width: 2752,
        height: 1536,
        alt: "AI-Native Agency — The Future of Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Agency — The Future of Professional Services",
    description:
      "65-80% margins. 10x delivery speed. Infinite scale. AI-native agencies are replacing traditional firms \u2014 and YC is backing the shift.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://ai-native-agency.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WebSiteStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="p30Q9FMnkKMt3sp6ZP+WJg"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
