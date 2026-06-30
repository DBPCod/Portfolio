"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";
import type { ProjectHeroProps } from "./projectHero.types";
import { containerMotion, itemMotion } from "./projectHero.animations";

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:px-8"
      initial="hidden"
      animate="visible"
      variants={containerMotion}
    >
      {/* Tiêu đề & Mô tả ngắn */}
      <motion.div variants={itemMotion}>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A192F] tracking-tight">{project.title}</h1>
        <p className="mt-2 text-base text-slate-500 font-medium">{project.subtitle}</p>
      </motion.div>

      {/* Khối Meta Tags (Vai trò, Thời gian, Khách hàng) */}
      <motion.div className="mt-6 flex flex-wrap gap-3" variants={itemMotion}>
        {project.meta?.role && (
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Vai trò</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta.role}</span>
          </div>
        )}
        {project.meta?.timeline && (
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Thời gian</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta.timeline}</span>
          </div>
        )}
        {project.meta?.client && (
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Khách hàng</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta.client}</span>
          </div>
        )}
      </motion.div>

      {/* Cụm nút Call to Action (CTA) */}
      <motion.div className="mt-8 flex flex-wrap gap-4" variants={itemMotion}>
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full items-center gap-2 bg-[#0A192F] text-white font-medium text-xs px-5 py-3 shadow-sm hover:bg-slate-700 transition-all cursor-pointer"
          >
            Xem sản phẩm thực tế
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
          </a>
        )}
        {project.links?.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FBFBFD] text-slate-700 border border-[#E6E9F0] font-medium text-xs px-5 py-3 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
          >
            Mã nguồn dự án
            <FontAwesomeIcon icon={faCode} className="w-3.5 h-3.5" />
          </a>
        )}
      </motion.div>
    </motion.section>
  );
}
