import Contact from "./_components/Contact";
import FeaturedProjects from "./_components/FeaturedProjects";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Process from "./_components/Process";
import ProjectOverview from "./_components/ProjectOverview";
import Skills from "./_components/Skills";

export default function DashboardHome() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:px-8">
        <Hero />
        <ProjectOverview />
        <FeaturedProjects />
        <Skills />
        <Process />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
