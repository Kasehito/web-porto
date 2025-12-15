'use client';

import { motion } from 'framer-motion';
import { education } from '@/config/site';

export default function EducationSection() {
  return (
    <section id="education" className="min-w-full h-screen snap-start flex items-center justify-center px-4 sm:px-8 md:px-16 pt-20 pb-16 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <div className="inline-block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">Education</h2>
            </div>
          </div>
        </motion.div>

        {/* Education Items */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/10"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">{item.degree}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">{item.field}</p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="truncate">{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      {item.year}
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 inline-block">
                    <span className="text-[10px] sm:text-xs text-gray-300">{item.institution}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
