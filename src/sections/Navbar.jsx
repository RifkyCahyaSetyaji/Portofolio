import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Zap, ZapOff } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import useActiveSection from '../hooks/useActiveSection';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ reducedMotion, toggleReducedMotion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleScrollToSection('home')}
          className="flex items-center space-x-2 text-xl font-bold tracking-tight text-brand-primary dark:text-brand-accent group"
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Terminal className="w-6 h-6 stroke-[2.5]" />
          </motion.div>
          <span>Rifky<span className="text-brand-highlight">.S</span></span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollToSection(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-300 py-1.5 px-1 hover:text-brand-primary dark:hover:text-brand-accent ${isActive ? 'text-brand-primary dark:text-brand-accent' : 'text-brand-dark/75 dark:text-brand-textDark/75'}`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-primary dark:bg-brand-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          
          <div className="h-6 w-[1px] bg-brand-primary/20 dark:bg-brand-accent/20" />
          
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleReducedMotion}
              className="relative p-2.5 rounded-full border border-brand-primary/20 dark:border-brand-accent/20 bg-white/40 dark:bg-brand-cardDark/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-brand-primary/50 dark:hover:border-brand-accent/50 text-brand-primary dark:text-brand-accent transition-all duration-300 focus:outline-none"
              aria-label="Toggle animations"
              title={reducedMotion ? "Enable animations" : "Reduce animations"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {reducedMotion ? (
                  <motion.div
                    key="zap-off"
                    initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.6, rotate: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ZapOff size={20} className="stroke-[2]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="zap"
                    initial={{ scale: 0.6, rotate: 30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.6, rotate: -30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap size={20} className="stroke-[2] text-brand-highlight fill-brand-highlight/20" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleReducedMotion}
            className="relative p-2 rounded-full border border-brand-primary/20 dark:border-brand-accent/20 bg-white/40 dark:bg-brand-cardDark/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-brand-primary/50 dark:hover:border-brand-accent/50 text-brand-primary dark:text-brand-accent transition-all duration-300 focus:outline-none"
            aria-label="Toggle animations"
            title={reducedMotion ? "Enable animations" : "Reduce animations"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {reducedMotion ? (
                <motion.div
                  key="zap-off"
                  initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.6, rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ZapOff size={18} className="stroke-[2]" />
                </motion.div>
              ) : (
                <motion.div
                  key="zap"
                  initial={{ scale: 0.6, rotate: 30, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.6, rotate: -30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap size={18} className="stroke-[2] text-brand-highlight fill-brand-highlight/20" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary/20 dark:hover:bg-brand-accent/20 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-nav border-t border-brand-primary/10 dark:border-brand-accent/10 overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col space-y-4 px-8 py-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollToSection(item.id)}
                      className={`text-base font-semibold w-full text-left transition-colors duration-300 py-1 ${isActive ? 'text-brand-primary dark:text-brand-accent border-l-4 border-brand-primary dark:border-brand-accent pl-3' : 'text-brand-dark/75 dark:text-brand-textDark/75 pl-3'}`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
