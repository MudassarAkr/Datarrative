import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export const metadata: Metadata = {
  title: "About Us - Expert Data Analytics Team",
  description: "Meet the DashCrafters team. Expert data analysts and Power BI consultants dedicated to transforming business data into actionable insights. Learn about our mission, values, and expertise.",
  keywords: [
    "about DashCrafters",
    "data analytics team",
    "Power BI experts",
    "business intelligence consultants",
    "data visualization specialists",
    "UK analytics company"
  ],
  openGraph: {
    title: "About DashCrafters - Expert Data Analytics Team",
    description: "Meet our expert team of data analysts and Power BI consultants dedicated to transforming business data into actionable insights.",
    url: "https://dashcrafters.co.uk/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashCrafters Team - Data Analytics Experts",
      },
    ],
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/about",
  },
};

export default function AboutPage() {
  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "DashCrafters",
      description: "Professional data analytics and Power BI consulting services helping UK businesses transform data into actionable insights",
      url: "https://dashcrafters.co.uk",
      foundingDate: "2020",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "10-50",
      },
      slogan: "Transform Data Into Decisions",
      knowsAbout: [
        "Data Analytics",
        "Power BI Development",
        "Business Intelligence",
        "Data Visualization",
        "Dashboard Design",
        "Data Strategy",
      ],
    },
  };

  return (
    <>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <About />
        <Footer />
      </main>
    </>
  );
}


