'use client';

import { motion } from 'framer-motion';
import AnimatedWelcome from '../ui/AnimatedWelcome';
import { siteConfig } from '@/config/site';

export default function HomeSection() {
  return (
    <section id="home" className="min-w-full h-screen snap-start flex items-center justify-center px-4 sm:px-8 md:px-16 pb-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main Content - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
            {/* LEFT: Welcome & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6"
          >

            {/* Welcome Animation */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
              <AnimatedWelcome />
            </div>

            {/* Brand Name */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 tracking-tight">
                {siteConfig.name}
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>{siteConfig.location}</span>
              </div>
            </div>            {/* Motto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="backdrop-blur-sm bg-white/2 border border-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5"
            >
              <p className="text-xs sm:text-sm md:text-base font-light text-gray-200 italic leading-relaxed">
                "{siteConfig.motto}"
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-md bg-white/3 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">About Me</h2>
            </div>

            {/* Content */}
            <div className="space-y-3 sm:space-y-4">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="text-xs sm:text-sm md:text-base font-light text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8"
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
            <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Scroll</span>
            <motion.svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
