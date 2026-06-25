import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/libs/data/projects.data';

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA[resolvedParams.slug as keyof typeof PROJECTS_DATA];
  
  if (!project) return notFound();

  const content = project.overview?.result?.description ?? project.subtitle ?? '';

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-slate-950">{project.title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        {project.meta?.timeline} • {project.meta?.role}
      </p>
      <p className="mt-6 text-slate-600">{content}</p>
    </main>
  );
}
