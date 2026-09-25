/**
 * Premium Natural Ease: [0.16, 1, 0.3, 1]
 * Duration: 400-500ms
 * Clean, subtle, confident entrance without bounce or excessive travel.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: custom * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: custom * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};
