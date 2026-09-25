import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers, ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetailModal({ project, isOpen, onClose, accentColor = '#FF6026' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const detail = project.detailInfo || {};

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-900/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar with Close button */}
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white">
            
            {/* Visual Header */}
            {project.heroImage && (
              <div className={`relative ${project.imageFit === 'contain' ? 'h-80 sm:h-96 bg-navy-950 p-2' : 'h-56 sm:h-72'} rounded-2xl overflow-hidden shadow-md`}>
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
                {project.imageFit !== 'contain' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                )}
                
                <div className={`absolute bottom-4 left-4 right-4 text-white ${project.imageFit === 'contain' ? 'bg-navy-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10' : ''}`}>
                  {project.previewBadge && (
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 text-white shadow-sm"
                      style={{ backgroundColor: accentColor }}
                    >
                      {project.previewBadge}
                    </span>
                  )}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    {project.client}
                  </p>
                </div>
              </div>
            )}

            {/* Overview */}
            {detail.overview && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-heading font-extrabold uppercase tracking-wider text-navy-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {detail.overview}
                </p>
              </div>
            )}

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.challenge && (
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-heading font-bold uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {detail.challenge}
                  </p>
                </div>
              )}

              {detail.solution && (
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-heading font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>What We Delivered</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {detail.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Key Deliverables / Points (Scope & Executed Capabilities) */}
            {project.keyPoints && project.keyPoints.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-heading font-extrabold uppercase tracking-wider text-navy-950 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-coral" />
                    Scope &amp; Executed Capabilities
                  </h4>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    {project.keyPoints.length} Highlights
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {project.keyPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-xs transition-colors hover:border-brand-coral/40"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {detail.results && detail.results.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5">
                <h4 className="text-xs font-heading font-extrabold uppercase tracking-wider text-navy-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  Measurable Impact &amp; Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {detail.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 font-semibold shadow-xs flex items-center gap-2.5 leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack / Tags */}
            {detail.techStack && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-navy-950 block">
                  Technologies &amp; Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs font-semibold shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer CTA */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <button
              onClick={onClose}
              className="text-xs font-heading font-bold text-slate-600 hover:text-navy-950 transition-colors"
            >
              Back to Services
            </button>

            <div className="flex items-center gap-3">
              {project.instagramUrl ? (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 transition-opacity shadow-sm"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Open Instagram Profile</span>
                </a>
              ) : project.liveDemoUrl && project.liveDemoUrl.startsWith('http') ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-bold text-navy-900 bg-white border border-slate-300 hover:border-brand-coral hover:text-brand-coral transition-colors shadow-sm"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-heading font-bold text-white bg-navy-900 hover:bg-brand-coral transition-colors shadow-sm"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
