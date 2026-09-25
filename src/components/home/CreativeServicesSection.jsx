import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Pause, Image as ImageIcon, Layers, Film } from 'lucide-react';
import { fadeUp } from '../../animations/fadeUp';

const creativeDisciplines = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Motion & Storytelling',
    description: 'Pacing-focused video editing for brand stories, social media reels, and high-impact long-form content.',
    icon: Film,
    badgeText: 'High-Retention Cuts',
    aspect: 'aspect-[16/10] lg:aspect-[16/11]',
    gridSpan: 'lg:col-span-7',
    accentColor: '#FF6026',
    previewType: 'video',
    videoSrc: '/vid1.mp4'
  },
  {
    id: 'thumbnail-design',
    title: 'Thumbnail Design',
    category: 'Visual CTR Strategy',
    description: 'High-contrast, psychology-driven thumbnail compositions designed to stand out on crowded feeds.',
    icon: ImageIcon,
    badgeText: 'Attention Triggers',
    aspect: 'aspect-[16/10]',
    gridSpan: 'lg:col-span-5',
    accentColor: '#FF1E56',
    previewType: 'thumbnail',
    imageSrc: '/gym-thumbnail-7am.jpg'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Brand Identity & Visuals',
    description: 'Comprehensive visual assets, brand identity guidelines, marketing collateral, and vector compositions.',
    icon: Layers,
    badgeText: 'Design Systems',
    aspect: 'aspect-[16/9] lg:aspect-[21/9]',
    gridSpan: 'lg:col-span-12',
    accentColor: '#D80075',
    previewType: 'brand',
    imageSrc: '/graphic-design-lc-fitness-banner.png'
  }
];

/* ─── Video preview sub-component (keeps hooks rules happy) ─── */
function VideoPreview({ src, accentColor }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        preload="metadata"
        playsInline
        onEnded={() => setPlaying(false)}
        onClick={toggle}
      />
      {/* Play / Pause overlay */}
      <button
        onClick={toggle}
        className="absolute inset-0 flex items-center justify-center group/play"
        aria-label={playing ? 'Pause video' : 'Play video'}
      >
        <span
          className={`flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-md border-2 border-white/30 shadow-2xl transition-all duration-300
            ${playing
              ? 'opacity-0 group-hover/play:opacity-100 scale-90 group-hover/play:scale-100'
              : 'opacity-100 scale-100'
            }`}
          style={{ background: `${accentColor}CC` }}
        >
          {playing
            ? <Pause className="w-6 h-6 text-white drop-shadow-lg" />
            : <Play className="w-6 h-6 text-white drop-shadow-lg ml-0.5 fill-current" />
          }
        </span>
      </button>
    </div>
  );
}

export default function CreativeServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFBFC] relative overflow-hidden border-t border-slate-200/60">
      
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-brand-magenta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          {/* Eyebrow with decorative lines */}
          <div className="brand-divider max-w-xs mx-auto mb-4">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              PILLAR 02 — CREATIVE SERVICES
            </span>
          </div>

          <h2 className="font-h1 text-navy-900 tracking-tight mb-4">
            CREATIVITY THAT <br className="hidden sm:inline" />
            <span className="gradient-text">GETS ATTENTION</span>
          </h2>

          <p className="text-body-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
            Strong visual communication helps businesses become more recognizable, memorable and engaging.
          </p>
        </motion.div>

        {/* Premium Editorial Studio Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {creativeDisciplines.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
                className={`${item.gridSpan} group relative flex flex-col justify-between rounded-3xl lg:rounded-4xl bg-surface-white border border-slate-200/80 shadow-controlled-md hover:shadow-controlled-xl hover:border-brand-coral/30 transition-all duration-500 overflow-hidden p-6 sm:p-8 lg:p-10`}
              >
                {/* Top Subtle Curved Accent Indicator */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Studio Canvas Area */}
                <div className={`w-full ${item.aspect} rounded-2xl bg-navy-950 relative overflow-hidden mb-6 border border-white/10 group-hover:scale-[1.01] transition-transform duration-500`}>
                  
                  {/* VIDEO EDITING — real playable video */}
                  {item.previewType === 'video' && (
                    <VideoPreview src={item.videoSrc} accentColor={item.accentColor} />
                  )}

                  {/* THUMBNAIL DESIGN — real thumbnail image */}
                  {item.previewType === 'thumbnail' && (
                    <img
                      src={item.imageSrc}
                      alt="Thumbnail Design Example"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* GRAPHIC DESIGN — real brand asset image */}
                  {item.previewType === 'brand' && (
                    <img
                      src={item.imageSrc}
                      alt="Graphic Design Example"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Soft hover overlay (only for image cards, not video) */}
                  {item.previewType !== 'video' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                      <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
                        <span>Explore {item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-brand-coral" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Editorial Narrative */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-coral">
                        {item.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.badgeText}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-content-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Link & Arrow */}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 text-white text-xs font-heading font-semibold hover:bg-brand-coral transition-colors shrink-0 group/btn mt-2 sm:mt-0"
                    aria-label={`View ${item.title} service details`}
                  >
                    <span>Capabilities</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
