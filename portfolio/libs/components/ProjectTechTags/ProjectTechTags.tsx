"use client";

import { motion } from "framer-motion";
import type { ProjectTechTagsProps } from "./projectTechTags.types";
import { containerMotion, tagMotion } from "./projectTechTags.animations";

export default function ProjectTechTags({ technologies }: ProjectTechTagsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {Object.entries(technologies).map(([layer, techs]) => (
        <motion.div
          key={layer}
          className="rounded-xl p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)] border border-l-4 border-slate-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerMotion}
        >
          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-3">
            {layer}
          </h4>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <motion.span
                key={tech}
                className="bg-slate-100/80 border border-slate-200/80 text-slate-700 rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors hover:bg-slate-200/50"
                variants={tagMotion}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
