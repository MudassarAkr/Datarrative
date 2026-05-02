import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesDetail from '@/components/ServicesDetail';

export const metadata: Metadata = {
  title: "Data Analytics & Power BI Services",
  description: "Comprehensive data analytics and Power BI services including custom dashboard development, business intelligence consulting, data visualization, and advanced analytics solutions for UK businesses.",
  keywords: [
    "Power BI services",
    "data analytics services",
    "business intelligence consulting",
    "dashboard development",
    "data visualization services",
    "BI solutions UK",
    "Power BI consulting",
    "data strategy",
    "analytics implementation"
  ],
  openGraph: {
    title: "Data Analytics & Power BI Services | DashCrafters",
    description: "Comprehensive data analytics and Power BI services including custom dashboard development, business intelligence consulting, and advanced analytics solutions.",
    url: "https://dashcrafters.co.uk/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashCrafters Services - Data Analytics & Power BI",
      },
    ],
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/services",
  },
};

export default function ServicesPage() {
  // Service Schema with detailed offerings
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Power BI Dashboard Development",
        description: "Custom Power BI dashboard design and development tailored to your business needs with interactive visualizations and real-time data insights",
        provider: {
          "@type": "Organization",
          name: "DashCrafters",
        },
        areaServed: "GB",
        serviceType: "Business Intelligence",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Data Analytics Consulting",
        description: "Expert data analytics consulting services including strategy development, data modeling, and analytics implementation",
        provider: {
          "@type": "Organization",
          name: "DashCrafters",
        },
        areaServed: "GB",
        serviceType: "Consulting",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Business Intelligence Solutions",
        description: "End-to-end business intelligence solutions with data integration, reporting automation, and decision support systems",
        provider: {
          "@type": "Organization",
          name: "DashCrafters",
        },
        areaServed: "GB",
        serviceType: "Business Intelligence",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Data Visualization Services",
        description: "Professional data visualization services creating compelling visual stories from complex datasets",
        provider: {
          "@type": "Organization",
          name: "DashCrafters",
        },
        areaServed: "GB",
        serviceType: "Design",
      },
    ],
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <ServicesDetail />
        <Footer />
      </main>
    </>
  );
}


