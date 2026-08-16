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

const Home = () => {
  useLenis();

  useEffect(() => {
    document.title = "Mansi Khistariya — Frontend Developer & React.js Specialist | MERN Stack Engineer";
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
          <Suspense fallback={null}>
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
