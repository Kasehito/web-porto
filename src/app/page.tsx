'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portfolioScrollRef = useRef<HTMLDivElement>(null);
  const experienceScrollRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 5; // Updated: Home, Skills, Experience, Portfolio, Contact
  const isScrollingRef = useRef(false);
  const isRestoringRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [isPortfolioScrollable, setIsPortfolioScrollable] = useState(false);
  const [isPortfolioAtBottom, setIsPortfolioAtBottom] = useState(false);
  const [isExperienceScrollable, setIsExperienceScrollable] = useState(false);
  const [isExperienceAtBottom, setIsExperienceAtBottom] = useState(false);

  // Restore section from sessionStorage on mount (e.g. back from portfolio detail)
  useEffect(() => {
    const saved = sessionStorage.getItem('currentSection');
    if (saved !== null) {
      sessionStorage.removeItem('currentSection');
      const index = parseInt(saved, 10);
      isRestoringRef.current = true;
      setCurrentSection(index);
      // Instant jump — skip smooth animation so it doesn't flash Home first
      const container = containerRef.current;
      if (container) {
        container.scrollLeft = index * window.innerWidth;
      }
      // Reset flag after a tick
      setTimeout(() => { isRestoringRef.current = false; }, 50);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    const checkExperienceScroll = () => {
      const experienceScroll = experienceScrollRef.current;
      if (experienceScroll) {
        const hasScroll = experienceScroll.scrollHeight > experienceScroll.clientHeight;
        setIsExperienceScrollable(hasScroll);
        
        // Check if already at bottom
        const isAtBottom = Math.abs(experienceScroll.scrollHeight - experienceScroll.clientHeight - experienceScroll.scrollTop) < 5;
        setIsExperienceAtBottom(isAtBottom);
      }
    };

    // Check on mount and when section changes
    checkPortfolioScroll();
    checkExperienceScroll();
    
    // Add small delay to ensure content is rendered
    const timer = setTimeout(() => {
      checkPortfolioScroll();
      checkExperienceScroll();
    }, 100);
    
    window.addEventListener('resize', checkPortfolioScroll);
    window.addEventListener('resize', checkExperienceScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkPortfolioScroll);
      window.removeEventListener('resize', checkExperienceScroll);
    };
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

  // Monitor experience scroll position
  useEffect(() => {
    const experienceScroll = experienceScrollRef.current;
    if (!experienceScroll) return;

    const handleExperienceScroll = () => {
      const isAtBottom = Math.abs(experienceScroll.scrollHeight - experienceScroll.clientHeight - experienceScroll.scrollTop) < 5;
      setIsExperienceAtBottom(isAtBottom);
    };

    experienceScroll.addEventListener('scroll', handleExperienceScroll);
    return () => experienceScroll.removeEventListener('scroll', handleExperienceScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll vertikal untuk menggerakkan horizontal
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;

      // If we're in Experience section (index 2)
      if (currentSection === 2) {
        const experienceScroll = experienceScrollRef.current;
        if (experienceScroll) {
          // Check if experience has scrollable content
          const hasScroll = experienceScroll.scrollHeight > experienceScroll.clientHeight;
          
          if (hasScroll) {
            const delta = e.deltaY;
            const scrollMultiplier = 2; // Increase scroll speed (2x faster)
            const scrollTop = experienceScroll.scrollTop;
            const scrollHeight = experienceScroll.scrollHeight;
            const clientHeight = experienceScroll.clientHeight;
            const isAtTop = scrollTop <= 1; // Allow 1px tolerance
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // Allow 1px tolerance

            // If scrolling down and not at bottom, scroll the experience content
            if (delta > 0 && !isAtBottom) {
              experienceScroll.scrollTop += delta * scrollMultiplier;
              return;
            }
            // If scrolling up and not at top, scroll the experience content
            else if (delta < 0 && !isAtTop) {
              experienceScroll.scrollTop += delta * scrollMultiplier;
              return;
            }
          }
        }
      }

      // If we're in Portfolio section (index 3)
      if (currentSection === 3) {
        const portfolioScroll = portfolioScrollRef.current;
        if (portfolioScroll) {
          // Check if portfolio has scrollable content
          const hasScroll = portfolioScroll.scrollHeight > portfolioScroll.clientHeight;
          
          if (hasScroll) {
            const delta = e.deltaY;
            const scrollMultiplier = 2; // Increase scroll speed (2x faster)
            const scrollTop = portfolioScroll.scrollTop;
            const scrollHeight = portfolioScroll.scrollHeight;
            const clientHeight = portfolioScroll.clientHeight;
            const isAtTop = scrollTop <= 1; // Allow 1px tolerance
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // Allow 1px tolerance

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

    // ── Touch / swipe support for mobile ──────────────────────────────────
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const dx = e.touches[0].clientX - touchStartRef.current.x;
      const dy = e.touches[0].clientY - touchStartRef.current.y;

      // Only handle predominantly vertical swipes
      if (Math.abs(dy) <= Math.abs(dx)) return;

      // Inner scroll for Experience section (index 2)
      if (currentSection === 2) {
        const experienceScroll = experienceScrollRef.current;
        if (experienceScroll && experienceScroll.scrollHeight > experienceScroll.clientHeight) {
          const atTop = experienceScroll.scrollTop <= 1;
          const atBottom = experienceScroll.scrollTop + experienceScroll.clientHeight >= experienceScroll.scrollHeight - 1;
          if ((dy < 0 && !atBottom) || (dy > 0 && !atTop)) {
            e.preventDefault();
            experienceScroll.scrollTop -= dy;
            touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            return;
          }
        }
      }

      // Inner scroll for Portfolio section (index 3)
      if (currentSection === 3) {
        const portfolioScroll = portfolioScrollRef.current;
        if (portfolioScroll && portfolioScroll.scrollHeight > portfolioScroll.clientHeight) {
          const atTop = portfolioScroll.scrollTop <= 1;
          const atBottom = portfolioScroll.scrollTop + portfolioScroll.clientHeight >= portfolioScroll.scrollHeight - 1;
          if ((dy < 0 && !atBottom) || (dy > 0 && !atTop)) {
            e.preventDefault();
            portfolioScroll.scrollTop -= dy;
            touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            return;
          }
        }
      }

      // Prevent default to avoid browser scroll interfering
      if (Math.abs(dy) > 10) e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || isScrollingRef.current) {
        touchStartRef.current = null;
        return;
      }

      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      touchStartRef.current = null;

      const SWIPE_THRESHOLD = 50;

      // Horizontal swipe → change section
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        isScrollingRef.current = true;
        if (dx < 0 && currentSection < totalSections - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (dx > 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
        setTimeout(() => { isScrollingRef.current = false; }, 800);
        return;
      }

      // Vertical swipe → change section (when inner scroll is exhausted)
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > SWIPE_THRESHOLD) {
        isScrollingRef.current = true;
        if (dy < 0 && currentSection < totalSections - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (dy > 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
        setTimeout(() => { isScrollingRef.current = false; }, 800);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection]);

  // Scroll to current section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Skip smooth scroll when restoring from sessionStorage (already jumped instantly)
    if (isRestoringRef.current) return;
    const sectionWidth = window.innerWidth;
    container.scrollTo({
      left: currentSection * sectionWidth,
      behavior: 'smooth'
    });
  }, [currentSection]);

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar onNavigate={setCurrentSection} currentSection={currentSection} />
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
        <ExperienceSection ref={experienceScrollRef} />
        <PortfolioSection ref={portfolioScrollRef} />
        <ContactSection />
      </main>
    </div>
  );
}
