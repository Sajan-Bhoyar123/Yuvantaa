import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { pageTransition } from '../animations/pageTransition';
import { useSEO } from '../hooks/useSEO';

export default function MainLayout() {
  const location = useLocation();

  // Dynamically update unique SEO titles, descriptions, and canonical links on navigation
  useSEO();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-surface-white text-content-primary selection:bg-brand-coral selection:text-white">
        
        {/* Accessible Keyboard Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-navy-900 focus:text-white focus:rounded-full focus:shadow-controlled-xl focus:outline-none focus:ring-2 focus:ring-brand-coral text-xs font-heading font-bold"
        >
          Skip to main content
        </a>

        {/* Scroll-to-top handler & accessible back-to-top button */}
        <ScrollToTop />

        {/* Global Navbar */}
        <Navbar />

        {/* Main Content with Animated Route Transition */}
        <main className="flex-1 w-full pt-20" id="main-content" tabIndex="-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Deep Navy Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
