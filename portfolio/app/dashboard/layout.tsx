import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevPortfolio | Dashboard",
  description: "Trang chủ portfolio với các thành phần giao diện được tách riêng thành component.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
