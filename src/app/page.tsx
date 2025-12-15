'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portfolioScrollRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 5;
  const isScrollingRef = useRef(false);
  const [isPortfolioScrollable, setIsPortfolioScrollable] = useState(false);
  const [isPortfolioAtBottom, setIsPortfolioAtBottom] = useState(false);

  // Check if portfolio section has scrollable content
  useEffect(() => {
    const checkPortfolioScroll = () => {
      const portfolioScroll = portfolioScrollRef.current;
      if (portfolioScroll) {
        const hasScroll = portfolioScroll.scrollHeight > portfolioScroll.clientHeight;
        setIsPortfolioScrollable(hasScroll);
        
        // Check if already at bottom
        const isAtBottom = Math.abs(portfolioScroll.scrollHeight - portfolioScroll.clientHeight - portfolioScroll.scrollTop) < 5;
        setIsPortfolioAtBottom(isAtBottom);
      }
    };

    checkPortfolioScroll();
    window.addEventListener('resize', checkPortfolioScroll);
    
    return () => window.removeEventListener('resize', checkPortfolioScroll);
  }, [currentSection]);

  // Monitor portfolio scroll position
  useEffect(() => {
    const portfolioScroll = portfolioScrollRef.current;
    if (!portfolioScroll) return;

    const handlePortfolioScroll = () => {
      const isAtBottom = Math.abs(portfolioScroll.scrollHeight - portfolioScroll.clientHeight - portfolioScroll.scrollTop) < 5;
      setIsPortfolioAtBottom(isAtBottom);
    };

    portfolioScroll.addEventListener('scroll', handlePortfolioScroll);
    return () => portfolioScroll.removeEventListener('scroll', handlePortfolioScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll vertikal untuk menggerakkan horizontal
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;

      // If we're in portfolio section (index 3)
      if (currentSection === 3) {
        const portfolioScroll = portfolioScrollRef.current;
        if (portfolioScroll && isPortfolioScrollable) {
          const delta = e.deltaY;
          const scrollMultiplier = 2; // Increase scroll speed (2x faster)
          const isAtTop = portfolioScroll.scrollTop === 0;
          const isAtBottom = Math.abs(portfolioScroll.scrollHeight - portfolioScroll.clientHeight - portfolioScroll.scrollTop) < 5;

          // If scrolling down and not at bottom, scroll the portfolio content
          if (delta > 0 && !isAtBottom) {
            portfolioScroll.scrollTop += delta * scrollMultiplier;
            return;
          }
          // If scrolling up and not at top, scroll the portfolio content
          else if (delta < 0 && !isAtTop) {
            portfolioScroll.scrollTop += delta * scrollMultiplier;
            return;
          }
        }
      }
      
      const delta = e.deltaY;
      const threshold = 50; // Minimum scroll untuk trigger section change
      
      if (Math.abs(delta) > threshold) {
        isScrollingRef.current = true;
        
        if (delta > 0 && currentSection < totalSections - 1) {
          // Scroll down -> Move right
          setCurrentSection(prev => prev + 1);
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up -> Move left
          setCurrentSection(prev => prev - 1);
        }
        
        // Reset scroll lock after animation
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentSection < totalSections - 1) {
        e.preventDefault();
        isScrollingRef.current = true;
        setCurrentSection(prev => prev + 1);
        setTimeout(() => { isScrollingRef.current = false; }, 800);
      } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentSection > 0) {
        e.preventDefault();
        isScrollingRef.current = true;
        setCurrentSection(prev => prev - 1);
        setTimeout(() => { isScrollingRef.current = false; }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  // Scroll to current section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const sectionWidth = window.innerWidth;
    container.scrollTo({
      left: currentSection * sectionWidth,
      behavior: 'smooth'
    });
  }, [currentSection]);

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />
      <Footer />
      
      {/* Section Indicators */}
      <div className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 sm:gap-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-white h-6 sm:h-8' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      <main 
        ref={containerRef}
        className="flex h-screen overflow-x-hidden overflow-y-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          main::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <HomeSection />
        <SkillsSection />
        <EducationSection />
        <PortfolioSection ref={portfolioScrollRef} />
        <ContactSection />
      </main>
    </div>
  );
}
