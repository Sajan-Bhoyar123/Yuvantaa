import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code, Megaphone, Cpu, Phone, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { brandInfo } from '../../data/navigation';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const visualVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] } }
};

const pillars = [
  { icon: Code,     label: 'BUSINESS GROWTH',   sub: 'Web • Marketing • Digital Presence',   color: '#FF6026', num: '01' },
  { icon: Megaphone,label: 'CREATIVE SERVICES',  sub: 'Video • Thumbnails • Graphic Design',   color: '#FF1E56', num: '02' },
  { icon: Cpu,      label: 'AI SOLUTIONS',       sub: 'Autonomous Agents • Automation • Analytics', color: '#D80075', num: '03' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-white pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-20 lg:pb-32">

      {/* ── Ambient background glows ── */}
      <div className="absolute -top-32 -left-40 w-[500px] h-[500px] bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-coral/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[250px] bg-brand-magenta/5 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Dot grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ═══════════════════════════════════════
              LEFT CONTENT COLUMN
          ═══════════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Eyebrow pill */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral/8 border border-brand-coral/20 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-coral shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse shrink-0" />
                {brandInfo.positioning}
                <Sparkles className="w-3 h-3 opacity-70" />
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display tracking-tight text-content-primary leading-[1.0]">
                INNOVATE.<br />
                ELEVATE.<br />
                <span className="gradient-text">TRANSFORM.</span>
              </h1>
            </motion.div>

            {/* Decorative underline */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta" />
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              variants={itemVariants}
              className="text-body sm:text-body-lg text-content-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Yuvantaa Digitals brings digital growth, creative services and AI-powered solutions together — helping businesses build stronger digital experiences, reach the right audience and work smarter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-1 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <Button to="/services" variant="primary" showArrow className="w-full xs:w-auto !px-7 !py-3.5 text-sm">
                Explore Services
              </Button>
              <Button to="/contact" variant="secondary" showArrow className="w-full xs:w-auto !px-7 !py-3.5 text-sm">
                Let's Talk
              </Button>
            </motion.div>

            {/* Metrics row */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8"
            >
              {[
                { value: '3 Pillars', label: 'Growth • Creative • AI' },
                { value: 'Pune, India', label: 'Maharashtra Based' },
                { value: '4+', label: 'Active Brands Managed' },
              ].map((m, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="hidden sm:block w-px h-8 bg-slate-200" />}
                  <div className="text-center lg:text-left">
                    <span className="font-heading font-bold text-sm sm:text-base text-content-primary block">{m.value}</span>
                    <span className="text-xs text-content-secondary">{m.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════
              RIGHT VISUAL CARD
          ═══════════════════════════════════════ */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-5 relative w-full max-w-[520px] mx-auto lg:max-w-none"
          >
            {/* Glow halo behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/15 via-brand-coral/10 to-brand-magenta/15 rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Card */}
            <div className="relative rounded-3xl lg:rounded-4xl bg-navy-900 border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8">

              {/* Ambient glow inside card */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,96,38,0.25)_0%,rgba(255,30,86,0.18)_30%,transparent_65%)] pointer-events-none" />

              {/* Animated curve */}
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.018, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none"
              >
                <svg viewBox="0 0 450 550" preserveAspectRatio="none" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="hCG" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6026" />
                      <stop offset="45%" stopColor="#FF1E56" />
                      <stop offset="100%" stopColor="#D80075" />
                    </linearGradient>
                    <filter id="hGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#FF1E56" floodOpacity="0.4" />
                    </filter>
                  </defs>
                  <path d="M 120 0 C 220 140 100 280 240 420 C 310 490 380 520 450 550" stroke="url(#hCG)" strokeWidth="3.5" strokeLinecap="round" filter="url(#hGlow)" />
                </svg>
              </motion.div>

              {/* Dot matrix */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

              {/* Rings */}
              <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute -top-7 -right-7 w-40 h-40 rounded-full border border-brand-orange/15 pointer-events-none" />

              {/* Brand top */}
              <div className="relative z-10 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/6 border border-white/12 text-[10px] text-slate-300 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  Official Visual Architecture
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-wider text-transparent bg-clip-text bg-brand-gradient leading-none">
                  YUVANTAA
                </h3>
                <p className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-white uppercase -mt-0.5">
                  DIGITALS
                </p>
              </div>

              {/* Pillar nodes */}
              <div className="relative z-10 space-y-2.5 mb-5">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.num} className="group/node flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${p.color}22`, border: `1.5px solid ${p.color}40` }}>
                          <Icon className="w-4 h-4" style={{ color: p.color }} />
                        </div>
                        <div>
                          <h4 className="text-[11px] sm:text-xs font-heading font-bold text-white tracking-wide">{p.label}</h4>
                          <p className="text-[9px] sm:text-[10px] text-slate-400">{p.sub}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold group-hover/node:translate-x-1 transition-transform" style={{ color: p.color }}>{p.num} →</span>
                    </div>
                  );
                })}
              </div>

              {/* Card bottom */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 block">Brand Statement</span>
                  <span className="text-[11px] sm:text-xs font-heading font-bold tracking-wider text-transparent bg-clip-text bg-brand-gradient">{brandInfo.statement}</span>
                </div>
                <a
                  href={`tel:${brandInfo.phone}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-[10px] sm:text-[11px] text-slate-200 hover:text-white hover:border-brand-coral hover:bg-brand-coral/15 transition-all duration-200"
                >
                  <Phone className="w-3 h-3 text-brand-orange" />
                  <span>{brandInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-surface-white border border-slate-200/90 shadow-xl text-content-primary z-20"
            >
              <span className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
              <span className="text-xs font-heading font-semibold whitespace-nowrap">Smart Solutions For A Digital Future</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer select-none"
          >
            <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
