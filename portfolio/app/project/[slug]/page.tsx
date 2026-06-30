"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { PROJECTS_DATA } from '@/libs/data/projects.data';
import Header from '@/app/dashboard/_components/Header';
import { faArrowRight, faArrowUpRightFromSquare, faCode, faTriangleExclamation, faCompassDrafting, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [resolvedSlug, setResolvedSlug] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    params.then((resolvedParams) => {
      if (isMounted) {
        setResolvedSlug(resolvedParams.slug);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [params]);

  const project = resolvedSlug
    ? PROJECTS_DATA[resolvedSlug as keyof typeof PROJECTS_DATA]
    : null;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const screenshots = project?.screenshots ?? [];
  const architectureSlides = project?.assets?.architecture ?? [];
  const slideCount = screenshots.length;

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    if (slideCount === 0) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, 3000);
  }, [slideCount]);

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [startAutoSlide]);

  const handlePreviousSlide = useCallback(() => {
    if (slideCount === 0) {
      return;
    }

    setActiveSlideIndex((currentIndex) => (currentIndex - 1 + slideCount) % slideCount);
    startAutoSlide();
  }, [slideCount, startAutoSlide]);

  const handleNextSlide = useCallback(() => {
    if (slideCount === 0) {
      return;
    }

    setActiveSlideIndex((currentIndex) => (currentIndex + 1) % slideCount);
    startAutoSlide();
  }, [slideCount, startAutoSlide]);

  if (!project) return null;

  return (
    // Bọc toàn bộ trang bằng một dải nền xám nhẹ dịu mắt đồng bộ với phần Portfolio chính
    <main className="w-full bg-slate-50 min-h-screen antialiased text-slate-600">
      <Header></Header>
      {/* SECTION 1: HERO & HEADER DETAILS */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A192F] tracking-tight">{project.title}</h1>
        <p className="mt-2 text-base text-slate-500 font-medium">{project.subtitle}</p>

        {/* Khối Meta Tags (Vai trò, Thời gian, Khách hàng) */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Vai trò</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta?.role}</span>
          </div>
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Thời gian</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta?.timeline}</span>
          </div>
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Khách hàng</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta?.client}</span>
          </div>
        </div>

        {/* Cụm nút Call to Action (CTA) */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a 
            href={project.links?.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex rounded-full items-center gap-2 bg-[#0A192F] text-white font-medium text-xs px-5 py-3 shadow-sm hover:bg-slate-700 transition-all cursor-pointer"
          >
            Xem sản phẩm thực tế
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
          </a>
          <a 
            href={project.links?.source} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FBFBFD] text-slate-700 border border-[#E6E9F0] font-medium text-xs px-5 py-3 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
          >
            Mã nguồn dự án
            <FontAwesomeIcon icon={faCode} className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* SECTION 2: BROWSER INTERFACE MOCKUP */}
      <section className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="w-full bg-slate-200/70 border border-slate-300/40 rounded-3xl p-4 md:p-8 flex justify-center items-center">
          {/* Giả lập khung Trình duyệt cao cấp */}
          <div className="w-full bg-[#FBFBFD] rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.06)] border border-[#E6E9F0] overflow-hidden">
            {/* Thanh điều hướng Top-bar của trình duyệt */}
            <div className="bg-slate-50 border-b border-[#E6E9F0] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="bg-white border border-slate-200 rounded-lg mx-auto w-2/3 h-6" />
            </div>
            {/* Vùng hiển thị ảnh giao diện chính */}
            <div className="relative aspect-[16/10] bg-white flex items-center justify-center p-6">
              <button
                type="button"
                onClick={handlePreviousSlide}
                className="absolute left-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500"
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 rotate-180" />
              </button>

              <div className="relative w-full h-full rounded-lg border border-slate-100 overflow-hidden bg-white">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
                >
                  {screenshots.map((imageSrc, index) => (
                    <div key={imageSrc} className="min-w-full h-full flex items-center justify-center">
                      <img
                        src={imageSrc}
                        alt={`${project.title} Screenshot ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextSlide}
                className="absolute right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500"
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TỔNG QUAN DỰ ÁN (CHALLENGE - SOLUTION - RESULT) */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <h2 className="text-xl font-bold text-[#0A192F] mb-8">Tổng quan dự án</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cột 1: Bài toán & Thách thức */}
          <div className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-red-100/70 border border-red-200/60 text-red-500 flex items-center justify-center font-bold text-sm mb-4">
              <FontAwesomeIcon icon={faTriangleExclamation} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview?.challenge?.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview?.challenge?.points.map((point, index) => (
                <li key={index} className="text-sm text-slate-500 leading-relaxed list-disc list-inside marker:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 2: Giải pháp kỹ thuật */}
          <div className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-blue-100/70 border border-blue-200/60 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">
              <FontAwesomeIcon icon={faCompassDrafting} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview?.solution?.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview?.solution?.points.map((point, index) => (
                <li key={index} className="text-sm text-slate-500 leading-relaxed list-disc list-inside marker:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Kết quả thực tế */}
          <div className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-amber-100/70 border border-amber-200/60 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">
              <FontAwesomeIcon icon={faChartLine} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview?.result?.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview?.result?.metrics.map((metric, index) => (
                <li key={index} className="list-disc list-inside gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="font-black text-slate-900 tracking-tight">{metric.value}</span>
                  <span className="text-slate-600">{" " + metric.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: CÔNG NGHỆ & KIẾN TRÚC HỆ THỐNG */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <h2 className="text-xl font-bold text-[#0A192F] mb-8">Công nghệ & Kiến trúc hệ thống</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Cột bên trái: Tech Stacks */}
          <div className="md:col-span-4 space-y-4">
            {Object.entries(project.technologies).map(([layer, techs]) => (
              <div
                key={layer}
                className={`rounded-xl p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)] border ${
                  layer === 'frontend'
                    ? 'border-l-4 border-slate-800'
                    : layer === 'backend'
                    ? 'border-l-4 border-slate-800'
                    : 'border-l-4 border-slate-800'
                }`}
              >
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 mb-3">
                  {layer}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100/80 border border-slate-200/80 text-slate-700 rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors hover:bg-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cột bên phải: Architecture Slider - Chiều cao khớp với bên trái */}
          <div className="md:col-span-8 flex flex-col">
            <div className="flex-1 bg-slate-200/70 border border-slate-300/40 rounded-3xl p-4 md:p-8 flex flex-col">
              
              {/* Browser-like frame */}
              <div className="flex-1 bg-[#FBFBFD] rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.06)] border border-[#E6E9F0] overflow-hidden flex flex-col">
                
                {/* Browser Top Bar */}
                <div className="bg-slate-50 border-b border-[#E6E9F0] px-4 py-3 flex items-center gap-2 flex-shrink-0">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-200" />
                    <span className="w-3 h-3 rounded-full bg-slate-200" />
                    <span className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg mx-auto w-2/3 h-6" />
                </div>

                {/* Slider Area - Linh hoạt chiều cao */}
                <div className="relative flex-1 bg-white flex items-center justify-center p-6 min-h-0">
                  
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={handlePreviousSlide}
                    className="absolute left-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500 hover:text-slate-700 transition-all"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 rotate-180" />
                  </button>

                  {/* Slider Container */}
                  <div className="relative w-full h-full rounded-lg border border-slate-100 overflow-hidden bg-white">
                    <div
                      className="flex h-full transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
                    >
                      {architectureSlides.map((slide) => (
                        <div
                          key={slide.id}
                          className="min-w-full h-full flex flex-col items-center justify-center p-4"
                        >
                          <div className="w-full flex-1 flex items-center justify-center bg-white rounded-lg overflow-hidden border border-slate-50">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="mt-6 text-center px-4">
                            <h3 className="text-base font-bold text-slate-900">{slide.title}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="absolute right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500 hover:text-slate-700 transition-all"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOTTOM CALL TO ACTION BANNER */}
      <section className="w-full bg-[#0A192F] text-white py-12 px-6 flex flex-col items-center text-center">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">
          Bạn muốn xây dựng hoặc tối ưu hệ thống tương tự cho sản phẩm của mình?
        </h2>
        
        <a href = "/dashboard#contact" className="mt-6 inline-block bg-[#00E5FF] hover:bg-cyan-400 text-[#0A192F] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer">
          Nhận tư vấn miễn phí ngay
        </a>
      </section>

    </main>
  );
}