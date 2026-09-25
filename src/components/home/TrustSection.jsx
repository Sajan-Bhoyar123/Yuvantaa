import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Quote, ArrowRight } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';
import { testimonials, trustPoints } from '../../data/testimonials';
import Button from '../ui/Button';

export default function TrustSection() {
  const hasRealTestimonials = testimonials && testimonials.length > 0;

  return (
    <section className="py-24 lg:py-32 bg-surface-white relative overflow-hidden border-t border-slate-100" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {hasRealTestimonials ? (
          /* ==================================================
             REAL TESTIMONIALS (Shown only when authentic quotes exist)
             ================================================== */
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="brand-divider max-w-xs mx-auto mb-4">
                <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="font-h1 text-navy-900 tracking-tight">
                WHAT OUR <span className="gradient-text">CLIENTS SAY</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-surface-warm border border-slate-200/80 shadow-controlled-md relative">
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-brand-orange to-brand-coral rounded-full" />
                  <Quote className="w-8 h-8 text-brand-coral/40 mb-4" />
                  <p className="text-sm text-slate-700 italic mb-6">"{t.quote}"</p>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy-900">{t.clientName}</h4>
                    <p className="text-xs text-slate-500">{t.role} • {t.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ==================================================
             FACTUAL TRUST SECTION: WHY BUSINESSES WORK WITH YUVANTAA
             Strictly zero fabricated claims, fake stats, or fake clients
             ================================================== */
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative rounded-3xl lg:rounded-4xl bg-surface-warm border border-slate-200/90 shadow-controlled-lg overflow-hidden p-8 sm:p-12 lg:p-16"
          >
            {/* Top Subtle Yuvantaa Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta" />

            {/* Corner Decorative Curve Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Heading & Trust Philosophy (lg:col-span-5) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-xs font-semibold text-brand-coral">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-coral" />
                  <span>TRUSTED COLLABORATION</span>
                </div>

                <h2 className="font-h1 text-navy-900 tracking-tight leading-tight">
                  WHY BUSINESSES <br />
                  <span className="gradient-text">WORK WITH YUVANTAA</span>
                </h2>

                <p className="text-body text-content-secondary leading-relaxed">
                  We believe in transparent, capability-driven execution. Instead of disjointed freelancers or impersonal software, we serve as your integrated digital growth partner.
                </p>

                <div className="pt-2">
                  <Button to="/contact" variant="navy" showArrow>
                    Discuss Your Business Needs
                  </Button>
                </div>
              </div>

              {/* Right Column: Factual Capability Statements (lg:col-span-7) */}
              <div className="lg:col-span-7 space-y-4">
                {trustPoints.map((point, idx) => (
                  <div
                    key={point.id}
                    className="p-5 sm:p-6 rounded-2xl bg-surface-white border border-slate-200/80 shadow-controlled-sm hover:border-brand-coral/30 hover:shadow-controlled-md transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-coral group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-coral group-hover:text-white transition-colors" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-base text-navy-900 group-hover:text-brand-coral transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
