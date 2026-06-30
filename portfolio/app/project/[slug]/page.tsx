"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { PROJECTS_DATA } from '@/libs/data/projects.data';
import Header from '@/app/dashboard/_components/Header';
import { faArrowRight, faArrowUpRightFromSquare, faCode, faTriangleExclamation, faCompassDrafting, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectHero from '@/libs/components/ProjectHero/ProjectHero';
import ProjectOverviewCards from '@/libs/components/ProjectOverviewCards/ProjectOverviewCards';
import ProjectTechTags from '@/libs/components/ProjectTechTags/ProjectTechTags';

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
  const [activeArchSlideIndex, setActiveArchSlideIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const archIntervalRef = useRef<number | null>(null);
  const screenshots = project?.screenshots ?? [];
  const architectureSlides = project?.assets?.architecture ?? [];
  const slideCount = screenshots.length;
  const archSlideCount = architectureSlides.length;

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

  const startArchAutoSlide = useCallback(() => {
    if (archIntervalRef.current !== null) {
      window.clearInterval(archIntervalRef.current);
    }

    if (archSlideCount === 0) {
      return;
    }

    archIntervalRef.current = window.setInterval(() => {
      setActiveArchSlideIndex((currentIndex) => (currentIndex + 1) % archSlideCount);
    }, 3000);
  }, [archSlideCount]);

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [startAutoSlide]);

  useEffect(() => {
    startArchAutoSlide();

    return () => {
      if (archIntervalRef.current !== null) {
        window.clearInterval(archIntervalRef.current);
      }
    };
  }, [startArchAutoSlide]);

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

  const handlePreviousArchSlide = useCallback(() => {
    if (archSlideCount === 0) {
      return;
    }
    setActiveArchSlideIndex((currentIndex) => (currentIndex - 1 + archSlideCount) % archSlideCount);
    startArchAutoSlide();
  }, [archSlideCount, startArchAutoSlide]);

  const handleNextArchSlide = useCallback(() => {
    if (archSlideCount === 0) {
      return;
    }
    setActiveArchSlideIndex((currentIndex) => (currentIndex + 1) % archSlideCount);
    startArchAutoSlide();
  }, [archSlideCount, startArchAutoSlide]);

  if (!project) return null;

  return (
    // Bọc toàn bộ trang bằng một dải nền xám nhẹ dịu mắt đồng bộ với phần Portfolio chính
    <main className="w-full bg-slate-50 min-h-screen antialiased text-slate-600">
      <Header></Header>
      {/* SECTION 1: HERO & HEADER DETAILS */}
      <ProjectHero project={project} />

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
      <ProjectOverviewCards project={project} />

      {/* SECTION 4: CÔNG NGHỆ & KIẾN TRÚC HỆ THỐNG */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <h2 className="text-xl font-bold text-[#0A192F] mb-8">Công nghệ & Kiến trúc hệ thống</h2>

        {/* Nhóm Tech Stacks dàn ngang thành 3 cột đều nhau */}
        <ProjectTechTags technologies={project.technologies} />

        {/* Khung Slider chiếm 100% chiều rộng phía dưới */}
        <div className="w-full bg-slate-200/70 border border-slate-300/40 rounded-3xl p-4 md:p-8 flex justify-center items-center">

          {/* Browser-like frame */}
          <div className="w-full bg-[#FBFBFD] rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.06)] border border-[#E6E9F0] overflow-hidden flex flex-col">

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
            <div className="relative aspect-[16/10] bg-white flex items-center justify-center p-6">

              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePreviousArchSlide}
                className="absolute left-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500 hover:text-slate-700 transition-all"
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 rotate-180" />
              </button>

              {/* Slider Container */}
              <div className="relative w-full h-full rounded-lg border border-slate-100 overflow-hidden bg-white">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeArchSlideIndex * 100}%)` }}
                >
                  {architectureSlides.map((slide) => (
                    <div
                      key={slide.id}
                      className="min-w-full h-full relative"
                    >
                      <div className="absolute inset-0 p-6 pb-16 flex items-center justify-center">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                        <h3 className="text-sm md:text-base font-bold text-slate-900">{slide.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextArchSlide}
                className="absolute right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500 hover:text-slate-700 transition-all"
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOTTOM CALL TO ACTION BANNER */}
      <section className="w-full bg-[#0A192F] text-white py-12 px-6 flex flex-col items-center text-center">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">
          Bạn muốn xây dựng hoặc tối ưu hệ thống tương tự cho sản phẩm của mình?
        </h2>

        <a href="/dashboard#contact" className="mt-6 inline-block bg-[#00E5FF] hover:bg-cyan-400 text-[#0A192F] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer">
          Nhận tư vấn miễn phí ngay
        </a>
      </section>

    </main>
  );
}