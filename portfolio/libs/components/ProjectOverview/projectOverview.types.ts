export type StatItem = {
  count: number;
  suffix: string;
  label: string;
  value: string;
};

export type ProjectOverviewProps = {
  items: StatItem[];
};
