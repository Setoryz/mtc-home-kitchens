import { Variants } from "framer-motion";

export const headerVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const heroDetailsVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 1.0,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
