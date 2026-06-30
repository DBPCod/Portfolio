import { Variants } from "framer-motion";

export const pulseMotion: Variants = {
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 0.1,
      ease: "easeOut",
    },
  }
};
