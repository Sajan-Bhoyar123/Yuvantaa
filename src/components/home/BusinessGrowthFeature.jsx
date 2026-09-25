import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check, ArrowUpRight, Globe, TrendingUp, Search, Share2, Layers } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';
import Button from '../ui/Button';

const journeySteps = [
  {
    step: '01',
    name: 'DIGITAL PRESENCE',
    desc: 'Professional modern website & brand foundation.'
  },
  {
    step: '02',
    name: 'VISIBILITY',
    desc: 'Targeted reach via search & performance marketing.'
  },
  {
    step: '03',
    name: 'ENGAGEMENT',
    desc: 'Active social media management & community growth.'
  },
  {
    step: '04',
    name: 'INQUIRIES',
    desc: 'Frictionless customer touchpoints & communication.'
  },
  {
    step: '05',
    name: 'GROWTH',
    desc: 'Sustainable audience scale & commercial opportunities.'
  }
];

const connectedServices = [
  { name: 'Website Design & Development', icon: Globe },
  { name: 'Performance Marketing', icon: TrendingUp },
  { name: 'Strong Online Presence', icon: Search },
  { name: 'Social Media Growth', icon: Share2 },
  { name: 'Social Media Management', icon: Layers }
];

export default function BusinessGrowthFeature() {
  return (
    <section className="py-24 lg:py-32 bg-surface-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Deep Navy Feature Panel with Business-Card Inspired Sweeping Curve */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl lg:rounded-4xl bg-navy-900 border border-white/10 shadow-controlled-xl overflow-hidden p-8 sm:p-12 lg:p-16 text-white"
        >
          {/* Sweeping Orange/Pink Curve Along Right/Top Edge (Inspired by Business Card Artwork) */}
          <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none overflow-hidden opacity-90">
            <svg
              viewBox="0 0 700 600"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bgCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6026" />
                  <stop offset="50%" stopColor="#FF1E56" />
                  <stop offset="100%" stopColor="#D80075" />
                </linearGradient>
                <filter id="bgCurveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#FF1E56" floodOpacity="0.35" />
                </filter>
              </defs>
              <path
                d="M 250 0 C 400 120 180 340 380 480 C 480 550 580 580 700 600 L 700 0 Z"
                fill="#040B13"
                opacity="0.45"
              />
              <path
                d="M 250 0 C 400 120 180 340 380 480 C 480 550 580 580 700 600"
                stroke="url(#bgCurveGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#bgCurveGlow)"
              />
            </svg>
          </div>

          {/* Ambient Corner Glow */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          {/* Desktop Split Composition (Left: Narrative & Services, Right: Journey Pipeline) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Narrative, Connected Services (lg:col-span-6 xl:col-span-7) */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>PILLAR 01 — BUSINESS GROWTH</span>
              </div>

              <h2 className="font-h1 tracking-tight text-white leading-tight">
                BUILD A STRONGER <br />
                <span className="gradient-text">DIGITAL PRESENCE</span>
              </h2>

              <p className="text-body text-slate-300 max-w-xl leading-relaxed">
                From your website and social presence to performance marketing, create a stronger digital journey for your business. We engineer every touchpoint to communicate clearly and guide audiences through a cohesive experience.
              </p>

              {/* Connected Services Grid */}
              <div className="pt-4 space-y-3">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">
                  Connected Capabilities
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {connectedServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange/40 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-brand-orange/15 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5 text-brand-orange" />
                        </div>
                        <span className="text-xs font-medium text-slate-200">
                          {service.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <Button to="/services" variant="primary" showArrow>
                  Explore Business Growth Solutions
                </Button>
              </div>

            </div>

            {/* Right Column: Visual Journey Funnel / Pipeline (lg:col-span-6 xl:col-span-5) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-navy-950/70 border border-white/15 backdrop-blur-md shadow-controlled-lg">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider font-heading font-bold text-white">
                    The Growth Journey
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-coral font-semibold">
                    Structured Process
                  </span>
                </div>

                {/* Journey Steps Stack with Connectors */}
                <div className="space-y-4">
                  {journeySteps.map((step, idx) => (
                    <div key={step.step} className="relative">
                      {/* Step Card */}
                      <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-coral/40 transition-colors">
                        <span className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral flex items-center justify-center shrink-0 text-white text-xs font-heading font-extrabold shadow-sm">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                            {step.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Animated/Glowing Down Arrow Connector between steps */}
                      {idx < journeySteps.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown className="w-3.5 h-3.5 text-brand-coral/60 animate-bounce" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <span className="text-[10px] text-slate-400">
                    Sustainable momentum engineered step-by-step
                  </span>
                </div>

              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
