import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dashcrafters.co.uk"),
  title: {
    default: "DashCrafters - Professional Data Analytics & Power BI Services | UK",
    template: "%s | DashCrafters"
  },
  description: "Transform your business data into actionable insights with our expert data analytics and Power BI dashboard services. Professional reporting solutions for UK businesses.",
  keywords: [
    "data analytics UK",
    "Power BI consulting",
    "business intelligence services",
    "data visualization",
    "dashboard design",
    "Power BI dashboards",
    "data insights",
    "reporting services UK",
    "data analytics consultant",
    "BI solutions",
    "data transformation",
    "Power BI experts"
  ],
  authors: [{ name: "DashCrafters", url: "https://dashcrafters.co.uk" }],
  creator: "DashCrafters",
  publisher: "DashCrafters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://dashcrafters.co.uk",
    siteName: "DashCrafters",
    title: "DashCrafters - Professional Data Analytics & Power BI Services",
    description: "Transform your business data into actionable insights with our expert data analytics and Power BI dashboard services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashCrafters - Data Analytics & Power BI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DashCrafters - Professional Data Analytics & Power BI Services",
    description: "Transform your business data into actionable insights with our expert data analytics and Power BI dashboard services.",
    images: ["/og-image.png"],
    creator: "@dashcrafters",
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk",
  },
  category: "Business Intelligence",
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization Schema (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DashCrafters",
    url: "https://dashcrafters.co.uk",
    logo: "https://dashcrafters.co.uk/logo.png",
    description: "Professional data analytics and Power BI consulting services in the UK",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/dashcrafters",
      "https://twitter.com/dashcrafters",
    ],
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "Data Analytics",
      "Power BI",
      "Business Intelligence",
      "Data Visualization",
      "Dashboard Design",
    ],
  };

  return (
    <html lang="en-GB">
      <head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
