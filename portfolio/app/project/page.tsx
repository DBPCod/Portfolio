import Link from 'next/link';
import { PROJECTS_DATA } from '@/libs/data/projects.data';

const projects = Object.values(PROJECTS_DATA).map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.subtitle ?? p.overview?.result?.description ?? '',
}));

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-slate-950 mb-6">Dự án</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/project/${p.slug}`} className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-900">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
