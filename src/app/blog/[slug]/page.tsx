import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// Blog post data model
type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author: string;
  tags: string[];
  image: string; // public path
  readTime: string;
  category: 'powerbi' | 'analytics' | 'tutorials';
  body: () => React.ReactElement;
};

const POSTS: Record<string, Post> = {
  'getting-started-with-power-bi': {
    slug: 'getting-started-with-power-bi',
    title: 'Getting Started with Power BI: A Practical Guide for Your First Dashboard',
    description:
      'Learn the fundamentals of Microsoft Power BI, connect your first dataset, and build a clean dashboard with best practices for modeling and visuals.',
    date: '2025-10-15',
    author: 'Sarah Chen',
    tags: ['Power BI', 'Beginners', 'Dashboard', 'Data Modeling'],
  image: '/blog/powerbi-dashboard.png',
    readTime: '8 min read',
    category: 'powerbi',
    body: function Body() {
      return (
        <article className="max-w-3xl mx-auto px-6 py-10 text-gray-800 dark:text-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Power BI?</h2>
          <p className="leading-relaxed mb-6">
            Power BI is a powerful business intelligence platform that helps you turn raw data into interactive, shareable insights. It combines
            data connection, modeling, and visualization in one tool—making it ideal for small teams and large enterprises alike.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-3">What you will build</h3>
          <p className="mb-6">
            In this tutorial, you’ll connect a sample dataset, model the data, and create a clean dashboard with a KPI card, bar chart, and
            time-series line chart. You’ll also learn core best practices for layout and performance.
          </p>

          <div className="rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800 p-4 mb-8">
            <strong className="block mb-1">Prerequisites</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Power BI Desktop (latest version)</li>
              <li>Sample dataset (for example: Sales, Orders, Dates)</li>
              <li>Basic familiarity with Excel tables or CSV files</li>
            </ul>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Step 1 — Connect your data</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Open Power BI Desktop and select <em>Get Data</em>.</li>
            <li>Choose your source (Excel/CSV/SQL). Load your Sales and Date tables.</li>
            <li>Click <em>Transform Data</em> to open Power Query. Check column types and remove empty rows.</li>
          </ol>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Step 2 — Create a star schema</h3>
          <p className="mb-4">Keep your model simple and performant with a star schema:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Fact table:</strong> Sales (Amount, Quantity, DateKey, ProductKey).</li>
            <li><strong>Dimension tables:</strong> Date, Customer, Product, Region.</li>
            <li>Create one-to-many relationships from each dimension to Sales.</li>
          </ul>

          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Sample DAX measures</p>
            <pre className="text-sm overflow-x-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-md"><code>{`Total Sales := SUM ( Sales[Amount] )
Total Qty   := SUM ( Sales[Quantity] )
YoY Sales % := DIVIDE(
  [Total Sales] - CALCULATE([Total Sales], DATEADD('Date'[Date], -1, YEAR)),
  CALCULATE([Total Sales], DATEADD('Date'[Date], -1, YEAR))
)`}</code></pre>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Step 3 — Build your first report</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Add a card visual with <em>Total Sales</em>. Use compact formatting and currency.</li>
            <li>Create a clustered bar chart: <em>Sales by Region</em>. Sort by value and limit labels.</li>
            <li>Add a line chart: <em>Sales over time</em>. Use the Date hierarchy for consistent granularity.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Best practices</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Prefer a dedicated Date table with continuous dates and mark it as <em>Date Table</em>.</li>
            <li>Hide surrogate keys/technical columns from the report view.</li>
            <li>Minimize bi-directional relationships—use them only when necessary.</li>
            <li>Use theme colors and a consistent 8–12px spacing scale for layout harmony.</li>
          </ul>

          <blockquote className="border-l-4 border-indigo-400 pl-4 italic text-gray-700 dark:text-gray-300 mb-8">
            Clean modeling is the foundation of a fast, reliable Power BI dashboard. Visuals get better when the model is simple.
          </blockquote>

          <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Next steps</h3>
          <p className="mb-8">Publish to the Power BI Service, configure scheduled refresh, and share securely with workspaces and apps.</p>

          <div className="flex flex-wrap gap-2 mt-10">
            {['Power BI', 'Beginners', 'Modeling', 'Dashboard'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                {t}
              </span>
            ))}
          </div>
        </article>
      );
    },
  },
  'data-analytics-best-practices-2025': {
    slug: 'data-analytics-best-practices-2025',
    title: 'Data Analytics Best Practices in 2025: Principles, Process, and Playbooks',
    description:
      'The 2025 analytics playbook: governance-first data, practical AI, reliable metrics layers, and product thinking for measurable outcomes.',
    date: '2025-10-10',
    author: 'Michael Roberts',
    tags: ['Analytics', 'Best Practices', 'Governance', 'AI'],
  image: '/blog/data-analytics.png',
    readTime: '6 min read',
    category: 'analytics',
    body: function Body() {
      return (
        <article className="max-w-3xl mx-auto px-6 py-10 text-gray-800 dark:text-gray-100">
          <p className="leading-relaxed mb-6">
            In 2025, winning analytics teams focus on trustworthy data, decision speed, and measurable outcomes. Tools evolve quickly, but
            durable principles—clarity of metrics, strong governance, and product thinking—create lasting value.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">1) Govern the inputs, not just the dashboards</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Define data contracts between producers and consumers.</li>
            <li>Adopt a semantic layer or metrics catalog (clear owners, versioning, tests).</li>
            <li>Automate freshness and quality checks; alert on drift, null spikes, or schema breaks.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">2) Treat analytics as a product</h2>
          <p className="mb-4">Great analytics aligns to user needs with discovery, iteration, and adoption metrics.</p>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Interview stakeholders; capture decisions and KPIs tied to business outcomes.</li>
            <li>Ship a <em>minimum decisionable dashboard</em> fast, then iterate.</li>
            <li>Track usage, time-to-insight, and decision impact (e.g., win rate, CAC, churn).</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">3) Practical AI, not hype</h2>
          <p className="mb-4">Use AI where it compounds analyst leverage:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Natural language exploration on a governed metrics layer.</li>
            <li>Forecasting and anomaly detection backed by human review loops.</li>
            <li>Automated insights that link to actions in CRM/marketing tools.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">4) Reliable metrics and storytelling</h2>
          <p className="mb-6">
            Establish <strong>one source of truth</strong> for core metrics. Pair this with compelling data stories: a crisp headline, one
            takeaway per visual, and clear next steps.
          </p>

          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-200/70 dark:border-amber-800 p-4 mb-8">
            <strong className="block mb-1">Executive checklist</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do we know who owns each critical metric?</li>
              <li>Can we trust its definition across tools and teams?</li>
              <li>How quickly can a leader answer a top-line performance question?</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">5) Operating model & skills</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Hybrid model: centralized standards + embedded analysts in business units.</li>
            <li>Skills: SQL, python, BI tools, experimentation, stakeholder management, and storytelling.</li>
            <li>Docs-as-code and reproducible analytics (dbt, notebooks, tests).</li>
          </ul>

          <p className="mt-8">
            The goal in 2025 is simple: <em>fewer dashboards, more decisions.</em> Start with outcomes, measure adoption, and evolve your data
            foundation to scale what works.
          </p>

          <div className="flex flex-wrap gap-2 mt-10">
            {['Analytics', 'Governance', 'AI', 'Metrics'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                {t}
              </span>
            ))}
          </div>
        </article>
      );
    },
  },
  'advanced-powerbi-visualization': {
    slug: 'advanced-powerbi-visualization',
    title: 'Advanced Power BI Visualization Techniques: From Clarity to Impact',
    description:
      'Move beyond basic charts with advanced Power BI visuals, interactions, and layout systems that clarify insight and drive action.',
    date: '2025-10-08',
    author: 'Emily Johnson',
    tags: ['Power BI', 'Visualization', 'UX', 'DAX'],
  image: '/blog/visualization.png',
    readTime: '10 min read',
    category: 'powerbi',
    body: function Body() {
      return (
        <article className="max-w-3xl mx-auto px-6 py-10 text-gray-800 dark:text-gray-100">
          <p className="leading-relaxed mb-6">
            Advanced dashboards balance clarity, context, and action. These techniques help you design visuals users can trust and act on—
            without overwhelming them.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">1) Build a visual system</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Use a 12-column grid with consistent spacing (8/12/16px).</li>
            <li>Limit your palette to primary, success, warning, and neutral tones.</li>
            <li>Define typography scale and apply it consistently to titles and labels.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">2) Advanced interactions</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Field parameters</strong> to let users toggle metrics/dimensions in a single visual.</li>
            <li><strong>Bookmarks</strong> for guided storytelling and spotlight modes.</li>
            <li><strong>Drillthrough</strong> to provide detail-on-demand without cluttering the primary view.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">3) Small multiples and denser layouts</h2>
          <p className="mb-4">When comparing categories over time, small multiples outperform legends:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Use identical axes; avoid unnecessary gridlines.</li>
            <li>Reserve color for highlight and status. Use gray for context.</li>
            <li>Prefer trend lines and percent change to raw totals.</li>
          </ul>

          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">DAX tip: dynamic titles</p>
            <pre className="text-sm overflow-x-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-md"><code>{`Title Selected :=
VAR SelMeasure = SELECTEDVALUE('Metric Parameter'[Metric])
VAR SelPeriod  = SELECTEDVALUE('Period'[Label])
RETURN
  SelMeasure & " — " & SelPeriod`}</code></pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">4) Communicate decisions</h2>
          <p className="mb-6">
            Every page should answer: <em>What happened?</em> <em>Why?</em> <em>What should we do?</em> Label insights directly on the chart and
            offer a clear CTA (e.g., filter preset, link to CRM list, or open a notebook query).
          </p>

          <p className="mt-8">
            The best visuals are <strong>quiet by default</strong> and informative on demand. Start from user questions, then design the
            shortest path to answers.
          </p>

          <div className="flex flex-wrap gap-2 mt-10">
            {['Power BI', 'Visualization', 'UX', 'Design'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                {t}
              </span>
            ))}
          </div>
        </article>
      );
    },
  },
};

function getPost(slug: string): Post | undefined {
  return POSTS[slug];
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = `${post.title} | DashCrafters Blog`;
  const description = post.description;
  const url = `/blog/${slug}`;
  const image = post.image;

  return {
    title,
    description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      images: [{ url: image }],
      authors: [post.author],
      tags: post.tags,
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    author: { '@type': 'Person', name: post.author },
    image: post.image,
    keywords: post.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        {/* Top banner (matches site aesthetic) */}
        <section className="relative overflow-hidden pt-24 pb-10 md:pt-28">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900" />
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] [background-size:40px_40px] dark:opacity-10" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span>{formatDate(post.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-400 inline-block" />
                  <span>By {post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-400 inline-block" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        {post.body()}

        {/* CTA */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-6">
            <div className="rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Need help building dashboards users love?</h3>
                <p className="text-white/90">We design, build, and optimize analytics that drive decisions.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center px-5 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Talk to an expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* SEO: JSON-LD */}
      <Script id="post-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
