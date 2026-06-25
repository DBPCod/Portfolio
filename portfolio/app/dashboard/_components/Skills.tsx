const overview = {
  title: "Tóm tắt chuyên môn",
  description:
    "Tôi xây dựng ứng dụng web và mobile từ ý tưởng đến sản phẩm hoàn chỉnh. Thành thạo Next.js, React Native, Node.js, .NET, PostgreSQL và MySQL, tôi tập trung vào việc tạo ra các giải pháp hiện đại, hiệu quả và mang lại giá trị thực tế cho người dùng.",
};

const timelineItems = [
  {
    period: "2024 - Hiện tại",
    role: "Fullstack & Mobile Developer",
    detail:
      "Xây dựng ứng dụng web và mobile sử dụng Next.js, React Native, Expo, Node.js, .NET, PostgreSQL và MySQL.",
  },
  {
    period: "2023 - 2024",
    role: "Android Developer",
    detail:
      "Phát triển ứng dụng Android bằng Kotlin và Jetpack Compose theo kiến trúc MVVM.",
  },
  {
    period: "2022 - 2023",
    role: "Software Engineering Student",
    detail:
      "Học tập và thực hành lập trình, cơ sở dữ liệu và phát triển phần mềm.",
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
          <ul className="relative space-y-10">
            <div className="absolute left-[5px] top-0 bottom-0 w-px bg-slate-300" />

            {timelineItems.map((item) => (
              <li key={item.period} className="group relative flex gap-6 items-start">
                <div className="relative z-10 mt-1">
                  <div className="w-3 h-3 rounded-full border border-slate-500 bg-white transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:scale-125" />
                </div>
                <div className="flex-grow bg-slate-50/60 border border-slate-100 rounded-2xl p-6 transition-all duration-300 ease-in-out cursor-pointer group-hover:bg-white group-hover:border-slate-200 group-hover:translate-x-1 group-hover:shadow-md">
                  <p className="text-xs font-semibold text-slate-400 tracking-wider">
                    {item.period}
                  </p>

                  <h4 className="text-base font-bold text-slate-900 mt-3">
                    {item.role}
                  </h4>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
