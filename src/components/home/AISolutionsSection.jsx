import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Bot, BarChart3, GitFork, CheckCircle, Network, ArrowRight } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';
import Button from '../ui/Button';

const aiCapabilities = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI AUTOMATION',
    subtitle: 'Process Orchestration',
    description: 'Automate repetitive business workflows.',
    details: 'Connect CRM, lead triage, repetitive document processing, and internal communications into automated pipelines.',
    icon: Zap,
    accentColor: '#FF6026',
    nodes: ['Trigger', 'Process', 'Action']
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI AGENTS',
    subtitle: 'Autonomous Systems',
    description: 'Build intelligent systems that can assist with business and customer workflows.',
    details: 'Custom conversational agents and task-oriented systems that assist clients, resolve common queries, and qualify inquiries 24/7.',
    icon: Bot,
    accentColor: '#FF1E56',
    nodes: ['Analyze', 'Reason', 'Execute']
  },
  {
    id: 'data-analytics',
    number: '03',
    title: 'DATA ANALYTICS',
    subtitle: 'Actionable Intelligence',
    description: 'Turn business data into useful insights.',
    details: 'Transform fragmented marketing, operational, and customer records into clean executive visibility for better decision-making.',
    icon: BarChart3,
    accentColor: '#D80075',
    nodes: ['Collect', 'Model', 'Insight']
  }
];

export default function AISolutionsSection() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden py-28 lg:py-36" id="ai-solutions">
      
      {/* Top Sweeping Curved Gradient Edge Transition from previous light section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 lg:h-20 block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aiTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6026" />
              <stop offset="50%" stopColor="#FF1E56" />
              <stop offset="100%" stopColor="#D80075" />
            </linearGradient>
          </defs>
          <path d="M 0 0 L 1440 0 L 1440 30 C 1080 90 720 100 0 20 Z" fill="#FAFBFC" />
          <path d="M 0 20 C 720 100 1080 90 1440 30" stroke="url(#aiTopGrad)" strokeWidth="3" />
        </svg>
      </div>

      {/* Fine Coordinate Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      {/* Subtle Animated Glow and Technical Lines in Background */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-coral/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle technical background architecture lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Eyebrow with connected glowing point */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-coral mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
            <span>PILLAR 03 — AI SOLUTIONS</span>
          </div>

          <h2 className="font-h1 text-white tracking-tight mb-5">
            MAKE YOUR BUSINESS <br />
            <span className="gradient-text">WORK SMARTER</span>
          </h2>

          <p className="text-body-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Use automation, intelligent systems and data to streamline repetitive work and make better-informed business decisions.
          </p>
        </motion.div>

        {/* 3 Dark Navy Cards with Gradient Borders & Connected Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
                className="group relative rounded-3xl lg:rounded-4xl p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-transparent hover:from-brand-orange hover:via-brand-coral hover:to-brand-magenta transition-all duration-500 shadow-controlled-xl"
              >
                {/* Inner Card Container */}
                <div className="h-full w-full rounded-[calc(1.75rem-1.5px)] lg:rounded-[calc(2rem-1.5px)] bg-navy-900/90 backdrop-blur-md p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle corner aura */}
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <div>
                    {/* Header Row: Icon & Number Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${item.accentColor}18`,
                          border: `1.5px solid ${item.accentColor}35`
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: item.accentColor }} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accentColor }} />
                        <span className="font-heading font-extrabold text-sm text-slate-400 tracking-wider">
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* Subtitle & Title */}
                    <div className="space-y-1 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {item.subtitle}
                      </span>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Primary Description */}
                    <p className="text-sm font-semibold text-slate-200 mb-3 leading-snug">
                      {item.description}
                    </p>

                    {/* Detailed Explanation */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {item.details}
                    </p>
                  </div>

                  {/* Connected Nodes Flow Architecture */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                      Execution Flow
                    </span>

                    <div className="flex items-center justify-between gap-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {item.nodes.map((node, nodeIdx) => (
                        <React.Fragment key={node}>
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-200">
                            <span 
                              className="w-1.5 h-1.5 rounded-full" 
                              style={{ backgroundColor: item.accentColor }} 
                            />
                            <span>{node}</span>
                          </div>
                          {nodeIdx < item.nodes.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Strategic Action Area */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-white">
              Ready to explore intelligent automation for your business?
            </h4>
            <p className="text-xs text-slate-400">
              We design custom automated systems built strictly around your specific workflows.
            </p>
          </div>

          <Button to="/contact" variant="primary" showArrow className="!px-7 !py-3 text-sm shrink-0">
            Consult on AI Solutions
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
