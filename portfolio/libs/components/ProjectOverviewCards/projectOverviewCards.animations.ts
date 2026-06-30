import { Variants } from "framer-motion";

export const containerMotion: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  } as const,
};

export const cardMotion: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  } as const,
};

export const hoverMotion = {
  y: -6,
  scale: 1.01,
  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  } as const,
};
