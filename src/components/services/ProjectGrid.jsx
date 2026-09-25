import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects = [], accentColor, onOpenDetail, childTitle }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-surface-white rounded-3xl border border-dashed border-slate-200">
        <p className="text-sm font-heading font-medium text-slate-500">
          Case studies for {childTitle || 'this capability'} are being prepared for public release.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid ${projects.length === 1 ? 'grid-cols-1 max-w-xl mx-auto gap-8' : projects.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8' : projects.length === 4 ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || index}
          project={project}
          index={index}
          onOpenDetail={onOpenDetail}
          accentColor={accentColor}
        />
      ))}
    </div>
  );
}
