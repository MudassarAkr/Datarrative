import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Get Expert Data Analytics Support',
  description: 'Contact DashCrafters for expert data analytics and Power BI consulting. Get in touch to discuss your project, request a quote, or schedule a consultation with our team.',
  keywords: [
    "contact DashCrafters",
    "data analytics consultation",
    "Power BI support",
    "request quote",
    "analytics consulting UK",
    "get in touch"
  ],
  openGraph: {
    title: 'Contact DashCrafters - Get Expert Data Analytics Support',
    description: 'Get in touch with our expert team for data analytics and Power BI consulting services. Schedule a consultation today.',
    url: "https://dashcrafters.co.uk/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact DashCrafters",
      },
    ],
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/contact",
  },
};

export default function ContactPage() {
  // ContactPage Schema with LocalBusiness
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "DashCrafters",
      description: "Professional data analytics and Power BI consulting services",
      url: "https://dashcrafters.co.uk",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales and Support",
        availableLanguage: ["English"],
        email: "info@dashcrafters.co.uk",
      },
    },
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <Contact />
        <Footer />
      </main>
    </>
  );
}


