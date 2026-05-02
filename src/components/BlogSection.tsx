'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: '1',
    title: 'Getting Started with Power BI',
    summary: 'Learn the fundamentals of Power BI and how to create your first dashboard.',
    image: '/blog/powerbi-dashboard.png',
    link: '/blog/getting-started-with-power-bi',
  },
  {
    id: '2',
    title: 'Data Analytics Best Practices for 2025',
    summary: 'Discover the latest trends and best practices in data analytics.',
    image: '/blog/data-analytics.png',
    link: '/blog/data-analytics-best-practices-2025',
  },
  {
    id: '3',
    title: 'Advanced Power BI Visualization Techniques',
    summary: 'Master advanced visuals, interactions, and layout systems for impactful dashboards.',
    image: '/blog/visualization.png',
    link: '/blog/advanced-powerbi-visualization',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Blogs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay updated with the latest insights and tutorials in data analytics and business intelligence.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.summary}
                </p>
                <Link
                  href={blog.link}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

