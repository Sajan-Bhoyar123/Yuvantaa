import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { brandInfo, navLinks } from '../../data/navigation';
import Button from '../ui/Button';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#080C16]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Authentic Logo */}
          <Logo variant="dark" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? 'text-[#FF1E56] font-semibold' : 'text-slate-300'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${brandInfo.phone}`}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-full bg-white/5 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6026] animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-[#FF6026]" />
              <span>{brandInfo.phone}</span>
            </a>
            <Button to="/contact" variant="primary" className="!px-5 !py-2 text-xs" icon={ArrowUpRight}>
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1D] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-white/10 text-[#FF1E56]' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${brandInfo.phone}`}
              className="flex items-center gap-2 text-sm text-slate-300 px-3 py-1"
            >
              <Phone className="w-4 h-4 text-[#FF6026]" />
              <span>{brandInfo.phone}</span>
            </a>
            <Button
              to="/contact"
              variant="primary"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
