'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10"
    >      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex justify-center items-center">
          <p className="text-gray-500 font-light text-[9px] sm:text-[10px] md:text-xs">
            © {new Date().getFullYear()} KasehitoWorks. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
