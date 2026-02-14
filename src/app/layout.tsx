import type { Metadata } from "next";
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
    "AI-native agencies use artificial intelligence as their core operating system, delivering professional services with software-like margins, speed, and scalability. Learn why Y Combinator and top investors are betting on this model.",
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
      "AI-native agencies use AI as their core operating system, delivering services with software-like margins and scalability.",
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
      "AI-native agencies use AI as their core operating system, delivering services with software-like margins and scalability.",
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
      </body>
    </html>
  );
}
