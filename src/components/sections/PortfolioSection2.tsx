'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import PlaceholderThumbnail from '../ui/PlaceholderThumbnail';
import { portfolioItems, portfolioCategories } from '@/config/site';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');
  const categories = portfolioCategories;
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(filter as never));

  return (
    <SectionWrapper id="portfolio" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-gray-400 font-light">
            A collection of my creative work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 border transition-all duration-300 ${
                filter === category
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/30 hover:border-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-zinc-800 overflow-hidden mb-4">
                  <PlaceholderThumbnail number={item.id} category={item.categories[0]} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">
                      {item.title}
                    </h3>                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.categories.join(' · ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-light">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
