import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, brandInfo } from '../../data/navigation';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Accessibility: Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-white/10 shadow-controlled-md py-3 text-white'
          : 'bg-transparent py-5 text-content-primary'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant={isScrolled ? 'dark' : 'light'} />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral rounded ${
                    isActive
                      ? 'text-brand-coral font-semibold'
                      : isScrolled
                      ? 'text-slate-300 hover:text-white'
                      : 'text-content-primary hover:text-brand-coral'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-coral rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA: Let's Talk → */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 bg-brand-gradient text-white shadow-brand-glow hover:brightness-105 hover:shadow-brand-glow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
              aria-label="Let's Talk - Contact Yuvantaa Digitals"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral ${
                isScrolled
                  ? 'text-white hover:bg-white/10'
                  : 'text-content-primary hover:bg-black/5'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-full bg-navy-900 border-b border-white/10 shadow-controlled-xl px-6 pt-6 pb-8 text-white z-40 max-h-[calc(100vh-80px)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col space-y-3 mb-6">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-white/10 text-brand-coral font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-heading font-semibold text-sm uppercase tracking-wider bg-brand-gradient text-white shadow-brand-glow hover:brightness-105 active:scale-95 transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href={`tel:${brandInfo.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-brand-orange transition-colors"
                  aria-label={`Call ${brandInfo.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call Us</span>
                </a>
                <a
                  href={brandInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-brand-coral transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-brand-coral" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
