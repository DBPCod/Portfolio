"use client";

import { motion } from "framer-motion";
import type { AnimatedHeroProps } from "@/libs/components/AnimatedHero/hero.types";
import { avatarMotion, textMotion } from "@/libs/components/AnimatedHero/hero.animations";

export default function AnimatedHero({
  title,
  description,
  primaryCta,
  secondaryCta,
  avatarSrc,
  avatarAlt,
}: AnimatedHeroProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 md:grid-cols-[1.75fr_1fr] md:gap-10 md:px-10 md:py-14">
      <motion.div
        className="space-y-4 md:space-y-6"
        initial="hidden"
        animate="visible"
        variants={textMotion}
      >
        <div className="flex items-start gap-3 md:block md:gap-0">
          <motion.div
            className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-slate-200 bg-slate-900 md:hidden"
            initial="hidden"
            animate="visible"
            variants={avatarMotion}
          >
            <img src={avatarSrc} alt={avatarAlt} className="h-full w-full object-cover" />
          </motion.div>

          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-800 md:px-4 md:py-1 md:text-sm">
              Lập trình viên Full-Stack
            </p>
            <div className="mt-2 space-y-2 md:mt-4 md:space-y-4">
              <h1 className="text-2.5xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl text-xs leading-5 text-slate-600 md:text-base md:leading-7">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 sm:flex-row md:gap-4">
          <div className="w-1/2 sm:w-auto">{primaryCta}</div>
          <div className="w-1/2 sm:w-auto">{secondaryCta}</div>
        </div>
      </motion.div>

      <div className="relative hidden items-center justify-center overflow-hidden md:flex">
        <div className="absolute inset-x-0 top-0 h-32" />
        <div className="relative flex h-full w-full items-center justify-center">
          <motion.div
            className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/20 bg-slate-900"
            initial="hidden"
            animate="visible"
            variants={avatarMotion}
          >
            <img src={avatarSrc} alt={avatarAlt} className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
