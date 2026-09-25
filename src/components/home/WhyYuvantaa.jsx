import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/fadeUp';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const principles = [
  { number: '01', title: 'GROWTH',     description: 'Digital strategies built around your business objectives — not generic templates.',   accent: '#FF6026' },
  { number: '02', title: 'CREATIVITY', description: 'Visual communication designed to capture attention, tell stories and drive action.',     accent: '#FF1E56' },
  { number: '03', title: 'TECHNOLOGY', description: 'Modern AI-powered digital solutions designed precisely around your business needs.',     accent: '#FA1E6A' },
  { number: '04', title: 'DATA',       description: 'Real insights that help businesses make confident, evidence-based decisions every day.', accent: '#D80075' },
];

export default function WhyYuvantaa() {
  return (
    <section className="py-28 lg:py-36 bg-[#FAFBFC] relative overflow-hidden border-t border-slate-200/60">

      {/* Architectural grid line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-slate-200/50 h-full" />
          <div className="border-r border-slate-200/50 h-full hidden md:block" />
          <div className="border-r border-slate-200/50 h-full hidden md:block" />
          <div className="h-full" />
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-coral/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

          {/* Left: sticky header column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-coral/8 border border-brand-coral/20">
              <span className="w-2 h-2 rounded-full bg-brand-coral" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-coral">Why Yuvantaa</span>
            </div>

            <h2 className="font-h1 text-navy-900 tracking-tight leading-[1.1]">
              WHERE GROWTH MEETS <br />
              <span className="gradient-text">CREATIVITY &amp; TECHNOLOGY</span>
            </h2>

            <p className="text-body-lg text-content-secondary leading-relaxed">
              We don't treat design, engineering and marketing as isolated silos. We unite them into an integrated engine built to give your brand decisive digital authority.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-brand-orange to-brand-coral rounded-full" />
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Strategic Foundation</span>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-navy-900 hover:text-brand-coral transition-colors group/link"
            >
              <span>Learn More About Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Right: principles grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={index}
                  className="group relative p-6 rounded-3xl bg-surface-white border border-slate-200/80 shadow-controlled-sm hover:shadow-controlled-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: item.accent }}
                  />
                  {/* Corner glow */}
                  <div
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Big number */}
                  <span className="font-heading font-extrabold text-5xl sm:text-6xl text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient transition-all duration-300 select-none block mb-4 leading-none">
                    {item.number}
                  </span>

                  {/* Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-0.5 rounded-full" style={{ backgroundColor: item.accent }} />
                    <h3 className="font-heading font-extrabold text-lg tracking-wide text-navy-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
