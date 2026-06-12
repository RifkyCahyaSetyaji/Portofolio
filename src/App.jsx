import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';
import useReducedMotion from './hooks/useReducedMotion';

export default function App() {
  const [reducedMotion, toggleReducedMotion] = useReducedMotion();

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      <div className="relative min-h-screen overflow-x-hidden selection:bg-brand-primary/25 dark:selection:bg-brand-accent/25 select-none md:select-text">
        {/* Sticky Header */}
        <Navbar reducedMotion={reducedMotion} toggleReducedMotion={toggleReducedMotion} />

        {/* Page Content */}
        <main>
          <Hero reducedMotion={reducedMotion} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Utilities */}
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

