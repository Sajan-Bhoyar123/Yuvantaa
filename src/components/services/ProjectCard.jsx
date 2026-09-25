import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Instagram, Play, Pause } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';

export default function ProjectCard({ project, index = 0, onOpenDetail, accentColor = '#FF6026' }) {
  if (!project) return null;

  // ─── VIDEO ONLY MODE ──────────────────────────────────────────────────────
  if (project.videoOnly) {
    return <VideoOnlyCard project={project} index={index} accentColor={accentColor} />;
  }

  // ─── IMAGE ONLY MODE ──────────────────────────────────────────────────────
  if (project.imageOnly) {
    const aspectClass = project.aspectRatio === 'square'
      ? 'aspect-square'
      : project.aspectRatio === 'landscape' || project.aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : project.aspectRatio === '16/9' || project.aspectRatio === 'video'
      ? 'aspect-[16/9]'
      : 'aspect-[9/16]';

    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        custom={index}
        className={`group relative w-full ${aspectClass} rounded-3xl lg:rounded-4xl overflow-hidden shadow-controlled-md hover:shadow-controlled-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-2 ${project.imageFit === 'contain' ? 'bg-white p-3' : 'bg-navy-950'} flex items-center justify-center`}
      >
        <img
          src={project.heroImage}
          alt={project.title || 'Design Work'}
          loading="lazy"
          className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
        />
        {/* Subtle accent border on hover */}
        <div
          className="absolute inset-0 rounded-3xl lg:rounded-4xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ borderColor: accentColor }}
        />
      </motion.div>
    );
  }

  const shortDesc = project.shortDescription || 
                    (project.detailInfo && project.detailInfo.overview ? project.detailInfo.overview.slice(0, 120) + '...' : '');

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
      className="group flex flex-col justify-between bg-surface-white rounded-3xl lg:rounded-4xl border border-slate-200/90 shadow-controlled-md hover:shadow-controlled-xl hover:border-brand-coral/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Top Accent Line on hover */}
      <div
        className="h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: accentColor }}
      />

      {/* ==================================================
          TOP: PROJECT / BUSINESS IMAGE (Large visual portion)
          ================================================== */}
      <div className={`relative ${project.imageFit === 'contain' ? 'h-80 sm:h-96 bg-navy-950 p-2' : 'h-60 sm:h-64 bg-slate-100'} w-full overflow-hidden shrink-0`}>
        <img
          src={project.heroImage || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80'}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover transition-transform duration-700 ease-out group-hover:scale-105'}`}
        />
        {project.imageFit !== 'contain' && (
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          {project.previewBadge && (
            <span
              className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm backdrop-blur-md"
              style={{ backgroundColor: accentColor }}
            >
              {project.previewBadge}
            </span>
          )}
          <span className="ml-auto px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-navy-900/80 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Client Name at Image Bottom */}
        <div className={`absolute bottom-3.5 left-4 right-4 text-white pointer-events-none ${project.imageFit === 'contain' ? 'bg-navy-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10' : ''}`}>
          <p className="text-xs font-semibold text-slate-200 tracking-wide">
            {project.client}
          </p>
        </div>
      </div>

      {/* ==================================================
          MIDDLE: NAME, SHORT DESCRIPTION, 2-3 POINTS, TAGS
          ================================================== */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Name */}
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight mb-2 group-hover:text-brand-coral transition-colors">
            {project.title}
          </h3>

          {/* Short description */}
          {shortDesc && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
              {shortDesc}
            </p>
          )}

          {/* 2–3 Important Project Points */}
          {project.keyPoints && project.keyPoints.length > 0 && (
            <div className="space-y-2 mb-5">
              <ul className="space-y-2">
                {project.keyPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                    <span className="text-brand-coral font-bold text-base leading-none mt-0.5 select-none shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Optional Category / Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-surface-warm border border-slate-100 text-[11px] font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ==================================================
          BOTTOM: TWO BUTTONS (DETAIL INFO & LIVE DEMO / INSTAGRAM)
          ================================================== */}
      <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-100 grid grid-cols-2 gap-3">
        {/* Button 1: DETAIL INFO → */}
        <button
          onClick={() => onOpenDetail && onOpenDetail(project)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-navy-900 bg-surface-white border border-slate-200 hover:border-brand-coral hover:text-brand-coral shadow-sm transition-all duration-200 group/btn"
        >
          <span>DETAIL INFO</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>

        {/* Button 2: INSTAGRAM OR LIVE DEMO */}
        {project.instagramUrl ? (
          <a
            href={project.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 shadow-sm transition-all duration-200 group/btn"
          >
            <Instagram className="w-3.5 h-3.5 shrink-0" />
            <span>INSTAGRAM</span>
          </a>
        ) : project.liveDemoUrl && project.liveDemoUrl.startsWith('http') ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-brand-coral shadow-sm transition-all duration-200 group/btn"
          >
            <span>LIVE DEMO</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        ) : (
          <button
            onClick={() => onOpenDetail && onOpenDetail(project)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-brand-coral shadow-sm transition-all duration-200 group/btn"
          >
            <span>LIVE DEMO</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   VIDEO ONLY CARD
   • 80-85% of card height is the video player
   • Big centred play/pause button overlay
   • Minimal footer strip showing category label
───────────────────────────────────────────────────────────────────────────── */
function VideoOnlyCard({ project, index, accentColor }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
      className="group flex flex-col rounded-3xl lg:rounded-4xl overflow-hidden shadow-controlled-md hover:shadow-controlled-xl border border-slate-200/90 bg-navy-950 transition-all duration-300 hover:-translate-y-2"
      style={{ minHeight: '480px' }}
    >
      {/* VIDEO AREA: ~83% of card height */}
      <div
        className="relative w-full flex-1"
        style={{ flexBasis: '83%' }}
      >
        <video
          ref={videoRef}
          src={project.videoUrl}
          className="w-full h-full object-contain bg-black"
          style={{ display: 'block', maxHeight: '420px', minHeight: '280px' }}
          preload="metadata"
          playsInline
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
        />

        {/* Play / Pause overlay button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center group/play"
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {/* Semi-transparent circle bg — visible only when paused */}
          <span
            className={`flex items-center justify-center w-20 h-20 rounded-full backdrop-blur-md border-2 border-white/30 shadow-2xl transition-all duration-300
              ${playing
                ? 'opacity-0 group-hover/play:opacity-100 scale-90 group-hover/play:scale-100'
                : 'opacity-100 scale-100'
              }`}
            style={{ background: `${accentColor}CC` }}
          >
            {playing
              ? <Pause className="w-8 h-8 text-white drop-shadow-lg" />
              : <Play className="w-8 h-8 text-white drop-shadow-lg ml-1" />
            }
          </span>
        </button>

        {/* Category badge top-right */}
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-navy-900/80 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* FOOTER STRIP: ~17% of card – minimal label */}
      <div
        className="flex items-center justify-between px-5 py-4 border-t shrink-0"
        style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(10,16,36,0.95)' }}
      >
        <span className="text-sm font-heading font-bold text-white/80 tracking-wide">
          {project.title}
        </span>
        {/* Accent dot */}
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ background: accentColor }}
        />
      </div>
    </motion.div>
  );
}
