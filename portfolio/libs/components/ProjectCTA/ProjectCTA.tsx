"use client";

import { motion } from "framer-motion";
import type { ProjectCTAProps } from "./projectCTA.types";
import { pulseMotion } from "./projectCTA.animations";

export default function ProjectCTA({
  href = "/dashboard#contact",
  label = "Nhận tư vấn miễn phí ngay",
}: ProjectCTAProps) {
  return (
    <section className="w-full bg-[#0A192F] text-white py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-lg md:text-xl font-bold tracking-tight">
        Bạn muốn xây dựng hoặc tối ưu hệ thống tương tự cho sản phẩm của mình?
      </h2>

      <motion.a
        href={href}
        className="mt-6 inline-block bg-[#00E5FF] hover:bg-cyan-400 text-[#0A192F] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
        variants={pulseMotion}
        animate="animate"
      >
        {label}
      </motion.a>
    </section>
  );
}
