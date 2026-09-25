import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Globe, Palette, Cpu } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';

const servicesData = [
  {
    id: 'business-growth',
    number: '01',
    label: 'PILLAR 01',
    title: 'BUSINESS GROWTH',
    description: 'Build a stronger digital presence, reach the right audience and create meaningful business opportunities.',
    capabilities: [
      'Website Design & Development',
      'Performance Marketing',
      'Strong Online Presence',
      'Social Media Growth',
      'Social Media Management'
    ],
    ctaText: 'Explore Business Growth',
    icon: Globe,
    accentColor: '#FF6026',
    link: '/services/business-growth'
  },
  {
    id: 'creative-services',
    number: '02',
    label: 'PILLAR 02',
    title: 'CREATIVE SERVICES',
    description: 'Create visual experiences that capture attention and strengthen your brand communication.',
    capabilities: [
      'Video Editing',
      'Thumbnail Design',
      'Graphic Design'
    ],
    ctaText: 'Explore Creative Services',
    icon: Palette,
    accentColor: '#FF1E56',
    link: '/services/creative-services'
  },
  {
    id: 'ai-solutions',
    number: '03',
    label: 'PILLAR 03',
    title: 'AI SOLUTIONS',
    description: 'Automate repetitive work, deploy intelligent systems and turn business data into useful insights.',
    capabilities: [
      'AI Automation',
      'AI Agents',
      'Data Analytics'
    ],
    ctaText: 'Explore AI Solutions',
    icon: Cpu,
    accentColor: '#D80075',
    link: '/services/ai-solutions'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-warm relative overflow-hidden" id="services">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-brand-magenta/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="brand-divider max-w-xs mx-auto mb-4">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              OUR SERVICES
            </span>
          </div>
          <h2 className="font-h2 text-content-primary mb-4 tracking-tight">
            Three Strategic Digital <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-body-lg text-content-secondary max-w-2xl mx-auto">
            Three capabilities designed to help businesses grow, communicate and operate smarter.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isThirdOnTablet = index === 2 ? 'md:col-span-2 lg:col-span-1' : '';

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={index}
                className={`group flex flex-col justify-between bg-surface-white rounded-3xl lg:rounded-4xl border border-slate-200/80 shadow-controlled-md hover:shadow-controlled-xl hover:-translate-y-2 transition-all duration-400 p-7 sm:p-9 relative overflow-hidden ${isThirdOnTablet}`}
              >
                {/* Gradient top bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${service.accentColor}, ${service.accentColor}80)` }}
                />

                {/* BG corner glow */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div>
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3 shadow-sm"
                      style={{ backgroundColor: `${service.accentColor}12`, border: `1.5px solid ${service.accentColor}30` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.accentColor }} />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">{service.label}</span>
                      <span className="font-heading font-extrabold text-3xl text-slate-100 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${service.accentColor}60, ${service.accentColor}30)` }}>
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${service.accentColor}, #334155)` }}>
                    {service.title}
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Capabilities list */}
                  <div className="pt-6 border-t border-slate-100 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Core Capabilities
                    </span>
                    <ul className="space-y-2.5">
                      {service.capabilities.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-primary">
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${service.accentColor}15` }}
                          >
                            <Check className="w-2.5 h-2.5" style={{ color: service.accentColor }} />
                          </span>
                          <span className="font-medium text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={service.link}
                    className="flex items-center justify-between w-full py-2.5 text-xs sm:text-sm font-heading font-bold text-navy-900 group-hover:text-brand-coral transition-colors duration-200"
                  >
                    <span>{service.ctaText}</span>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                      style={{ backgroundColor: 'rgb(15 23 42)' }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = service.accentColor}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgb(15 23 42)'}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
