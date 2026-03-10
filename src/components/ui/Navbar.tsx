'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { navItems } from '@/config/site';

interface NavbarProps {
  onNavigate?: (index: number) => void;
  currentSection?: number;
}

export default function Navbar({ onNavigate, currentSection = 0 }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (index: number) => {
    onNavigate?.(index);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => handleNav(0)}>
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider">KASEHITOWORKS</span>
            </motion.div>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNav(index)}
                  className={`text-sm md:text-base transition-colors duration-300 font-light tracking-wide ${
                    currentSection === index ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-white block" />
            <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-0.5 bg-white block" />
            <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-white block" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10 overflow-hidden"
          >
            <ul className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNav(index)}
                    className={`block w-full text-left py-2.5 text-lg transition-colors duration-300 font-light tracking-wide ${
                      currentSection === index ? 'text-white' : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
