import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Curious Kids, Big Questions — Why Questions Book for Kids Ages 5–9",
    template: "%s | Curious Kids, Big Questions",
  },
  description:
    "Simple, accurate answers to the questions kids ask about space, the Moon and the sky. Book 1: Why Does the Moon Follow Me? — a why questions book for kids ages 5–9.",
  keywords: [
    "why questions book for kids",
    "questions kids ask about space",
    "moon book for kids ages 5-9",
    "curious kids science questions and answers",
    "space questions answered for children",
    "bedtime science book for curious kids",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Curious Kids, Big Questions — Why Questions Book for Kids Ages 5–9",
    description:
      "101 big questions about the sky, Moon and space, answered in 5 minutes or less for curious kids ages 5–9.",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Simple, accurate answers to the questions kids ask about the sky, the Moon and space.",
  inLanguage: "en",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
