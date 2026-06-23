export default function Contact() {
  return (
    <section id="contact" className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Sẵn sàng kết nối</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Liên hệ để bắt đầu dự án</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">Gửi tin nhắn và tôi sẽ phản hồi sớm nhất có thể để trao đổi ý tưởng và giải pháp phù hợp.</p>
        </div>
        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Thông tin liên hệ</p>
          <div className="mt-6 space-y-4 text-sm leading-6">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-slate-300">hello@devportfolio.com</p>
            </div>
            <div>
              <p className="font-semibold">Điện thoại</p>
              <p className="text-slate-300">+84 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
