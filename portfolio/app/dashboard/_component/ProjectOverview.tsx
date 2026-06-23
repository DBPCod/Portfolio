const overview = [
  { label: "2+ Năm", value: "Thực chiến dự án" },
  { label: "15+ Dự án", value: "Đã hoàn thành" },
  { label: "100%", value: "Thao tác trực tiếp" },
];

export default function ProjectOverview() {
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-3">
      {overview.map((item) => (
        <div key={item.label} className="rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
          <p className="text-4xl font-semibold tracking-tight text-slate-950">{item.label}</p>
          <p className="mt-3 text-sm text-slate-600">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
