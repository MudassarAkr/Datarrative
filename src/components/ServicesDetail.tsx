'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    image: '/Collaboration.jpeg',
    title: 'Data Analysis',
    desc: 'Transform raw data into clear answers. We clean, model and analyze your datasets to uncover patterns and opportunities that drive decisions.',
    bullets: ['Exploratory data analysis', 'KPI design & governance', 'Segmentation & cohorts'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    image: '/Power_BI.jpeg',
    title: 'Power BI Dashboards',
    desc: 'Interactive, real‑time dashboards tailored to roles. Reliable models, performant DAX, and pixel‑perfect layouts for every device.',
    bullets: ['Data modeling & DAX', 'Row‑level security', 'Theming & layout systems'],
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    image: '/Dashboard_map.jpeg',
    title: 'Reports & Insights',
    desc: 'Executive‑ready reports with context and commentary. Automated refresh and distribution so the right people get the right insights on time.',
    bullets: ['Automated reporting', 'Narrative insights', 'Distribution & alerts'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    image: '/Custom.jpeg',
    title: 'Custom Solutions',
    desc: 'Bespoke analytics workflows that fit your business: integrations, data pipelines, and tailored visuals that answer your exact questions.',
    bullets: ['Integrations & pipelines', 'Custom visuals', 'Performance optimization'],
    color: 'from-orange-500 to-rose-500',
  },
];

export default function ServicesDetail() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Practical analytics that deliver measurable impact. Explore how we help teams move from data to decisions.
          </p>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200"
            >
                <div className="relative w-full h-44 mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{s.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* How we work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Workshops to understand goals, users, and data landscape.' },
              { step: '02', title: 'Design', desc: 'Model design, metrics, and wireframes aligned to KPIs.' },
              { step: '03', title: 'Deliver', desc: 'Iterative build, validation, handover, and enablement.' },
            ].map((p, idx) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold flex items-center justify-center mb-4 shadow-lg">{p.step}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start a project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



