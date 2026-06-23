const overview = [
  { label: "2+ Năm", value: "Kinh nghiệm" },
  { label: "15+", value: "Dự án" },
  { label: "100%", value: "Cam kết chất lượng" },
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
