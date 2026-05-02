'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, TrendingUp } from 'lucide-react';

const values = [
  {
    title: "Data-Driven Decisions",
    description: "We believe in the power of data to drive informed business decisions and create competitive advantages.",
  },
  {
    title: "Client-Centric Approach",
    description: "Every solution is tailored to meet your specific business needs and objectives.",
  },
  {
    title: "Continuous Innovation",
    description: "We stay ahead of the curve with the latest technologies and best practices in data analytics.",
  },
  {
    title: "Transparent Communication",
    description: "Clear, honest communication throughout the project lifecycle with regular updates and feedback.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
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
            About <span className="gradient-text">DashCrafters</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are passionate data analytics professionals dedicated to transforming your business intelligence and driving data-driven success.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Founded by data analytics professionals with over 5 years of experience in business intelligence, 
                DashCrafters emerged from a simple belief: every business deserves access to powerful, actionable insights.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We specialize in transforming complex data into clear, actionable insights that drive business growth. 
                Our team combines technical expertise with deep business understanding to deliver solutions that matter.
              </p>
              
              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                  Our Mission
                </h4>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "To empower businesses with data-driven insights that transform decision-making and drive sustainable growth."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/New2.jpeg"
              alt="DashCrafters Team"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you unlock the full potential of your business data.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Project Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


