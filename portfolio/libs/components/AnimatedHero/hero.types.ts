import type { ReactNode } from "react";

export type AnimatedHeroProps = {
  title: string;
  description: string;
  primaryCta: ReactNode;
  secondaryCta: ReactNode;
  avatarSrc: string;
  avatarAlt: string;
};
