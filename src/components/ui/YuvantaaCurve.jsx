import React from 'react';

/**
 * Reusable Sweeping Curve Component - Yuvantaa Digitals
 * Recreates the signature deep navy shape with the orange/coral/pink gradient edge
 * from the official reference artwork.
 */
export default function YuvantaaCurve({
  className = '',
  variant = 'divider', // 'divider' | 'card-accent' | 'split'
  flip = false
}) {
  if (variant === 'card-accent') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 500 300"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradientCard" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6026" />
              <stop offset="50%" stopColor="#FF1E56" />
              <stop offset="100%" stopColor="#D80075" />
            </linearGradient>
          </defs>
          <path
            d="M 500 0 C 400 40 320 120 300 180 C 280 240 200 290 120 300 L 500 300 Z"
            fill="#071321"
          />
          <path
            d="M 500 0 C 400 40 320 120 300 180 C 280 240 200 290 120 300"
            stroke="url(#curveGradientCard)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'split') {
    return (
      <div className={`absolute top-0 right-0 h-full w-1/2 pointer-events-none hidden lg:block overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 400 600"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradientSplit" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6026" />
              <stop offset="45%" stopColor="#FF1E56" />
              <stop offset="100%" stopColor="#D80075" />
            </linearGradient>
            <filter id="curveGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#FF1E56" floodOpacity="0.4" />
            </filter>
          </defs>
          {/* Deep Navy Backdrop Panel */}
          <path
            d="M 80 0 C 140 150 20 320 90 480 C 120 540 180 580 220 600 L 400 600 L 400 0 Z"
            fill="#071321"
          />
          {/* Sweeping Gradient Edge */}
          <path
            d="M 80 0 C 140 150 20 320 90 480 C 120 540 180 580 220 600"
            stroke="url(#curveGradientSplit)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#curveGlow)"
          />
        </svg>
      </div>
    );
  }

  // Default: Responsive Section Divider
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20 lg:h-28 block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curveGradientDivider" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6026" />
            <stop offset="50%" stopColor="#FF1E56" />
            <stop offset="100%" stopColor="#D80075" />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 C 380 90 760 110 1120 40 C 1260 15 1370 20 1440 35 L 1440 120 L 0 120 Z"
          fill="#071321"
        />
        <path
          d="M 0 0 C 380 90 760 110 1120 40 C 1260 15 1370 20 1440 35"
          stroke="url(#curveGradientDivider)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
