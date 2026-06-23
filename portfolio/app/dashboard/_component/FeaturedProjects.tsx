const featuredProjects = [
  {
    title: "Hệ thống ERP Doanh nghiệp",
    description: "Nền tảng quản lý tài chính và vận hành cho doanh nghiệp lớn.",
  },
  {
    title: "Nền tảng Fintech Core",
    description: "Giải pháp giao dịch và vận hành ngân hàng số tập trung vào bảo mật.",
  },
  {
    title: "Sales Dashboard Analytics",
    description: "Bảng điều khiển dữ liệu giúp phân tích hiệu suất và ra quyết định nhanh.",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mt-20">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Dự án tiêu biểu</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Dự án nổi bật</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">Những sản phẩm đã triển khai thực tế cho doanh nghiệp, gia tăng hiệu suất và trải nghiệm người dùng.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
