'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/config/site';

export default function ContactSection() {
  return (
    <section id="contact" className="min-w-full h-screen snap-start flex items-center justify-center px-4 sm:px-8 md:px-16 pt-20 pb-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl w-full h-full flex flex-col justify-center py-4 sm:py-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <div className="inline-block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">Let's Connect</h2>
            </div>
          </div>
        </motion.div>        {/* Main Content - Flex Layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 min-h-0">
          {/* Left Side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex flex-col"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/10"
                >
                  <div className="p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center text-sm sm:text-base group-hover:scale-110 transition-transform shrink-0">
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[10px] sm:text-xs font-semibold mb-0.5 group-hover:text-white transition-colors truncate">
                        {link.name}
                      </h3>
                      <p className="text-[8px] sm:text-[9px] text-gray-400 font-light truncate">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5 flex flex-col"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-2xl flex-1 flex flex-col">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <h3 className="text-sm sm:text-base font-semibold">Send Message</h3>
              </div>

              <form className="space-y-2 sm:space-y-3 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label htmlFor="name" className="block text-[9px] sm:text-[10px] font-light mb-1 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-2 py-1.5 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-xs backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg focus:border-white focus:bg-white/10 outline-none transition-all font-light placeholder:text-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[9px] sm:text-[10px] font-light mb-1 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-2 py-1.5 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-xs backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg focus:border-white focus:bg-white/10 outline-none transition-all font-light placeholder:text-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-[9px] sm:text-[10px] font-light mb-1 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full flex-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-xs backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg focus:border-white focus:bg-white/10 outline-none transition-all font-light resize-none placeholder:text-gray-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-1.5 sm:py-2 bg-white text-black rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-gray-200 transition-all duration-300 tracking-wide shadow-lg shadow-white/20 flex items-center justify-center gap-1.5 sm:gap-2 group"
                >
                  <span>Send Message</span>
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div></div>
    </section>
  );
}
