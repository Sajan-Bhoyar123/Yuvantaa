import React from 'react';
import YuvantaaCurve from './YuvantaaCurve';

/**
 * SignaturePanel component for Yuvantaa Digitals
 * Distinctive deep navy rounded container with sweeping orange/pink gradient curve motif.
 */
export default function SignaturePanel({
  children,
  className = '',
  withCurve = true,
  ...props
}) {
  return (
    <div
      className={`signature-panel relative p-8 md:p-14 rounded-3xl border border-white/10 shadow-controlled-xl overflow-hidden ${className}`}
      {...props}
    >
      {withCurve && (
        <>
          <div className="signature-curve-glow" aria-hidden="true" />
          <YuvantaaCurve variant="card-accent" />
        </>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
