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
const Skills = lazy(() => import("@/portfolio/sections/Skills"));
const Experience = lazy(() => import("@/portfolio/sections/Experience"));
const Projects = lazy(() => import("@/portfolio/sections/Projects"));
const Contact = lazy(() => import("@/portfolio/sections/Contact"));

const Home = () => {
  useLenis();

  useEffect(() => {
    document.title = "Mansi Khistariya — Senior Frontend Engineer & UI Architect";
  }, []);

  return (
    <ThemeProvider>
      <LoaderProvider>
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main className="relative z-10 overflow-hidden">
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </LoaderProvider>
    </ThemeProvider>
  );
};

export default Home;
