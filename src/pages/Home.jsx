import { lazy, Suspense, useEffect } from "react";
import { LoaderProvider } from "@/portfolio/context/LoaderContext";
import { ThemeProvider } from "@/portfolio/hooks/useTheme";
import { useLenis } from "@/portfolio/hooks/useLenis";
import Loader from "@/portfolio/components/Loader";
import CustomCursor from "@/portfolio/components/CustomCursor";
import ScrollProgress from "@/portfolio/components/ScrollProgress";
import Header from "@/portfolio/components/Header";
import Footer from "@/portfolio/components/Footer";
import Hero from "@/portfolio/sections/Hero";

const About = lazy(() => import("@/portfolio/sections/About"));
const Services = lazy(() => import("@/portfolio/sections/Services"));
const Skills = lazy(() => import("@/portfolio/sections/Skills"));
const Experience = lazy(() => import("@/portfolio/sections/Experience"));
const Projects = lazy(() => import("@/portfolio/sections/Projects"));
const WhyHireMe = lazy(() => import("@/portfolio/sections/WhyHireMe"));
const Process = lazy(() => import("@/portfolio/sections/Process"));
const FAQs = lazy(() => import("@/portfolio/sections/FAQs"));
const Contact = lazy(() => import("@/portfolio/sections/Contact"));

function SectionSkeleton() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto flex flex-col items-center gap-4 animate-pulse" aria-hidden>
      <div className="h-6 w-32 rounded-full bg-slate-200 dark:bg-white/10" />
      <div className="h-10 w-3/4 max-w-md rounded-2xl bg-slate-200 dark:bg-white/10" />
      <div className="h-4 w-1/2 max-w-sm rounded-lg bg-slate-200 dark:bg-white/10" />
    </div>
  );
}

const Home = () => {
  useLenis();

  useEffect(() => {
    document.title = "Mansi Khistariya — Frontend & Full-Stack MERN Developer | React & Next.js";
  }, []);

  return (
    <ThemeProvider>
      <LoaderProvider>
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main id="main-content" className="relative z-10 overflow-hidden">
          <Hero />
          <Suspense fallback={<SectionSkeleton />}>
            <About />
            <Services />
            <Skills />
            <Experience />
            <Projects />
            <WhyHireMe />
            <Process />
            <FAQs />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </LoaderProvider>
    </ThemeProvider>
  );
};

export default Home;

