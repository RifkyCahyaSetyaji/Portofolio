import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, X, Calendar, User, Clock, Star } from 'lucide-react';

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
import { projectsData } from '../data/portfolioData';

const categories = ['All', 'Web Development', 'Cyber Security', 'Desktop Application', 'WordPress Dev'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-brand-bgLight/50 dark:bg-brand-bgDark/30">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-highlight/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-brand-primary dark:text-brand-accent px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 mb-3"
          >
            My Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-brand-textDark"
          >
            Recent Works & Projects
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-primary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="p-1 rounded-2xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10 flex flex-wrap gap-1.5 max-w-full">
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isSelected
                      ? 'bg-brand-primary dark:bg-brand-accent text-brand-bgLight dark:text-brand-dark shadow-sm'
                      : 'text-brand-dark/70 dark:text-brand-textDark/70 hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer h-full border border-brand-primary/10 dark:border-brand-accent/10 group"
              >
                {/* Visual Header / Avatar Representation */}
                <div className="relative h-44 bg-gradient-to-br from-brand-primary/80 to-brand-secondary/80 dark:from-brand-accent/80 dark:to-brand-primary/80 flex items-center justify-center p-6 text-center text-brand-bgLight overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:scale-115 transition-transform duration-500" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-highlight text-brand-dark px-2.5 py-1 rounded-full shadow-sm inline-block mb-3">
                      {project.subcategory}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-brand-secondary dark:text-brand-accent mb-2 block uppercase">
                      {project.category}
                    </span>
                    <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-brand-textDark/75 line-clamp-3 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-bold bg-brand-primary/5 dark:bg-brand-accent/5 text-brand-dark/50 dark:text-brand-textDark/50 px-2 py-0.5 rounded">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-brand-bgLight dark:bg-brand-cardDark border border-brand-primary/20 dark:border-brand-accent/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header Details */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-cardDark dark:to-brand-cardDark text-brand-bgLight border-b border-brand-primary/10 dark:border-brand-accent/10 flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest bg-brand-highlight text-brand-dark px-2.5 py-1 rounded-full mb-3 inline-block">
                    {selectedProject.subcategory}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-brand-accent">
                    {selectedProject.title}
                  </h3>
                  <span className="text-xs text-brand-bgLight/85 dark:text-brand-textDark/60 block mt-1">
                    Category: {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-white/20 dark:bg-white/5 hover:bg-white/30 dark:hover:bg-white/10 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[60vh] space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary dark:text-brand-accent mb-2">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80 dark:text-brand-textDark/80 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Project Stats (Team, Duration, Role) */}
                <div className="grid grid-cols-3 gap-4 p-4.5 rounded-2xl bg-brand-primary/5 dark:bg-brand-bgDark/40 border border-brand-primary/10 dark:border-brand-accent/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 dark:text-brand-textDark/40 flex items-center gap-1.5">
                      <User className="w-3 h-3" /> Team Size
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-primary dark:text-brand-accent mt-1">
                      {selectedProject.stats.TeamSize}
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-brand-primary/10 dark:border-brand-accent/10 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 dark:text-brand-textDark/40 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> Duration
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-primary dark:text-brand-accent mt-1">
                      {selectedProject.stats.Duration}
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-brand-primary/10 dark:border-brand-accent/10 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 dark:text-brand-textDark/40 flex items-center gap-1.5">
                      <Star className="w-3 h-3" /> My Role
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-primary dark:text-brand-accent mt-1 line-clamp-1">
                      {selectedProject.stats.Role}
                    </span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary dark:text-brand-accent mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-bold bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent px-3 py-1 rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 border-t border-brand-primary/10 dark:border-brand-accent/10 flex justify-end gap-3.5 bg-brand-primary/5 dark:bg-brand-bgDark/20">
                <a
                  href={selectedProject.githubUrl}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-brand-primary/20 dark:border-brand-accent/20 text-brand-primary dark:text-brand-accent font-semibold text-xs sm:text-sm hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.demoUrl}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-primary dark:bg-brand-accent text-brand-bgLight dark:text-brand-dark font-semibold text-xs sm:text-sm hover:bg-brand-secondary dark:hover:bg-brand-accent/80 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
