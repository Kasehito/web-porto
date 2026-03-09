'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { experienceItems } from '@/config/site';
import { ExperienceItem } from '@/types';

const typeColors: Record<ExperienceItem['type'], string> = {
  work: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  freelance: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  project: 'bg-green-500/20 text-green-300 border-green-500/40',
  internship: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
};

const typeLabels: Record<ExperienceItem['type'], string> = {
  work: 'Full-time',
  freelance: 'Freelance',
  project: 'Personal',
  internship: 'Internship',
};

const ExperienceSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id="experience"
      className="min-h-screen w-screen flex-shrink-0 snap-start flex items-start justify-center bg-black text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Scrollable content wrapper */}
      <div 
        ref={ref}
        className="w-full h-screen overflow-y-auto overflow-x-hidden px-4 sm:px-8 py-20 relative z-10"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 6px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>

        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Experience
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto font-light">
              My professional journey
            </p>
          </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 hidden sm:block" />

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-12">
            {experienceItems.map((exp, index) => {
              const isEven = index % 2 === 0;
              const badgeColor = typeColors[exp.type];
              const typeLabel = typeLabels[exp.type];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 transform -translate-x-1/2 z-10" />                  {/* Content card */}
                  <div
                    className={`sm:w-1/2 ${
                      isEven ? 'sm:pr-12' : 'sm:pl-12'
                    }`}
                  >
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 text-left">
                      {/* Badge */}
                      <span
                        className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${badgeColor}`}
                      >
                        {typeLabel}
                      </span>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-white/90 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-white/60 font-medium mb-1">
                        {exp.company}
                      </p>

                      {/* Period & Location */}
                      <div className="flex flex-wrap gap-2 text-sm text-white/40 mb-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                        {exp.location && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-2">
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-white/60 flex items-start gap-2"
                              >
                                <span className="text-green-400 mt-1">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center pb-8"
          >
            <p className="text-white/30 text-sm font-light">
              Scroll down to see my portfolio
            </p>
            <div className="mt-4 flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;
