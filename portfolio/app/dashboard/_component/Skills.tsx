const overview = {
  title: "Tóm tắt chuyên môn",
  description:
    "Là một chuyên gia tư vấn công nghệ, tôi mang đến góc nhìn toàn diện từ thiết kế hệ thống đến triển khai thực tế. Kinh nghiệm làm việc với các hệ thống yêu cầu độ tin cậy cao giúp tôi xây dựng những kiến trúc vững chắc, có khả năng mở rộng.",
};

const timelineItems = [
  {
    period: "2022 - hiện tại",
    role: "Senior Fullstack Engineer",
    detail: "Đảm nhận phát triển giải pháp toàn bộ stack, triển khai tính năng doanh nghiệp và tối ưu vận hành.",
  },
  {
    period: "2020 - 2022",
    role: "Backend Engineer",
    detail: "Xây dựng API, kiến trúc dịch vụ, theo dõi hiệu năng và bảo mật hệ thống.",
  },
  {
    period: "2018 - 2020",
    role: "Frontend Developer",
    detail: "Thiết kế giao diện React/Next.js, responsive và trải nghiệm người dùng mượt mà.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="w-full mt-3 text-3xl font-semibold tracking-tight text-center text-slate-950">Hồ sơ năng lực</h2>
      <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="lg:w-[40%]">
          <h3 className="text-2xl font-semibold text-slate-950">{overview.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">{overview.description}</p>
        </div>

        <div className="lg:w-[60%]">
          <ul className="relative space-y-10 border-l border-slate-200">
            {timelineItems.map((item) => (
              <li key={item.period} className="relative pl-10">
                <span className="absolute left-0 top-4 -translate-x-1/2 h-3 w-3 rounded-full border border-slate-950 bg-white" />
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
                  <h4 className="mt-3 text-lg font-semibold text-slate-950">{item.role}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
