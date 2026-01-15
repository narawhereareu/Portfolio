import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../components/sections/MainPage";
import About from "../components/sections/About";
import Project from "../components/sections/Project";
import Contact from "../components/sections/Contact";
import { useAOS } from "../hooks/useAOS";

export default function Home() {
  useAOS();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainLayout activeSection={activeSection}>
      <section id="hero" className="min-h-screen flex items-center px-6 md:px-12">
        <MainPage />
      </section>

      <section id="about" className="min-h-screen flex items-center px-6 md:px-12">
        <About />
      </section>

      <section id="projects" className="min-h-screen flex items-center px-6 md:px-12">
        <Project />
      </section>

      <section id="contact" className="min-h-screen flex items-center px-6 md:px-12">
        <Contact />
      </section>

      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </MainLayout>
  );
}