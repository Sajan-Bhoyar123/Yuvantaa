import React from 'react';

/**
 * Reusable Card component for Yuvantaa Digitals
 * Rounded, premium, clean, with thin subtle borders and soft controlled shadows.
 */
export default function Card({
  children,
  variant = 'light', // 'light' | 'dark' | 'gradient-border'
  className = '',
  hoverEffect = true,
  ...props
}) {
  const baseStyles = 'rounded-3xl transition-all duration-300 relative';
  
  const variants = {
    light: 'bg-surface-white border border-slate-200/80 shadow-controlled-md text-content-primary',
    dark: 'bg-navy-900 border border-white/10 shadow-controlled-lg text-white',
    'gradient-border': 'bg-navy-900 text-white relative rounded-3xl p-[1.5px] bg-gradient-to-br from-brand-orange via-brand-coral to-brand-magenta shadow-controlled-lg'
  };

  const hoverStyles = hoverEffect ? 'hover:-translate-y-1 hover:shadow-controlled-xl' : '';

  if (variant === 'gradient-border') {
    return (
      <div className={`${variants['gradient-border']} ${hoverStyles} ${className}`} {...props}>
        <div className="bg-navy-900 rounded-[calc(1.75rem-1.5px)] h-full w-full p-6 md:p-8">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${variants[variant] || variants.light} ${hoverStyles} p-6 md:p-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
