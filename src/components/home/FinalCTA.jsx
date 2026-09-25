import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';
import Button from '../ui/Button';
import { brandInfo } from '../../data/navigation';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface-white relative overflow-hidden" id="contact-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Deep Navy Rounded Panel Echoing the Business Card Design */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl lg:rounded-4xl bg-navy-900 border border-white/10 shadow-controlled-xl overflow-hidden p-6 sm:p-12 lg:p-18 text-white"
        >
          {/* Sweeping Radiant Orange/Pink Curve from Business Card Artwork */}
          <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden opacity-95">
            <svg
              viewBox="0 0 700 500"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="finalCtaCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6026" />
                  <stop offset="50%" stopColor="#FF1E56" />
                  <stop offset="100%" stopColor="#D80075" />
                </linearGradient>
                <filter id="ctaGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#FF1E56" floodOpacity="0.45" />
                </filter>
              </defs>
              <path
                d="M 280 0 C 420 100 160 300 360 420 C 440 470 560 490 700 500 L 700 0 Z"
                fill="#040B13"
                opacity="0.5"
              />
              <path
                d="M 280 0 C 420 100 160 300 360 420 C 440 470 560 490 700 500"
                stroke="url(#finalCtaCurveGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#ctaGlowFilter)"
              />
            </svg>
          </div>

          {/* Ambient Lighting Glows */}
          <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-brand-coral/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          {/* Precision Dot Matrix Texture */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
          />

          <div className="relative z-10 max-w-3xl space-y-6 text-center sm:text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-coral">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-ping" />
              <span>START A CONVERSATION</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-white tracking-tight leading-[1.12]">
              READY TO MOVE YOUR <br />
              <span className="gradient-text">BUSINESS FORWARD?</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-body sm:text-body-lg text-slate-300 leading-relaxed max-w-2xl">
              Tell us what you're trying to achieve and start a conversation about the right digital solution for your business.
            </p>

            {/* Buttons: Full width on mobile (<640px) */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button to="/contact" variant="primary" showArrow className="w-full sm:w-auto !px-8 !py-4 text-sm font-bold">
                Start a Conversation
              </Button>
              
              <Button
                href={brandInfo.whatsappUrl}
                variant="secondary"
                icon={MessageSquare}
                className="w-full sm:w-auto !px-8 !py-4 text-sm font-bold !bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Contact Badges Echoing Business Card Details */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-300">
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <span>+91 {brandInfo.phone}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-brand-coral" />
                </div>
                <span className="truncate">{brandInfo.email}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-magenta/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-brand-magenta" />
                </div>
                <span>{brandInfo.location}</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
