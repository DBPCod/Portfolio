import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/libs/data/projects.data';
import Header from '@/app/dashboard/_components/Header';
import { faArrowRight, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA[resolvedParams.slug as keyof typeof PROJECTS_DATA];
  
  if (!project) return notFound();

  return (
    // Bọc toàn bộ trang bằng một dải nền xám nhẹ dịu mắt đồng bộ với phần Portfolio chính
    <main className="w-full bg-slate-50 min-h-screen antialiased text-slate-600">
      <Header></Header>
      {/* SECTION 1: HERO & HEADER DETAILS */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A192F] tracking-tight">{project.title}</h1>
        <p className="mt-2 text-base text-slate-500 font-medium">{project.subtitle}</p>

        {/* Khối Meta Tags (Vai trò, Thời gian, Khách hàng) */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Vai trò</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta?.role}</span>
          </div>
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Thời gian</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta?.timeline}</span>
          </div>
          <div className="bg-[#EEEDF2] border border-slate-200/60 rounded-xl px-4 py-2 text-xs">
            <span className="block text-slate-400 font-medium uppercase tracking-wider scale-90 origin-left">Khách hàng</span>
            <span className="font-semibold text-slate-700 block mt-0.5">{project.meta?.client}</span>
          </div>
        </div>

        {/* Cụm nút Call to Action (CTA) */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a 
            href={project.links?.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex rounded-full items-center gap-2 bg-[#0A192F] text-white font-medium text-xs px-5 py-3 shadow-sm hover:bg-slate-700 transition-all cursor-pointer"
          >
            Xem sản phẩm thực tế
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
          </a>
          <a 
            href={project.links?.source} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FBFBFD] text-slate-700 border border-[#E6E9F0] font-medium text-xs px-5 py-3 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
          >
            Mã nguồn dự án
            <FontAwesomeIcon icon={faCode} className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* SECTION 2: BROWSER INTERFACE MOCKUP */}
      <section className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="w-full bg-slate-200/70 border border-slate-300/40 rounded-3xl p-4 md:p-8 flex justify-center items-center">
          {/* Giả lập khung Trình duyệt cao cấp */}
          <div className="w-full bg-[#FBFBFD] rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.06)] border border-[#E6E9F0] overflow-hidden">
            {/* Thanh điều hướng Top-bar của trình duyệt */}
            <div className="bg-slate-50 border-b border-[#E6E9F0] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="bg-white border border-slate-200 rounded-lg mx-auto w-2/3 h-6" />
            </div>
            {/* Vùng hiển thị ảnh giao diện chính */}
            <div className="relative aspect-[16/10] bg-slate-50 flex items-center justify-center p-6">
              <img 
                src={project.mainMockup} 
                alt={`${project.title} Interface`}
                className="w-full h-auto object-contain rounded-lg border border-slate-100" 
              />
              <span className="absolute bottom-3 right-4 bg-slate-900/10 backdrop-blur-sm text-[10px] font-medium text-slate-500 px-2 py-1 rounded-md">
                Main Interface Mockup
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TỔNG QUAN DỰ ÁN (CHALLENGE - SOLUTION - RESULT) */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <h2 className="text-xl font-bold text-[#0A192F] mb-8">Tổng quan dự án</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cột 1: Bài toán & Thách thức */}
          <div className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center font-bold text-sm mb-4">⚠️</div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview?.challenge?.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview?.challenge?.points.map((point, index) => (
                <li key={index} className="text-sm text-slate-500 leading-relaxed list-disc list-inside marker:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 2: Giải pháp kỹ thuật */}
          <div className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">👔</div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview?.solution?.title}</h3>
            <ul className="space-y-3 flex-grow">
              {project.overview?.solution?.points.map((point, index) => (
                <li key={index} className="text-sm text-slate-500 leading-relaxed list-disc list-inside marker:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Kết quả thực tế */}
          <div className="bg-[#FBFBFD] border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">📈</div>
            <h3 className="text-base font-bold text-slate-900 mb-3">{project.overview?.result?.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">{project.overview?.result?.description}</p>
            
            {/* Chỉ số Metrics */}
            <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
              {project.overview?.result?.metrics.map((metric, index) => (
                <div key={index} className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">{metric.value}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CÔNG NGHỆ & KIẾN TRÚC HỆ THỐNG */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <h2 className="text-xl font-bold text-[#0A192F] mb-8">Công nghệ & Kiến trúc hệ thống</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Cột bên trái: Danh sách các tầng Tech Stacks (Chiếm 4/12 cột) */}
          <div className="md:col-span-4 space-y-4">
            {Object.entries(project.technologies).map(([layer, techs]) => (
              <div key={layer} className="bg-[#FBFBFD] border border-slate-100 rounded-xl p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-3">
                  {layer}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="bg-slate-100 border border-slate-200/40 text-slate-600 rounded-lg px-2.5 py-1 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cột bên phải: Slider Kiến trúc hệ thống (Chiếm 8/12 cột) */}
          <div className="md:col-span-8 bg-slate-200/70 border border-slate-300/40 rounded-3xl p-4 md:p-6 relative">
            <div className="bg-[#FBFBFD] rounded-2xl border border-[#E6E9F0] p-6 shadow-md flex flex-col items-center justify-center min-h-[300px] relative text-center">
              
              {/* Nút điều hướng mũi tên trái/phải */}
              <button className="absolute left-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500">
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 rotate-180" />
              </button>
              <button className="absolute right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center cursor-pointer text-slate-500">
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>

              {/* Nội dung Mock Slide số 1 */}
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-4 text-slate-500">
                🧬
              </div>
              <h3 className="text-base font-bold text-slate-900">{project.architectureSlides?.[0]?.title}</h3>
              <p className="text-sm text-slate-500 max-w-md mt-2 leading-relaxed">
                {project.architectureSlides?.[0]?.description}
              </p>

              {/* Dấu chấm điều hướng (Pagination Dots) */}
              <div className="flex gap-1.5 mt-8">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOTTOM CALL TO ACTION BANNER */}
      <section className="w-full bg-[#0A192F] text-white py-12 text-center px-6">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">
          Bạn muốn xây dựng hoặc tối ưu hệ thống tương tự cho doanh nghiệp của mình?
        </h2>
        <button className="mt-5 bg-[#00E5FF] hover:bg-cyan-400 text-[#0A192F] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer">
          Nhận tư vấn miễn phí ngay
        </button>
      </section>

    </main>
  );
}