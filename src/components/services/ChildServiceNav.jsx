import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ChildServiceNav({ parent, activeChildId }) {
  const scrollContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  // Automatically scroll active tab into view on mobile or overflowing viewports
  useEffect(() => {
    if (activeTabRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tab = activeTabRef.current;
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();

      if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeChildId]);

  if (!parent || !parent.childServices) return null;

  return (
    <div className="w-full relative my-8">
      {/* Horizontal pill navigation bar: 1 clean row on desktop, swipe/scroll on mobile, never wrapping */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none scroll-smooth flex-nowrap whitespace-nowrap px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {parent.childServices.map((child, index) => {
          const isActive = child.id === activeChildId;

          return (
            <Link
              key={child.id}
              ref={isActive ? activeTabRef : null}
              to={`/services/${parent.id}/${child.id}`}
              className={`shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-300 border whitespace-nowrap select-none ${
                isActive
                  ? 'bg-navy-900 text-white border-navy-900 shadow-controlled-md scale-[1.02]'
                  : 'bg-surface-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
              }`}
            >
              {/* Pillar-themed item number indicator */}
              <span
                className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors shrink-0 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-500 bg-slate-100'
                }`}
                style={{
                  backgroundColor: isActive ? parent.accentColor : undefined
                }}
              >
                {index + 1}
              </span>

              <span>{child.title}</span>

              {/* Active glow dot */}
              {isActive && (
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                  style={{ backgroundColor: parent.accentColor }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
