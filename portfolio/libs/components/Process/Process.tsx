"use client";

import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import type { ProcessProps } from "@/libs/components/Process/process.types";
import { containerMotion, itemMotion, lineMotion } from "@/libs/components/Process/process.animations";

export default function Process({ steps }: ProcessProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="process" className="mt-20">
      <div className="mb-8 text-center">
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Quy trình làm việc</h2>
      </div>
      <div className="relative" ref={ref}>
        <motion.div
          className="hidden absolute left-[12.5%] right-[12.5%] top-10 z-0 h-px overflow-hidden md:block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lineMotion}
          style={{ transformOrigin: "left center" }}
        >
          <div className="h-full w-full border-t border-dashed border-slate-600" />
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerMotion}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="relative z-10 rounded-3xl p-4 text-center"
              variants={itemMotion}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-slate-950 text-white">
                <FontAwesomeIcon icon={step.icon} className="h-6 w-6" />
              </div>
              <div className="mt-3 text-sm font-semibold tracking-wide text-slate-950">{step.number}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
