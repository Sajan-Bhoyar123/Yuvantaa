import React from 'react';

export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-brand-gradient-subtle border border-brand-coral/25 text-brand-coral ${className}`}>
      {children}
    </span>
  );
}
