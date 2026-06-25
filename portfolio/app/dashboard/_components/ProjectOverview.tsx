import ProjectOverview from "@/libs/components/ProjectOverview/ProjectOverview";

const overview = [
  {
    count: 2,
    suffix: "+",
    label: "Năm",
    value: "Thực chiến dự án",
  },
  {
    count: 6,
    suffix: "+",
    label: "Dự án",
    value: "Đã hoàn thành",
  },
  {
    count: 90,
    suffix: "%",
    label: "",
    value: "Thao tác trực tiếp",
  },
];

export default function ProjectOverviewWrapper() {
  return <ProjectOverview items={overview} />;
}
