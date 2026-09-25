import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' (gradient) | 'navy' (dark navy) | 'secondary' (white with dark border) | 'outline' | 'ghost'
  className = '',
  icon: Icon,
  showArrow = false,
  ...props
}) {
  const baseStyles = 'group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 select-none';
  
  const variants = {
    // Yuvantaa gradient accent
    primary: 'bg-brand-gradient text-white shadow-brand-glow hover:brightness-105 hover:shadow-brand-glow-lg hover:-translate-y-0.5',
    
    // Dark navy option
    navy: 'bg-navy-900 text-white border border-white/10 hover:bg-navy-800 hover:border-white/25 hover:-translate-y-0.5 shadow-controlled-md',
    
    // Secondary: white/light with dark border
    secondary: 'bg-surface-white text-navy-900 border border-navy-900/30 hover:border-navy-900 hover:bg-surface-warm hover:-translate-y-0.5 shadow-controlled-sm',
    
    // Outline option
    outline: 'border border-brand-coral/40 text-brand-coral hover:bg-brand-coral/10 hover:-translate-y-0.5',
    
    // Ghost
    ghost: 'text-content-secondary hover:text-content-primary hover:bg-black/5'
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const renderIcon = () => {
    if (Icon) {
      return (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      );
    }
    if (showArrow) {
      return (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      );
    }
    return null;
  };

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles} {...props}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
