'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Analytics Dashboard",
    client: "Retail Chain UK",
    description: "Comprehensive dashboard tracking sales performance, customer behavior, and inventory management across 50+ stores.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    technologies: ["Power BI", "SQL Server", "Azure"],
    metrics: [
      { label: "Revenue Growth", value: "+35%" },
      { label: "Data Accuracy", value: "99.8%" },
      { label: "Processing Time", value: "2.3s" },
    ],
  },
  {
    id: 2,
    title: "Financial Performance Analytics",
    client: "Investment Firm",
    description: "Real-time financial dashboard providing portfolio performance, risk analysis, and market insights.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&q=80",
    technologies: ["Power BI", "Python", "AWS"],
    metrics: [
      { label: "ROI Improvement", value: "+28%" },
      { label: "Decision Speed", value: "5x faster" },
      { label: "Risk Reduction", value: "-15%" },
    ],
  },
  {
    id: 3,
    title: "Healthcare Data Visualization",
    client: "NHS Trust",
    description: "Patient flow analytics and resource optimization dashboard for improved healthcare delivery.",
    image: "/portfolio/healthcare-dashboard.jpg",
    technologies: ["Power BI", "Tableau", "SQL"],
    metrics: [
      { label: "Wait Time", value: "-40%" },
      { label: "Efficiency", value: "+25%" },
      { label: "Cost Savings", value: "£2.3M" },
    ],
  },
  {
    id: 4,
    title: "Manufacturing Operations Dashboard",
    client: "Industrial Company",
    description: "Production monitoring and quality control analytics for optimized manufacturing processes.",
    image: "/portfolio/manufacturing-operations.jpg",
    technologies: ["Power BI", "IoT", "Azure"],
    metrics: [
      { label: "Production", value: "+22%" },
      { label: "Quality Rate", value: "98.5%" },
      { label: "Downtime", value: "-30%" },
    ],
  },
];

interface PortfolioProps {
  showExpandButton?: boolean;
}

export default function Portfolio({ showExpandButton = false }: PortfolioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleExpandToggle = () => {
    const newExpandedState = !isExpanded;
    
    // Preload all images when expanding to avoid lazy loading delays
    if (newExpandedState && typeof window !== 'undefined') {
      portfolioItems.forEach((item) => {
        const img = new window.Image();
        img.src = item.image;
      });
    }
    
    setIsExpanded(newExpandedState);
    
    // Smooth scroll to expanded section after animation has progressed
    if (newExpandedState) {
      setTimeout(() => {
        const expandedSection = document.getElementById('expanded-projects');
        if (expandedSection) {
          const yOffset = -100; // Offset to account for header
          const y = expandedSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({ 
            top: y, 
            behavior: 'smooth' 
          });
        }
      }, 200);
    }
  };

  const currentItem = portfolioItems[currentIndex];

  // Preload next slide image to avoid jank on transition
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    const nextSrc = portfolioItems[nextIndex].image;
    // Only preload if it's a local asset or allowed remote
    if (typeof window !== 'undefined' && 'Image' in window) {
      const img = new window.Image();
      img.src = nextSrc;
    }
    return () => {
      // hint: no cleanup required for image preloads
    };
  }, [currentIndex]);

  // Preload all portfolio images when on portfolio page for instant display
  useEffect(() => {
    if (showExpandButton && typeof window !== 'undefined') {
      portfolioItems.forEach((item) => {
        const img = new window.Image();
        img.src = item.image;
      });
    }
  }, [showExpandButton]);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
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
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our successful data analytics projects that have transformed businesses across various industries.
          </p>
        </motion.div>

        {/* Portfolio Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative w-full h-full will-change-transform will-change-opacity"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={currentIndex === 0}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23e5e7eb' width='1200' height='800'/%3E%3C/svg%3E"
                  className="object-cover"
                />
              </motion.div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Project Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {portfolioItems.length}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                key={`content-${currentItem.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Client Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {currentItem.client}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {currentItem.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {currentItem.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-600">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/** Case study CTA removed as requested **/}
              </motion.div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 p-6 bg-gray-50">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid View Toggle - behavior depends on showExpandButton prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {showExpandButton ? (
            <button
              onClick={handleExpandToggle}
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-600:text-primary-400 transition-all duration-300"
            >
              {isExpanded ? 'Show Less' : 'View All Projects'}
            </button>
          ) : (
            <a
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-600:text-primary-400 transition-all duration-300"
            >
              View All Projects
            </a>
          )}
        </motion.div>

        {/* Expanded Grid View - only shown on portfolio page when expand button is enabled */}
        {showExpandButton && (
          <motion.div
            id="expanded-projects"
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? '2rem' : 0
            }}
            transition={{ 
              height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.4, ease: 'easeInOut' },
              marginTop: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            }}
            className="overflow-hidden scroll-mt-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: isExpanded ? 1 : 0, 
                    y: isExpanded ? 0 : 10 
                  }}
                  transition={{ 
                    duration: 0.35, 
                    delay: isExpanded ? index * 0.04 : 0, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group border border-gray-200"
                >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{item.client}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}


