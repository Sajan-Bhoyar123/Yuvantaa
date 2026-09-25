import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Palette, Cpu, Check, ShieldCheck, MessageSquare } from 'lucide-react';
import { fadeUp } from '../animations/fadeUp';
import { brandInfo } from '../data/navigation';
import { servicePillars } from '../data/services';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const philosophyItems = [
  {
    id: 'grow',
    title: 'GROW',
    subtitle: 'Strategic Digital Footprint',
    description: 'Help businesses establish a commanding presence, reach the right audience, and unlock meaningful commercial opportunities.',
    icon: TrendingUp,
    accentColor: '#FF6026'
  },
  {
    id: 'create',
    title: 'CREATE',
    subtitle: 'High-Impact Communication',
    description: 'Help businesses communicate visually, capture audience attention, and forge a cohesive, memorable brand identity.',
    icon: Palette,
    accentColor: '#FF1E56'
  },
  {
    id: 'automate',
    title: 'AUTOMATE',
    subtitle: 'Intelligent Efficiency',
    description: 'Help businesses streamline repetitive workflows, deploy intelligent autonomous systems, and translate data into clarity.',
    icon: Cpu,
    accentColor: '#D80075'
  }
];

const approachSteps = [
  {
    number: '01',
    name: 'Discover',
    desc: 'Understand the business, audience and objectives.'
  },
  {
    number: '02',
    name: 'Strategize',
    desc: 'Identify the right digital strategy and solution.'
  },
  {
    number: '03',
    name: 'Create',
    desc: 'Design, develop and produce the required work.'
  },
  {
    number: '04',
    name: 'Implement',
    desc: 'Launch the required digital, creative or technology solution.'
  },
  {
    number: '05',
    name: 'Optimize',
    desc: 'Review and improve where necessary.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-surface-white text-content-primary">
      
      {/* ==================================================
          01. HERO SECTION
          ================================================== */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-surface-warm border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <div className="brand-divider max-w-xs mx-auto mb-5">
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
                ABOUT YUVANTAA DIGITALS
              </span>
            </div>

            <h1 className="font-display text-navy-900 tracking-tight mb-6">
              DIGITAL GROWTH MEETS <br />
              <span className="gradient-text">CREATIVITY &amp; TECHNOLOGY</span>
            </h1>

            <p className="text-body-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
              Based in {brandInfo.location}. We are a digital solutions company engineering integrated growth, creative media, and autonomous technology for forward-thinking enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          02. WHO WE ARE SECTION
          ================================================== */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-h1 text-navy-900 tracking-tight leading-tight">
              One Digital Partner for <br />
              <span className="gradient-text">Complete Business Transformation</span>
            </h2>

            <p className="text-body-lg text-content-secondary leading-relaxed font-medium">
              Yuvantaa Digitals brings digital growth, creative services and AI-powered solutions together to help businesses strengthen their digital presence, communicate effectively and adopt smarter technology.
            </p>

            <p className="text-body text-content-secondary leading-relaxed">
              Rather than managing multiple disconnected vendors for web development, video production, and software automation, Yuvantaa Digitals unifies these capabilities into a single strategic partnership.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-semibold uppercase tracking-wider">
              <span>Pune, Maharashtra</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{brandInfo.statement}</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-12 rounded-3xl lg:rounded-4xl bg-navy-900 text-white border border-white/10 shadow-controlled-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-coral block mb-2">
                BRAND FOUNDATION
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight mb-4">
                INNOVATE. ELEVATE. TRANSFORM.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Our mission is simple: provide businesses with modern, well-crafted digital solutions that deliver lasting value without unnecessary complexity.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Integrated engineering and media under one roof</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-coral shrink-0" />
                  <span>Tailored solutions without one-size-fits-all templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-magenta shrink-0" />
                  <span>Direct, transparent communication at every phase</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================================================
          03. OUR PHILOSOPHY SECTION
          ================================================== */}
      <section className="py-24 lg:py-32 bg-surface-warm border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="brand-divider max-w-xs mx-auto mb-4">
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
                CORE PRINCIPLES
              </span>
            </div>

            <h2 className="font-h1 text-navy-900 tracking-tight mb-4">
              OUR <span className="gradient-text">PHILOSOPHY</span>
            </h2>

            <p className="text-body text-content-secondary max-w-xl mx-auto">
              Three fundamental pillars guiding every digital experience we architect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyItems.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-surface-white border border-slate-200/80 shadow-controlled-md hover:shadow-controlled-xl hover:border-brand-coral/40 transition-all duration-300 relative group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.accentColor}12`,
                      border: `1.5px solid ${item.accentColor}30`
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.accentColor }} />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-heading font-extrabold text-2xl text-navy-900 tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          04. OUR CAPABILITIES SECTION
          ================================================== */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="brand-divider max-w-xs mx-auto mb-4">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              WHAT WE DO
            </span>
          </div>

          <h2 className="font-h1 text-navy-900 tracking-tight mb-4">
            OUR <span className="gradient-text">CAPABILITIES</span>
          </h2>

          <p className="text-body text-content-secondary max-w-xl mx-auto">
            Comprehensive services structured across our three core pillars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={idx}
              className="p-8 rounded-3xl bg-surface-white border border-slate-200/80 shadow-controlled-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-coral block mb-2">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="font-heading font-extrabold text-xl text-navy-900 tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Services Included:
                  </span>
                  <ul className="space-y-2">
                    {(pillar.childServices || []).map((c) => (
                      <li key={c.id} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                        <span>{c.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-navy-900 hover:text-brand-coral transition-colors"
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================================================
          05. OUR APPROACH SECTION
          ================================================== */}
      <section className="py-24 lg:py-32 bg-surface-warm border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="brand-divider max-w-xs mx-auto mb-4">
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
                EXECUTION FRAMEWORK
              </span>
            </div>

            <h2 className="font-h1 text-navy-900 tracking-tight mb-4">
              OUR <span className="gradient-text">APPROACH</span>
            </h2>

            <p className="text-body text-content-secondary max-w-xl mx-auto">
              A transparent, disciplined path from initial concept to sustained performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={idx}
                className="p-6 rounded-2xl bg-surface-white border border-slate-200/80 shadow-controlled-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading font-extrabold text-2xl text-slate-300 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="font-heading font-extrabold text-base tracking-wide text-navy-900 mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          06. DARK YUVANTAA CTA
          ================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl lg:rounded-4xl bg-navy-900 text-white border border-white/10 shadow-controlled-xl relative overflow-hidden">
          
          {/* Sweeping curve glow motif */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-coral/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              START A CONVERSATION
            </span>

            <h2 className="font-h1 text-white tracking-tight">
              Ready to Strengthen Your <br />
              <span className="gradient-text">Digital Presence?</span>
            </h2>

            <p className="text-body text-slate-300 leading-relaxed">
              Connect directly with our team in Pune to explore how Business Growth, Creative Services, and AI Solutions can accelerate your business.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" showArrow>
                Start a Conversation
              </Button>
              <Button
                href={brandInfo.whatsappUrl}
                variant="secondary"
                icon={MessageSquare}
                className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
