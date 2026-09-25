export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: custom * 0.1,
      ease: 'easeOut'
    }
  })
};
