"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ProjectOverviewProps } from "@/libs/components/ProjectOverview/projectOverview.types";
import { overviewSectionMotion, statCardMotion } from "@/libs/components/ProjectOverview/projectOverview.animations";

function useCountUp(target: number, isActive: boolean, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min(now - startTime, duration);
      const progress = elapsed / duration;
      const nextValue = Math.round(target * progress);
      setCount(nextValue);

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isActive, target, duration]);

  return count;
}

export default function ProjectOverview({ items }: ProjectOverviewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const counts = items.map((item) => useCountUp(item.count, inView));

  return (
    <motion.section
      id="projectOverview"
      ref={ref}
      className="mt-12 grid gap-6 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={overviewSectionMotion}
    >
      {items.map((item, index) => (
        <motion.div
          key={`${item.count}${item.suffix}${item.label}`}
          className="rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm"
          variants={statCardMotion}
        >
          <p className="text-4xl font-semibold tracking-tight text-slate-950">
            {counts[index]}
            {item.suffix}
          </p>
          <p className="mt-3 text-sm text-slate-600">
            {item.label && <span>{item.label}</span>}
            {item.label && item.value ? " • " : ""}
            {item.value}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}
