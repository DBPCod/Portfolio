import AnimatedHero from "@/libs/components/AnimatedHero/AnimatedHero";

export default function Hero() {
  return (
    <AnimatedHero
      title="Lập trình viên Full-Stack & Tối ưu hiệu suất Web."
      description="Chuyên gia kiến trúc phần mềm, tập trung vào xây dựng các ứng dụng web tốc độ cao, khả năng mở rộng tốt và tối ưu hóa chi phí hạ tầng cho doanh nghiệp."
      primaryCta={
        <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Xem dự án
        </a>
      }
      secondaryCta={
        <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400">
          Tư vấn miễn phí
        </a>
      }
      avatarSrc="/assets/avatar.jpg"
      avatarAlt="Avatar"
    />
  );
}
