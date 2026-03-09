'use client';

import { motion } from 'framer-motion';
import { useState, forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlaceholderThumbnail from '../ui/PlaceholderThumbnail';
import { portfolioItems, portfolioCategories } from '@/config/site';

// Extract YouTube video ID from various URL formats
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    /(?:youtube\.com\/shorts\/)([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

const PortfolioSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [filter, setFilter] = useState('All');
  const categories = portfolioCategories;  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(filter as never));
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
                className="group cursor-pointer"              >
                <Link
                  href={`/portfolio/${item.id}`}
                  className="block"
                >
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/10">                    <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                      {(() => {
                        const ytThumb = item.videoUrl ? getYouTubeThumbnail(item.videoUrl) : null;
                        const src = ytThumb ?? (item.thumbnail !== '/placeholder-1.jpg' ? item.thumbnail : null);

                        return src ? (
                          <Image
                            src={src}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            onError={(e) => {
                              // If YouTube maxres fails → try hqdefault
                              if (ytThumb && item.videoUrl) {
                                const id = getYouTubeId(item.videoUrl);
                                if (id) {
                                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                                  return;
                                }
                              }
                              // Final fallback: hide image to show placeholder below
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <PlaceholderThumbnail number={item.id} category={item.categories[0]} />
                        );
                      })()}

                      <div className="absolute inset-0 backdrop-blur-sm bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-light text-white/80 uppercase tracking-wide">View Project</span>
                      </div>                    </div>                    <div className="p-4">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.categories.map((cat) => (
                          <span key={cat} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/70">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm font-semibold mb-1 group-hover:text-white transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-light line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
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
