'use client';

import { motion } from 'framer-motion';
import { skills } from '@/config/site';

export default function SkillsSection() {
  return (
    <section id="skills" className="min-w-full h-screen snap-start flex items-center justify-center px-4 sm:px-8 md:px-16 pt-20 pb-16 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
      
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
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">Skills & Expertise</h2>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/10"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-light text-gray-200">{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
