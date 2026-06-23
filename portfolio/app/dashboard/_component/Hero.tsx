export default function Hero() {
  return (
    <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:grid-cols-[1.75fr_1fr] md:px-10 md:py-14">
      <div className="space-y-6">
        <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-800">Lập trình viên Full-Stack</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Tôi tối ưu hiệu suất Web và xây dựng sản phẩm số chất lượng cao.</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">Chuyên sâu về React, Next.js và thiết kế UI/UX thân thiện để giúp doanh nghiệp của bạn tăng trưởng và vận hành hiệu quả hơn.</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Bắt đầu ngay</a>
          <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400">Xem dự án</a>
        </div>
      </div>
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-8 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)] sm:px-8">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-700 to-transparent" />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <div className="flex items-center justify-between rounded-3xl bg-slate-900/80 p-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Kinh nghiệm</p>
              <p className="mt-2 text-3xl font-semibold">2+ Năm</p>
            </div>
            <div className="rounded-2xl bg-slate-800 px-3 py-2 text-xs text-slate-300">Hiệu suất cao</div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-3xl bg-white/5 px-5 py-4">
              <div>
                <p className="text-sm text-slate-300">Dự án hoàn thiện</p>
                <p className="mt-1 text-xl font-semibold">15+</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-sky-500/20" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Ảnh hưởng</p>
              <p className="mt-3 text-3xl font-semibold">Tăng chuyển đổi</p>
              <p className="mt-2 text-sm text-slate-300">Tạo trải nghiệm người dùng mượt mà và dễ dùng.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
