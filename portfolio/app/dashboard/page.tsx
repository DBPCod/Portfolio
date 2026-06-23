import Contact from "./_component/Contact";
import FeaturedProjects from "./_component/FeaturedProjects";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import Hero from "./_component/Hero";
import Process from "./_component/Process";
import ProjectOverview from "./_component/ProjectOverview";
import Skills from "./_component/Skills";

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
        <Footer />
      </div>
    </main>
  );
}
