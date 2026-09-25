import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Palette, Cpu } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';

const concepts = [
  {
    id: 'grow',
    title: 'GROW',
    subtitle: 'Business Growth',
    description: 'Build a stronger digital presence that reaches the right audience and drives real business outcomes.',
    icon: TrendingUp,
    accentColor: '#FF6026'
  },
  {
    id: 'create',
    title: 'CREATE',
    subtitle: 'Creative Communication',
    description: 'Capture attention and build lasting brand recognition through powerful visual communication.',
    icon: Palette,
    accentColor: '#FF1E56'
  },
  {
    id: 'automate',
    title: 'AUTOMATE',
    subtitle: 'Intelligent Technology',
    description: 'Deploy AI-powered workflows and data tools that help your business operate smarter every day.',
    icon: Cpu,
    accentColor: '#D80075'
  }
];

export default function BrandIntro() {
  return (
    <section className="py-20 lg:py-28 bg-surface-white relative border-t border-slate-100 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-brand-magenta/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-coral" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-coral">
              Integrated Capabilities
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-coral" />
          </div>

          <h2 className="font-h2 text-content-primary tracking-tight mb-5">
            ONE PARTNER.<br />
            <span className="gradient-text">THREE DIGITAL CAPABILITIES.</span>
          </h2>

          <div className="flex items-center justify-center gap-2 max-w-xs mx-auto mb-6">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-brand-orange to-brand-coral" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-brand-coral via-brand-magenta to-transparent" />
          </div>

          <p className="text-body-lg text-content-secondary leading-relaxed">
            Yuvantaa Digitals brings business growth, creative communication and intelligent technology together to help businesses move forward in the digital world.
          </p>
        </motion.div>

        {/* Three Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {concepts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={index}
                className="group relative flex flex-col items-center text-center p-8 lg:p-10 rounded-3xl bg-surface-warm border border-slate-200/80 shadow-controlled-sm hover:shadow-controlled-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Hover top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${item.accentColor}80, ${item.accentColor})` }}
                />
                {/* Corner glow */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: item.accentColor }}
                />

                {/* Icon badge */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                  style={{ backgroundColor: `${item.accentColor}12`, border: `1.5px solid ${item.accentColor}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.accentColor }} />
                </div>

                {/* Title + underline */}
                <div className="space-y-1.5 mb-3">
                  <h3 className="font-heading font-extrabold text-2xl tracking-tight text-content-primary">
                    {item.title}
                  </h3>
                  <div
                    className="h-0.5 w-8 mx-auto rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: item.accentColor }}
                  />
                </div>

                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                  {item.subtitle}
                </span>

                <p className="text-sm text-content-secondary leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
