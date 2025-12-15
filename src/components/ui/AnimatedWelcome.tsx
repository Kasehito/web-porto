'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { welcomeTexts } from '@/config/site';

export default function AnimatedWelcome() {  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % welcomeTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-20 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            {welcomeTexts[currentIndex].text}
          </h3>
          <p className="text-[10px] md:text-xs text-gray-400 font-light tracking-wide">
            {welcomeTexts[currentIndex].lang}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
