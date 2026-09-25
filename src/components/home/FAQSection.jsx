import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';
import { faqs } from '../../data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAFBFC] relative overflow-hidden border-t border-slate-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="brand-divider max-w-xs mx-auto mb-4">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              COMMON INQUIRIES
            </span>
          </div>

          <h2 className="font-h1 text-navy-900 tracking-tight mb-4">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>

          <p className="text-body text-content-secondary leading-relaxed">
            Clear answers about our capabilities, collaboration model, and how we help modern businesses scale.
          </p>
        </motion.div>

        {/* Accessible Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-surface-white border-brand-coral/40 shadow-controlled-md'
                    : 'bg-surface-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Thin top gradient rule indicator on open items */}
                {isOpen && (
                  <div className="h-0.5 bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta w-full" />
                )}

                {/* Question Trigger Button */}
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral cursor-pointer"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy-900 leading-snug">
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-brand-coral text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-content-secondary leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
