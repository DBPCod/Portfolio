const skills = [
  { title: "Senior Full-Stack Consultant", description: "Xây dựng giải pháp web toàn diện, tối ưu hiệu suất và vận hành." },
  { title: "Frontend Developer", description: "React, Next.js, Tailwind, UI/UX hiện đại và responsive." },
  { title: "Backend Engineer", description: "API, Node.js, hệ thống microservices, bảo mật và hiệu suất." },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Hồ sơ năng lực</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Năng lực chuyên môn</h2>
        </div>
        <p className="text-sm leading-6 text-slate-600">Kinh nghiệm làm việc với dự án doanh nghiệp, hệ thống trải nghiệm người dùng và tối ưu tốc độ tải trang.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-950">{skill.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
