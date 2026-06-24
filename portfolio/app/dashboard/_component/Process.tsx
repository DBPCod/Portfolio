import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPencilRuler,
  faLaptopCode,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    number: "01",
    title: "Khảo sát",
    description: "Hiểu rõ mục tiêu và yêu cầu sản phẩm trước khi bắt đầu.",
    icon: faMagnifyingGlass,
  },
  {
    number: "02",
    title: "Thiết kế",
    description: "Lên wireframe và prototype để đảm bảo trải nghiệm người dùng.",
    icon: faPencilRuler,
  },
  {
    number: "03",
    title: "Phát triển",
    description: "Xây dựng giao diện và backend với chất lượng cao.",
    icon: faLaptopCode,
  },
  {
    number: "04",
    title: "Bàn giao",
    description: "Kiểm thử, tối ưu và chuyển giao giải pháp hoàn chỉnh.",
    icon: faPaperPlane,
  },
];

export default function Process() {
  return (
    <section id="process" className="mt-20">
      <div className="mb-8 text-center">
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Quy trình làm việc</h2>
      </div>
      <div className="relative">
          <div className="hidden absolute left-[12.5%] right-[12.5%] top-10 z-0 h-px bg-[linear-gradient(to_right,#64748b_40%,transparent_40%)] bg-[size:12px_100%] md:block"/>          
          <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 rounded-3xl p-4 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-slate-950 text-white">
                <FontAwesomeIcon icon={step.icon} className="h-6 w-6" />
              </div>
              <div className="mt-3 text-sm font-semibold tracking-wide text-slate-950">{step.number}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
