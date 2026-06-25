export default function Contact() {
  return (
    <section id="contact" className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex flex-col flex-1 gap-6">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-950">Liên hệ & Khởi động dự án</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Chia sẻ bài toán hoặc ý tưởng của bạn, tôi sẽ phản hồi trong vòng 24 giờ với giải pháp kỹ thuật tối ưu nhất.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-950">Email của bạn</p>
              <input
                type="email"
                placeholder="vi-du@gmail.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-950">Yêu cầu / Ý tưởng dự án</p>
              <textarea
                rows={4}
                placeholder="Mô tả ngắn gọn về dự án hoặc vấn đề hệ thống bạn cần giải quyết..."
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>

          <div>
            <button className="inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Gửi yêu cầu tư vấn
            </button>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-slate-950 p-6 text-white shadow-lg lg:w-[320px]">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Thông tin liên hệ</p>
          <div className="mt-6 space-y-5 text-sm leading-6">
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-slate-300">dbp26214@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-white">Địa chỉ</p>
              <p className="text-slate-300">Thành Phố Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
