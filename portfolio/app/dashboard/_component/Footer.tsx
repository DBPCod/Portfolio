export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 DevPortfolio. Thiết kế & phát triển bởi bạn.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="transition hover:text-slate-950">Dự án</a>
          <a href="#skills" className="transition hover:text-slate-950">Năng lực</a>
          <a href="#contact" className="transition hover:text-slate-950">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}
