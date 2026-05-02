'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Search, 
  BarChart2, 
  PieChart, 
  TrendingUp,
  Tag as TagIcon,
  Calendar,
  User,
  Clock,
  ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'powerbi', name: 'Power BI', icon: PieChart },
  { id: 'analytics', name: 'Analytics', icon: BarChart2 },
  { id: 'tutorials', name: 'Tutorials', icon: TrendingUp },
];

const blogs = [
  {
    id: '1',
    title: 'Getting Started with Power BI',
    summary: 'Learn the fundamentals of Power BI and how to create your first dashboard with step-by-step guidance.',
  image: '/blog/powerbi-dashboard.png',
    date: '2025-10-15',
    author: 'Sarah Chen',
    readTime: '8 min read',
    category: 'powerbi',
    featured: true,
    tags: ['Power BI', 'Beginners', 'Dashboard'],
    link: '/blog/getting-started-with-power-bi',
  },
  {
    id: '2',
    title: 'Data Analytics Best Practices for 2025',
    summary: 'Discover the latest trends and best practices that are shaping the future of data analytics.',
  image: '/blog/data-analytics.png',
    date: '2025-10-10',
    author: 'Michael Roberts',
    readTime: '6 min read',
    category: 'analytics',
    featured: true,
    tags: ['Analytics', 'Trends', 'Best Practices'],
    link: '/blog/data-analytics-best-practices-2025',
  },
  {
    id: '3',
    title: 'Advanced Power BI Visualization Techniques',
    summary: 'Master advanced visualization techniques to create stunning and informative dashboards.',
  image: '/blog/visualization.png',
    date: '2025-10-08',
    author: 'Emily Johnson',
    readTime: '10 min read',
    category: 'powerbi',
    featured: false,
    tags: ['Power BI', 'Advanced', 'Visualization'],
    link: '/blog/advanced-powerbi-visualization',
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = filteredBlogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section refined for site consistency */}
        <section className="relative overflow-hidden pt-28 pb-24 md:pt-32">
          {/* Base gradient + subtle grid to match site */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] [background-size:40px_40px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(255,255,255,0.8)_70%,white_100%)][radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />

            {/* Soft animated orbs (subtle) */}
            <motion.div
              className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-gradient-to-r from-primary-100/40 to-secondary-200/40 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-28 -left-28 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-secondary-100/40 to-purple-200/40 blur-3xl"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.35, 0.25] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4"
            >
              Data Analytics Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore expert insights, tutorials, and best practices in data analytics and Power BI
            </motion.p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 -mt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-2xl border border-gray-200 shadow-lg p-5 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full md:w-[28rem]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  {/* Search Suggestions */}
                  <AnimatePresence>
                    {isSearchFocused && searchQuery && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                      >
                        {filteredBlogs.slice(0, 3).map((blog) => (
                          <Link
                            key={blog.id}
                            href={blog.link}
                            className="block p-3 hover:bg-gray-50:bg-gray-700"
                          >
                            <h4 className="text-sm font-medium text-gray-900">{blog.title}</h4>
                            <p className="text-xs text-gray-500">{blog.tags.join(' • ')}</p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all border ${
                        selectedCategory === category.id
                          ? 'text-white bg-gradient-to-r from-primary-600 to-secondary-600 shadow-sm border-transparent'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300 hover:text-primary-600:text-primary-400'
                      }`}
                    >
                      {category.icon && <category.icon className="h-4 w-4" />}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredBlogs.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative group"
                  >
                    <div className="relative h-96 rounded-xl overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-blue-500/70 text-white text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{blog.title}</h3>
                        <p className="text-gray-200 mb-4">{blog.summary}</p>
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {blog.author}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {blog.readTime}
                            </span>
                          </div>
                          <Link
                            href={blog.link}
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            Read More
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                    <div className="relative h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {blog.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={blog.link}
                      className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/** Newsletter section removed as requested **/}
      </main>
      <Footer />
    </div>
  );
}

