import React from 'react';
import { Terminal, Mail, Phone, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const LinkedInIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function Footer() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="py-12 bg-white/40 dark:bg-brand-cardDark/40 border-t border-brand-primary/10 dark:border-brand-accent/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Branding & Logo */}
        <div className="flex items-center space-x-2 text-xl font-bold tracking-tight text-brand-primary dark:text-brand-accent mb-6">
          <Terminal className="w-5 h-5 stroke-[2.5]" />
          <span>Rifky<span className="text-brand-highlight">.S</span></span>
        </div>

        {/* Footer Navigation */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
          {['home', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleScrollTo(section)}
                className="text-xs sm:text-sm font-semibold capitalize text-brand-dark/70 dark:text-brand-textDark/70 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
              >
                {section === 'home' ? 'Home' : section}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Badges */}
        <div className="flex items-center space-x-4 mb-8">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-white/50 dark:bg-brand-cardDark/50 border border-brand-primary/10 dark:border-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all duration-300 shadow-sm"
          >
            <LinkedInIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-white/50 dark:bg-brand-cardDark/50 border border-brand-primary/10 dark:border-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all duration-300 shadow-sm"
          >
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-white/50 dark:bg-brand-cardDark/50 border border-brand-primary/10 dark:border-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all duration-300 shadow-sm"
          >
            <Mail size={18} />
          </a>
          <a
            href={`tel:${profileData.phone}`}
            aria-label="Phone"
            className="p-2.5 rounded-xl bg-white/50 dark:bg-brand-cardDark/50 border border-brand-primary/10 dark:border-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all duration-300 shadow-sm"
          >
            <Phone size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-brand-primary/10 dark:bg-brand-accent/10 mb-6" />

        {/* Copyright Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full text-center sm:text-left gap-4 text-xs font-semibold text-brand-dark/50 dark:text-brand-textDark/50">
          <span>&copy; {new Date().getFullYear()} Rifky Cahya Setyaji. All rights reserved.</span>
          <span>Didesain & Dikembangkan dengan React & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}
