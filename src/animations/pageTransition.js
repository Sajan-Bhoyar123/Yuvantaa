/**
 * Page Transition Variant
 * Subtle 300ms fade with minimal 8px displacement for an elegant, non-distracting feel.
 */
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 8
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.18,
      ease: 'easeIn'
    }
  }
};
