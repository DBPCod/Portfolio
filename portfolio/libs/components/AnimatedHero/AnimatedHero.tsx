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
    <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:grid-cols-[1.75fr_1fr] md:px-10 md:py-14">
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={textMotion}
      >
        <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-800">
          Lập trình viên Full-Stack
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">{description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          {primaryCta}
          {secondaryCta}
        </div>
      </motion.div>

      <div className="relative flex items-center justify-center overflow-hidden">
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
