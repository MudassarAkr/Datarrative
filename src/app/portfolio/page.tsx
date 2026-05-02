import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio - Our Data Analytics & Power BI Projects',
  description: 'Explore our successful data analytics and Power BI dashboard projects across healthcare, retail, finance, and manufacturing industries. Real-world case studies showcasing data-driven solutions.',
  keywords: [
    "Power BI portfolio",
    "data analytics projects",
    "dashboard examples",
    "BI case studies",
    "Power BI dashboards",
    "analytics portfolio",
    "data visualization examples",
    "business intelligence projects"
  ],
  openGraph: {
    title: 'Portfolio - Our Data Analytics & Power BI Projects | DashCrafters',
    description: 'Explore our successful data analytics and Power BI dashboard projects across various industries. Real-world case studies showcasing data-driven solutions.',
    url: "https://dashcrafters.co.uk/portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashCrafters Portfolio - Data Analytics Projects",
      },
    ],
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/portfolio",
  },
};

export default function PortfolioPage() {
  // CreativeWork Schema for portfolio projects
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DashCrafters Portfolio",
    description: "Showcase of data analytics and Power BI projects across various industries",
    url: "https://dashcrafters.co.uk/portfolio",
    publisher: {
      "@type": "Organization",
      name: "DashCrafters",
      url: "https://dashcrafters.co.uk",
    },
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "Healthcare Analytics Dashboard",
        description: "Comprehensive healthcare analytics dashboard for patient data management and operational insights",
        image: "https://dashcrafters.co.uk/portfolio/healthcare-dashboard.jpg",
        keywords: "healthcare analytics, patient data, Power BI dashboard",
      },
      {
        "@type": "CreativeWork",
        name: "Retail Sales Intelligence",
        description: "Advanced retail analytics solution for sales tracking and inventory optimization",
        keywords: "retail analytics, sales intelligence, inventory management",
      },
      {
        "@type": "CreativeWork",
        name: "Financial Reporting System",
        description: "Automated financial reporting and compliance dashboard for financial services",
        keywords: "financial reporting, compliance dashboard, automated analytics",
      },
      {
        "@type": "CreativeWork",
        name: "Manufacturing Operations Dashboard",
        description: "Real-time manufacturing operations monitoring and efficiency tracking system",
        image: "https://dashcrafters.co.uk/portfolio/manufacturing-operations.jpg",
        keywords: "manufacturing analytics, operations dashboard, efficiency tracking",
      },
    ],
  };

  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <Portfolio showExpandButton={true} />
        <Footer />
      </main>
    </>
  );
}


