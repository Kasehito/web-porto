'use client';

import { motion } from 'framer-motion';
import { useState, forwardRef } from 'react';
import PlaceholderThumbnail from '../ui/PlaceholderThumbnail';
import { portfolioItems, portfolioCategories } from '@/config/site';

const PortfolioSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [filter, setFilter] = useState('All');
  const categories = portfolioCategories;

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);
  return (
    <section id="portfolio" className="min-w-full h-screen snap-start flex items-center justify-center px-4 sm:px-8 md:px-16 pt-20 pb-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6 lg:mb-8"
        >
          <div className="inline-block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">Portfolio</h2>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 lg:mb-8 flex-wrap px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                filter === category
                  ? 'bg-white text-black border border-white shadow-lg shadow-white/20'
                  : 'backdrop-blur-md bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>        {/* Portfolio Grid - Scrollable */}
        <div ref={ref} className="h-[calc(100vh-250px)] sm:h-[calc(100vh-280px)] lg:h-[calc(100vh-300px)] overflow-y-auto scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;  /* Chrome, Safari and Opera */
            }
          `}</style>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/10">
                    <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                      <PlaceholderThumbnail number={item.id} category={item.category} />
                      
                      <div className="absolute inset-0 backdrop-blur-sm bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-light text-white/80 uppercase tracking-wide">Watch</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-1 group-hover:text-white transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-light line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

PortfolioSection.displayName = 'PortfolioSection';

export default PortfolioSection;
