export default function Hero() {
  return (
    <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:grid-cols-[1.75fr_1fr] md:px-10 md:py-14">
      <div className="space-y-6">
        <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-800">Lập trình viên Full-Stack</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Lập trình viên Full-Stack
& Tối ưu hiệu suất Web.</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">Chuyên gia kiến trúc phần mềm, tập trung vào xây dựng các ứng dụng web tốc độ cao, khả năng mở rộng tốt và tối ưu hóa chi phí hạ tầng cho doanh nghiệp.</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Xem dự án</a>
          <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400">Tư vấn miễn phí</a>
        </div>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-32" />
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/20 bg-slate-900">
            <img
              src="/assets/avatar.jpg"
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
