import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { brandInfo, navLinks, socialLinks } from '../../data/navigation';
import { servicePillars } from '../../data/services';
import Logo from './Logo';
import YuvantaaCurve from '../ui/YuvantaaCurve';

// Social Icon helper
function SocialIcon({ type }) {
  switch (type) {
    case 'whatsapp':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.92-.477-1.523-.627-2.506-2.18-2.582-2.281-.077-.101-.617-.82-.617-1.564 0-.744.389-1.109.527-1.261.138-.152.3-.19.4-.19.1 0 .2 0 .288.005.093.004.22-.034.344.264.128.307.436 1.066.474 1.144.038.077.064.168.013.269-.051.1-.076.164-.152.253-.076.088-.16.197-.229.265-.077.076-.157.16-.068.313.09.152.399.658.857 1.066.589.524 1.086.687 1.239.763.153.076.242.067.332-.038.09-.105.385-.449.487-.602.102-.153.204-.127.344-.076.14.051.892.421 1.045.498.153.076.255.114.293.178.038.064.038.371-.106.776zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.957-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      );
    case 'phone':
      return <Phone className="w-4 h-4 text-brand-orange" />;
    case 'email':
      return <Mail className="w-4 h-4 text-brand-coral" />;
    default:
      return <Globe className="w-4 h-4" />;
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white relative pt-16 pb-12 overflow-hidden" role="contentinfo">
      
      {/* Decorative Signature Gradient Separator inspired by reference artwork */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta" />
      
      {/* Subtle sweeping curve glow in background */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Description (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-xs uppercase tracking-widest text-brand-coral font-bold pt-1">
              {brandInfo.positioning}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {brandInfo.description}
            </p>

            {/* Configurable Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-coral hover:bg-brand-coral/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
                  aria-label={`Visit Yuvantaa Digitals on ${item.name}`}
                >
                  <SocialIcon type={item.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-coral" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Pillars (Col 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {servicePillars.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    to={`/services/${pillar.id}`}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral group-hover:scale-125 transition-transform" />
                    <span>{pillar.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs text-slate-300 leading-snug">
                  {brandInfo.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <a
                  href={`tel:${brandInfo.phone}`}
                  className="text-xs text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {brandInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-coral to-brand-magenta flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="text-xs text-slate-300 hover:text-white transition-colors font-medium truncate"
                >
                  {brandInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-coral to-brand-magenta flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5 text-white" />
                </div>
                <a
                  href={`https://${brandInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {brandInfo.website}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {brandInfo.name}. All rights reserved.</p>
          <div className="brand-divider max-w-xs">
            <span className="text-[11px] tracking-widest text-slate-400 uppercase font-semibold">
              {brandInfo.statement}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
