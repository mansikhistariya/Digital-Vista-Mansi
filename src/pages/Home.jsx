import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider } from "@/portfolio/hooks/useTheme.jsx";
import { useLenis } from "@/portfolio/hooks/useLenis";
import Header from "@/portfolio/components/Header";
import Footer from "@/portfolio/components/Footer";
import Hero from "@/portfolio/sections/Hero";

const About = lazy(() => import("@/portfolio/sections/About"));
const Skills = lazy(() => import("@/portfolio/sections/Skills"));
const Experience = lazy(() => import("@/portfolio/sections/Experience"));
const Projects = lazy(() => import("@/portfolio/sections/Projects"));
const CaseStudies = lazy(() => import("@/portfolio/sections/CaseStudies"));
const Testimonials = lazy(() => import("@/portfolio/sections/Testimonials"));
const Blog = lazy(() => import("@/portfolio/sections/Blog"));
const Contact = lazy(() => import("@/portfolio/sections/Contact"));

const Home = () => {
  useLenis();

  useEffect(() => {
    document.title = "Mansi Khistariya — Frontend Developer";
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <CaseStudies />
          <Testimonials />
          <Blog />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
