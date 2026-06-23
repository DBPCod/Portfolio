const steps = [
  { number: "01", title: "Khảo sát", description: "Hiểu rõ mục tiêu và yêu cầu sản phẩm trước khi bắt đầu." },
  { number: "02", title: "Thiết kế", description: "Lên wireframe và prototype để đảm bảo trải nghiệm người dùng." },
  { number: "03", title: "Phát triển", description: "Xây dựng giao diện và backend với chất lượng cao." },
  { number: "04", title: "Bàn giao", description: "Kiểm thử, tối ưu và chuyển giao giải pháp hoàn chỉnh." },
];

export default function Process() {
  return (
    <section id="process" className="mt-20">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Quy trình thực hiện</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Quy trình làm việc</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-lg font-semibold text-white">{step.number}</div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
