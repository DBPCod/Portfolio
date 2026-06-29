import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <Link href="/dashboard">
            <span className="text-lg font-semibold tracking-tight text-slate-950">DBPCod</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#" className="transition hover:text-slate-950">Dịch vụ</a>
          <a href="#projects" className="transition hover:text-slate-950">Dự án</a>
          <a href="#" className="transition hover:text-slate-950">Kinh nghiệm</a>
          <a href="#skills" className="transition hover:text-slate-950">Kỹ năng</a>
          <a href="#process" className="transition hover:text-slate-950">Quy trình</a>
          <a href="#" className="transition hover:text-slate-950">Đánh giá</a>
          <a href="#contact" className="transition hover:text-slate-950">Liên hệ</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Liên hệ ngay
        </a>
      </div>
    </header>
  );
}

