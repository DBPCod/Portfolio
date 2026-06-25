import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/libs/data/projects.data';
const featuredProjects = Object.values(PROJECTS_DATA).map((p) => ({
  title: p.title,
  description: p.subtitle ?? p.overview?.result?.description ?? '',
  technologies: [
    ...(p.technologies?.frontend ?? []),
    ...(p.technologies?.backend ?? []),
  ].slice(0, 3),
  image: p.mainMockup ?? '/assets/loading.jpg',
  slug: p.slug,
}));

export default function FeaturedProjects() {

  library.add(faArrowRight);
  return (
    <section id="projects" className="mt-20">
      <div className="mb-8 text-center">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Dự án tiêu biểu</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Các giải pháp kỹ thuật được thiết kế riêng biệt để giải quyết các bài toán kinh doanh phức tạp.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="group h-48 min-h-[180px] overflow-hidden rounded-t-3xl bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/loading.jpg";
                }}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-1 flex-col gap-5 p-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-950">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={`/project/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-800"
                >
                  Xem chi tiết
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
