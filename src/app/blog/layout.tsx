import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Data Analytics & Power BI Insights',
  description: 'Expert insights on data analytics, Power BI, business intelligence, and visualization techniques. Learn best practices, tips, and tutorials from industry professionals.',
  keywords: [
    "data analytics blog",
    "Power BI tutorials",
    "business intelligence insights",
    "data visualization tips",
    "analytics best practices",
    "Power BI tips",
    "BI blog UK"
  ],
  openGraph: {
    title: 'Blog - Data Analytics & Power BI Insights | DashCrafters',
    description: 'Expert insights on data analytics, Power BI, business intelligence, and visualization techniques.',
    url: "https://dashcrafters.co.uk/blog",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashCrafters Blog - Data Analytics Insights",
      },
    ],
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
