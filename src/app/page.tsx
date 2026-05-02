import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import AboutBrief from '@/components/AboutBrief';
import BlogSection from '@/components/BlogSection'; // Updated import path for BlogSection
// Contact removed from landing per requirements
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "DashCrafters - Professional Data Analytics & Power BI Services | UK",
  description: "Transform your business data into actionable insights with expert data analytics and Power BI dashboard services. Trusted by UK businesses for professional reporting solutions.",
  openGraph: {
    title: "DashCrafters - Professional Data Analytics & Power BI Services | UK",
    description: "Transform your business data into actionable insights with expert data analytics and Power BI dashboard services.",
    url: "https://dashcrafters.co.uk",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashCrafters - Data Analytics & Power BI Services",
      },
    ],
  },
};

export default function Home() {
  // WebSite Schema for search box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DashCrafters",
    url: "https://dashcrafters.co.uk",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://dashcrafters.co.uk/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Analytics & Power BI Consulting",
    provider: {
      "@type": "Organization",
      name: "DashCrafters",
      url: "https://dashcrafters.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data Analytics Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Power BI Dashboard Development",
            description: "Custom Power BI dashboard design and development for business intelligence",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Analytics Consulting",
            description: "Expert data analytics consulting and strategy services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Intelligence Solutions",
            description: "Comprehensive BI solutions and data visualization services",
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <AboutBrief />
        <BlogSection /> {/* Including the BlogSection component */}
        <Footer />
      </main>
    </>
  );
}


