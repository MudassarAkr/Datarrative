'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutBrief() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Contained background image - High Resolution Required (1920x1080 or better) */}
      <div className="absolute inset-4 sm:inset-6 lg:inset-10 z-0 overflow-hidden rounded-3xl">
        <Image
          src="/Landing_about.png"
          alt="About DashCrafters"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto lg:mr-16 lg:ml-auto lg:justify-end flex">
        {/* White floating card modeled after the image inspiration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 max-w-md shadow-2xl ml-auto mr-0"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About DashCrafters
          </h2>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            We design fast, reliable, and intuitive analytics solutions tailored to your goals.
          </p>
          
          <div>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors duration-300"
            >
              Learn more
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



