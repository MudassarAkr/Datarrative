'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with smoothly blended image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900 z-10" />
        
        {/* Right-aligned image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-20"
        >
          <Image
            src="/Collab_group.png"
            alt="Professional collaboration"
            fill
            priority
            className="object-cover opacity-100"
          />
          {/* Gradient masking for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="max-w-3xl">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Unleash Insights.{' '}
              <span className="text-primary-400">Transform Decisions.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-base md:text-lg text-gray-300 leading-relaxed"
            >
              Transform your business data into actionable insights with our expert data analytics and Power BI dashboard services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={goToContact}
                className="group relative inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-all duration-300"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-md hover:border-gray-400 hover:text-white transition-all duration-300"
              >
                View Our Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


