import Process from "@/libs/components/Process/Process";
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

export default function ProcessWrapper() {
  return <Process steps={steps} />;
}
