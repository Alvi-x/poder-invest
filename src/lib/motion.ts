export const EASE_EDITORIAL = [0.22, 0.61, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
};

export const staggerChildren = (delay = 0, stagger = 0.1) => ({
  hidden: {},
  visible: {
    transition: { delayChildren: delay, staggerChildren: stagger },
  },
});

export const navReveal = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EDITORIAL },
  },
};