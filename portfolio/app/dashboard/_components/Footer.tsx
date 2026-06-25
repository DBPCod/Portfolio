export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-8">
      {/* Thêm max-w-6xl để nội dung footer thẳng hàng hoàn toàn với các phần phía trên */}
      <div className="mx-auto flex max-w-full flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-8">
        
        {/* Dạt hẳn về bên TRÁI trên màn hình máy tính */}
        <p className="text-sm text-slate-400 order-2 md:order-1">
          © 2026 DBPCod. Thiết kế & phát triển bởi bạn.
        </p>
        
        {/* Dạt hẳn về bên PHẢI trên màn hình máy tính */}
        <div className="flex gap-6 text-sm text-slate-400 order-1 md:order-2">
          <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
          <a href="#experience" className="hover:text-white transition-colors">Năng lực</a>
          <a href="#contact" className="hover:text-white transition-colors">Liên hệ</a>
        </div>

      </div>
    </footer>
  );
}
