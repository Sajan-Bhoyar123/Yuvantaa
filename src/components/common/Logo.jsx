import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '', showTagline = false }) {
  // variant: 'dark' (on dark background -> white DIGITALS), 'light' (on light background -> dark navy DIGITALS)
  const digitalsColor = variant === 'light' ? '#080C16' : '#FFFFFF';

  return (
    <Link to="/" className={`inline-flex flex-col ${className} group`} aria-label="Yuvantaa Digitals Home">
      <div className="flex items-center">
        <svg
          viewBox="0 0 280 50"
          className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Signature Gradient: Orange -> Coral/Red -> Magenta */}
            <linearGradient id="yuvantaaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6A1A" />
              <stop offset="35%" stopColor="#FF334B" />
              <stop offset="70%" stopColor="#FA1E6A" />
              <stop offset="100%" stopColor="#D80075" />
            </linearGradient>
            <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#FF2E55" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* YUVANT */}
          <g filter="url(#subtleGlow)">
            {/* Y */}
            <path d="M10 8 L21 24 L21 38 M32 8 L21 24" stroke="url(#yuvantaaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* U */}
            <path d="M42 8 L42 27 C42 34 46 38 53 38 C60 38 64 34 64 27 L64 8" stroke="url(#yuvantaaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* V */}
            <path d="M74 8 L84 38 L94 8" stroke="url(#yuvantaaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* A */}
            <path d="M103 38 L114 8 L125 38 M106 28 L122 28" stroke="url(#yuvantaaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* N */}
            <path d="M135 38 L135 8 L154 38 L154 8" stroke="url(#yuvantaaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* T */}
            <path d="M162 8 L184 8 M173 8 L173 38" stroke="url(#yuvantaaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Iconic Double AA Stylized Connected Infinity Loop */}
            <path
              d="M192 38 L202 12 C206 7 215 7 219 14 C224 23 226 29 231 34 C236 39 245 38 249 32 C253 25 252 14 246 10 C240 6 232 8 226 18 C220 28 214 38 206 38 Z"
              stroke="url(#yuvantaaGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M228 17 C234 9 242 8 248 12 C254 17 254 27 248 33 C242 38 234 36 228 29 L220 18 C215 11 208 9 202 14 C197 19 196 28 201 34 L204 38"
              stroke="url(#yuvantaaGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Underline or DIGITALS text */}
        </svg>
      </div>

      {/* DIGITALS tracked subtitle matching the artwork */}
      <div className="flex items-center justify-between pl-1 pr-3 -mt-1">
        <span
          className="font-heading font-extrabold text-[12px] md:text-[13px] tracking-[0.42em] uppercase transition-colors"
          style={{ color: digitalsColor }}
        >
          DIGITALS
        </span>
      </div>

      {showTagline && (
        <span className="text-[10px] tracking-wider text-slate-400 font-medium pl-1 mt-0.5 uppercase">
          Your Digital Growth Partner
        </span>
      )}
    </Link>
  );
}
