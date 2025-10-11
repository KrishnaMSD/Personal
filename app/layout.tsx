import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { siteContent } from "@/content/siteContent";
import { inter, jetbrainsMono } from "@/lib/fonts";

const siteUrl = "https://krishnakalakonda.com";
const description = siteContent.profile.bioShort;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteContent.profile.name} | ${siteContent.profile.title}`,
    template: `%s | ${siteContent.profile.name}`,
  },
  description,
  keywords: [
    "Krishna Kalakonda",
    "Full-Stack Data Scientist",
    "Machine Learning",
    "Data Visualization",
    "LLM Engineer",
    "Chicago Data Scientist",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  authors: [{ name: siteContent.profile.name, url: siteUrl }],
  openGraph: {
    title: `${siteContent.profile.name} | ${siteContent.profile.title}`,
    description,
    url: siteUrl,
    siteName: siteContent.profile.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: `${siteContent.profile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.profile.name} | ${siteContent.profile.title}`,
    description,
    creator: `@${siteContent.profile.name.toLowerCase().replace(/\s+/g, "")}`,
    images: ["/og-cover.png"],
  },
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.profile.name,
  jobTitle: siteContent.profile.title,
  email: siteContent.profile.email,
  url: siteUrl,
  image: `${siteUrl}${siteContent.profile.headshotSrc}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteContent.profile.location,
    addressCountry: "USA",
  },
  sameAs: siteContent.profile.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="top"
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
        style={{ isolation: "isolate" }}
      >
        <a
          href="#main"
          className="skip-link absolute left-4 top-4 z-50 -translate-y-20 rounded-full border border-accent/40 bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-focus transition focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <Script id="jsonld-person" type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </Script>
      </body>
    </html>
  );
}
