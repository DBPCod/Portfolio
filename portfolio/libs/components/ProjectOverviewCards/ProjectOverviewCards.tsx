"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faCompassDrafting, faChartLine } from "@fortawesome/free-solid-svg-icons";
import type { ProjectOverviewCardsProps } from "./projectOverviewCards.types";
import { containerMotion, cardMotion, hoverMotion } from "./projectOverviewCards.animations";

export default function ProjectOverviewCards({ project }: ProjectOverviewCardsProps) {
  if (!project.overview) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <h2 className="text-xl font-bold text-[#0A192F] mb-8">Tổng quan dự án</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerMotion}
      >
        {/* Cột 1: Bài toán & Thách thức */}
        {project.overview.challenge && (
          <motion.div
            className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col cursor-default"
            variants={cardMotion}
            whileHover={hoverMotion}
          >
            <div className="w-12 h-12 rounded-lg bg-red-100/70 border border-red-200/60 text-red-500 flex items-center justify-center font-bold text-sm mb-4">
              <FontAwesomeIcon icon={faTriangleExclamation} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview.challenge.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview.challenge.points.map((point, index) => (
                <li key={index} className="text-sm text-slate-500 leading-relaxed list-disc list-inside marker:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Cột 2: Giải pháp kỹ thuật */}
        {project.overview.solution && (
          <motion.div
            className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col cursor-default"
            variants={cardMotion}
            whileHover={hoverMotion}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100/70 border border-blue-200/60 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">
              <FontAwesomeIcon icon={faCompassDrafting} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview.solution.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview.solution.points.map((point, index) => (
                <li key={index} className="text-sm text-slate-500 leading-relaxed list-disc list-inside marker:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Cột 3: Kết quả thực tế */}
        {project.overview.result && (
          <motion.div
            className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col cursor-default"
            variants={cardMotion}
            whileHover={hoverMotion}
          >
            <div className="w-12 h-12 rounded-lg bg-amber-100/70 border border-amber-200/60 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">
              <FontAwesomeIcon icon={faChartLine} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview.result.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview.result.metrics.map((metric, index) => (
                <li key={index} className="list-disc list-inside gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="font-black text-slate-900 tracking-tight">{metric.value}</span>
                  <span className="text-slate-600">{" " + metric.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
