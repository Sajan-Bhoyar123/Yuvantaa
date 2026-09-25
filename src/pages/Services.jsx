import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { fadeUp } from '../animations/fadeUp';
import Button from '../components/ui/Button';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <div className="min-h-screen bg-surface-white text-content-primary">
      
      {/* ==================================================
          SERVICES PAGE HERO
          ================================================== */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-surface-warm border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-brand-magenta/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <div className="brand-divider max-w-xs mx-auto mb-5">
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
                SERVICES &amp; CAPABILITIES
              </span>
            </div>

            <h1 className="font-display text-navy-900 tracking-tight mb-6">
              THREE CAPABILITIES. <br />
              <span className="gradient-text">ONE DIGITAL PARTNER.</span>
            </h1>

            <p className="text-body-lg text-content-secondary max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our structured solutions across Business Growth, Creative Services, and AI Solutions designed to help modern businesses grow, communicate and operate smarter.
            </p>

            {/* Pillar Quick Jump Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {servicesData.map((pillar) => (
                <Link
                  key={pillar.id}
                  to={`/services/${pillar.id}`}
                  className="px-5 py-2 rounded-full bg-surface-white border border-slate-200 text-xs font-heading font-semibold text-navy-900 hover:border-brand-coral hover:text-brand-coral transition-colors shadow-sm"
                >
                  {pillar.number} {pillar.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          3 PARENT SERVICE CARDS SECTION (ONLY 3 CARDS)
          ================================================== */}
      <section className="py-20 lg:py-28 bg-surface-white" id="service-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-coral block mb-2">
              SELECT A CAPABILITY AREA
            </span>
            <h2 className="font-h2 text-navy-900 tracking-tight">
              Strategic Digital <span className="gradient-text">Pillars</span>
            </h2>
          </motion.div>

          {/* 3 Primary Service Cards Grid: Desktop 3, Tablet 2+1, Mobile 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isThirdOnTablet = index === 2 ? 'md:col-span-2 lg:col-span-1' : '';
              const targetUrl = `/services/${service.id}`;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={index}
                  className={`group flex flex-col justify-between bg-surface-white rounded-3xl lg:rounded-4xl border border-slate-200/90 shadow-controlled-md hover:shadow-controlled-xl hover:border-brand-coral/40 transition-all duration-300 hover:-translate-y-1.5 p-7 sm:p-9 relative overflow-hidden ${isThirdOnTablet}`}
                >
                  {/* Subtle top gradient accent line on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Card Top & Body */}
                  <div>
                    {/* Header row: Large Icon Badge & Pillar Label */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Large Icon Badge */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2"
                        style={{
                          backgroundColor: `${service.accentColor}12`,
                          border: `1.5px solid ${service.accentColor}30`
                        }}
                      >
                        <Icon className="w-8 h-8 transition-transform duration-300" style={{ color: service.accentColor }} />
                      </div>

                      {/* Small uppercase label & number */}
                      <div className="text-right">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                          {service.label}
                        </span>
                        <span className="font-heading font-extrabold text-2xl text-slate-200 group-hover:text-brand-coral/40 transition-colors">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* Strong Navy Heading */}
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight mb-3">
                      {service.title}
                    </h3>

                    {/* Muted Blue-Gray Description */}
                    <p className="text-sm text-content-secondary leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Clean Capabilities Checklist */}
                    <div className="pt-6 border-t border-slate-100 mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                        Specialized Capabilities
                      </span>
                      <ul className="space-y-2.5">
                        {service.childServices.map((child) => (
                          <li key={child.id} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-primary">
                            <span 
                              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: `${service.accentColor}15` }}
                            >
                              <Check className="w-2.5 h-2.5" style={{ color: service.accentColor }} />
                            </span>
                            <span className="font-medium text-slate-700">{child.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Large CTA Region at Bottom */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={targetUrl}
                      className="flex items-center justify-between w-full py-2.5 text-xs sm:text-sm font-heading font-bold text-navy-900 group-hover:text-brand-coral transition-colors duration-200"
                    >
                      <span>{service.ctaText || `Explore ${service.title}`}</span>
                      <div className="w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center group-hover:bg-brand-coral shadow-sm transition-all duration-300 group-hover:translate-x-1">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          FINAL DARK CONVERSION CTA
          ================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl lg:rounded-4xl bg-navy-900 text-white border border-white/10 shadow-controlled-xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-coral/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-h1 text-white tracking-tight">
              Ready to Explore the Right Solution?
            </h2>
            <p className="text-body text-slate-300 leading-relaxed">
              Schedule a direct consultation with our team in Pune to map out a clear digital growth plan tailored to your business.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" showArrow>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
