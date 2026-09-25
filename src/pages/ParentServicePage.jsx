import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { getParentService } from '../data/services';
import { fadeUp } from '../animations/fadeUp';
import ChildServiceNav from '../components/services/ChildServiceNav';
import ProjectGrid from '../components/services/ProjectGrid';
import ProjectDetailModal from '../components/services/ProjectDetailModal';
import Button from '../components/ui/Button';

export default function ParentServicePage() {
  const { parentSlug, childSlug } = useParams();
  const parent = getParentService(parentSlug);

  const [selectedProject, setSelectedProject] = useState(null);

  // If invalid parent slug, redirect back to /services
  if (!parent) {
    return <Navigate to="/services" replace />;
  }

  // Active child service: from childSlug param or default to the first child service
  const activeChild = parent.childServices.find((c) => c.id === childSlug) || parent.childServices[0];
  const isDirectChildRoute = !!childSlug;

  return (
    <div className="min-h-screen bg-surface-white text-content-primary">
      
      {/* ==================================================
          1. BREADCRUMB, 2. HEADING, 3. SHORT DESCRIPTION
          ================================================== */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-surface-warm border-b border-slate-100 relative overflow-hidden">
        {/* Glow ambient background accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: parent.accentColor }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* 1. Structured Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-heading font-semibold text-slate-500">
              <li>
                <Link to="/" className="hover:text-navy-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              </li>
              <li>
                <Link to="/services" className="hover:text-navy-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              </li>
              <li>
                <Link
                  to={`/services/${parent.id}`}
                  className={`hover:text-navy-900 transition-colors ${
                    !isDirectChildRoute ? 'text-navy-900 font-bold' : ''
                  }`}
                >
                  {parent.title}
                </Link>
              </li>
              {isDirectChildRoute && (
                <>
                  <li>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </li>
                  <li className="text-navy-900 font-bold truncate">
                    {activeChild.title}
                  </li>
                </>
              )}
            </ol>
          </nav>

          {/* 2. Heading & 3. Short Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Pillar Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold mb-4"
              style={{
                backgroundColor: `${parent.accentColor}15`,
                color: parent.accentColor
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: parent.accentColor }} />
              <span>{parent.label} — {parent.title}</span>
            </div>

            {/* 2. Child Service Heading */}
            <h1 className="font-display text-navy-900 tracking-tight text-3xl sm:text-5xl lg:text-6xl mb-5 uppercase">
              {activeChild.title}
            </h1>

            {/* 3. Short Child-Service Description */}
            <p className="text-body-lg text-content-secondary max-w-3xl leading-relaxed mb-6">
              {activeChild.supportingCopy || activeChild.explanation}
            </p>
          </motion.div>

          {/* 4. Horizontal Child-Service Navigation (One row desktop, swipe on mobile) */}
          <div className="pt-2">
            <ChildServiceNav parent={parent} activeChildId={activeChild.id} />
          </div>

        </div>
      </section>

      {/* ==================================================
          5. PROJECT COUNT & 6. PROJECT CARD GRID
          ================================================== */}
      <section className="py-16 lg:py-24 bg-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row: Title & 5. Project Count */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="brand-divider max-w-[120px] mb-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-coral font-bold">
                  PORTFOLIO
                </span>
              </div>
              <h2 className="font-h2 text-navy-900 tracking-tight">
                {activeChild.title} <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-sm text-content-secondary mt-1">
                Explore real projects and case studies delivered by Yuvantaa Digitals.
              </p>
            </div>

            {/* 5. Project Count Badge */}
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-warm border border-slate-200 text-xs font-heading font-bold text-navy-900 shadow-sm">
                <span>{(activeChild.projects || []).length} Projects Delivered</span>
              </span>
            </div>
          </div>

          {/* 6. Project Card Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
          <ProjectGrid
            projects={activeChild.projects || []}
            accentColor={parent.accentColor}
            childTitle={activeChild.title}
            onOpenDetail={(project) => setSelectedProject(project)}
          />

        </div>
      </section>

      {/* ==================================================
          7. FINAL CALL TO ACTION (CTA)
          ================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl lg:rounded-4xl bg-navy-900 text-white border border-white/10 shadow-controlled-xl relative overflow-hidden text-center">
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: parent.accentColor }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
              LET'S BUILD TOGETHER
            </span>
            <h2 className="font-h1 text-white tracking-tight">
              Ready to Accelerate with {activeChild.title}?
            </h2>
            <p className="text-body text-slate-300 leading-relaxed">
              Consult with our Pune-based team to structure a tailored execution roadmap for your business.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" showArrow>
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        accentColor={parent.accentColor}
      />

    </div>
  );
}
