export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-8">
      {/* Thêm max-w-6xl để nội dung footer thẳng hàng hoàn toàn với các phần phía trên */}
      <div className="mx-auto flex max-w-full flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-14">
        
        {/* Dạt hẳn về bên TRÁI trên màn hình máy tính */}
        <p className="text-sm text-slate-400 order-2 md:order-1">
          © 2026 DBPCod. Thiết kế & phát triển bởi bạn.
        </p>
        
        <div className="flex gap-6 text-sm text-slate-400 order-1 md:order-2">
          <a href="https://github.com/DBPCod" className="hover:text-white transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/phong-đinh-bá-8a3280292" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://zalo.me/0932788919" className="hover:text-white transition-colors">Zalo</a>
        </div>

      </div>
    </footer>
  );
}
