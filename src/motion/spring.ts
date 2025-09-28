import { Transition, Variants } from "framer-motion";

// spring transition you can reuse anywhere
export const spring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 22,
  mass: 0.9,
};

// parent container variants
export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// child item variants
export const item: Variants = {
  hidden: { y: 18, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: spring,
  },
};
