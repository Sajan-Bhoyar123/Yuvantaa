import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/fadeUp';

const processStages = [
  { number: '01', name: 'DISCOVER',   description: 'Understand the business, audience and objectives.',          accent: '#FF6026' },
  { number: '02', name: 'STRATEGIZE', description: 'Identify the right digital strategy and solution.',           accent: '#FF3548' },
  { number: '03', name: 'CREATE',     description: 'Design, develop and produce the required work.',              accent: '#FF1E56' },
  { number: '04', name: 'IMPLEMENT',  description: 'Launch the required digital, creative or technology solution.',accent: '#FA1E6A' },
  { number: '05', name: 'OPTIMIZE',   description: 'Review and improve where necessary.',                         accent: '#D80075' },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-white relative overflow-hidden border-t border-slate-100" id="process">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-brand-magenta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-24"
        >
          <div className="brand-divider max-w-xs mx-auto mb-4">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">HOW WE WORK</span>
          </div>
          <h2 className="font-h1 text-navy-900 tracking-tight mb-4">
            FROM IDEA TO <span className="gradient-text">IMPACT</span>
          </h2>
          <p className="text-body-lg text-content-secondary max-w-xl mx-auto">
            A cohesive five-stage execution framework engineered to turn strategic ambition into tangible outcomes.
          </p>
        </motion.div>

        {/* ── DESKTOP: Horizontal Timeline ── */}
        <div className="hidden lg:block relative pb-6">
          {/* Gradient connector line */}
          <div
            className="absolute top-[82px] left-8 right-8 h-[2px] bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-6 relative">
            {processStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={index}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Number */}
                <div className="mb-4">
                  <span className="font-heading font-extrabold text-3xl text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient transition-all duration-300">
                    {stage.number}
                  </span>
                </div>

                {/* Marker dot */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.35 }}
                    className="w-5 h-5 rounded-full p-0.5 bg-surface-white border-2 transition-all duration-300 cursor-default"
                    style={{ borderColor: stage.accent }}
                  >
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: stage.accent }} />
                  </motion.div>
                </div>

                {/* Stage name card */}
                <div
                  className="mb-3 px-3 py-1.5 rounded-xl bg-surface-warm border border-slate-100 group-hover:border-transparent group-hover:shadow-md transition-all duration-300"
                  style={{ '--tw-shadow-color': `${stage.accent}30` }}
                >
                  <h3 className="font-heading font-extrabold text-sm tracking-wider text-navy-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${stage.accent}, #334155)` }}>
                    {stage.name}
                  </h3>
                </div>

                <p className="text-xs text-content-secondary leading-relaxed px-2">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE & TABLET: Vertical Timeline ── */}
        <div className="lg:hidden relative pl-8 sm:pl-10 space-y-6">
          {/* Vertical gradient line */}
          <div
            className="absolute top-3 bottom-3 left-3 sm:left-4 w-[2px] bg-gradient-to-b from-brand-orange via-brand-coral to-brand-magenta"
            aria-hidden="true"
          />

          {processStages.map((stage, index) => (
            <motion.div
              key={stage.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={index}
              className="relative flex items-start gap-4 group"
            >
              {/* Marker */}
              <div
                className="absolute -left-8 sm:-left-10 top-1 w-6 h-6 rounded-full p-0.5 bg-surface-white border-2 shrink-0 transition-transform group-hover:scale-110"
                style={{ borderColor: stage.accent }}
              >
                <div className="w-full h-full rounded-full" style={{ backgroundColor: stage.accent }} />
              </div>

              {/* Content card */}
              <div className="flex-1 p-4 rounded-2xl bg-surface-warm border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading font-extrabold text-sm" style={{ color: stage.accent }}>{stage.number}</span>
                  <h3 className="font-heading font-extrabold text-base tracking-wider text-navy-900">{stage.name}</h3>
                </div>
                <p className="text-sm text-content-secondary leading-relaxed">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
