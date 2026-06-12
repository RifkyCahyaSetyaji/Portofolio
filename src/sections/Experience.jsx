import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [filter, setFilter] = useState('All'); // 'All', 'Work', 'Organization'

  const filteredExperience = experienceData.filter((exp) => {
    if (filter === 'All') return true;
    if (filter === 'Work') return exp.type === 'Internship' || exp.type === 'Freelance';
    return exp.type === 'Organization';
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[90px]" />

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
            Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-brand-textDark"
          >
            Internships & Organization History
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-primary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-16">
          <div className="p-1 rounded-xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10 flex gap-1 shadow-sm">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === 'All'
                  ? 'bg-brand-primary dark:bg-brand-accent text-brand-bgLight dark:text-brand-dark'
                  : 'text-brand-dark/70 dark:text-brand-textDark/70 hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10'
              }`}
            >
              All Experience
            </button>
            <button
              onClick={() => setFilter('Work')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === 'Work'
                  ? 'bg-brand-primary dark:bg-brand-accent text-brand-bgLight dark:text-brand-dark'
                  : 'text-brand-dark/70 dark:text-brand-textDark/70 hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10'
              }`}
            >
              Internship & Work
            </button>
            <button
              onClick={() => setFilter('Organization')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === 'Organization'
                  ? 'bg-brand-primary dark:bg-brand-accent text-brand-bgLight dark:text-brand-dark'
                  : 'text-brand-dark/70 dark:text-brand-textDark/70 hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10'
              }`}
            >
              Organizations
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-brand-primary/15 dark:border-brand-accent/15 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((exp, idx) => {
              const isWork = exp.type === 'Internship' || exp.type === 'Freelance';
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Icon Node */}
                  <span className={`absolute -left-[45px] md:-left-[61px] top-1.5 p-2 rounded-full border-2 border-brand-bgLight dark:border-brand-bgDark text-brand-bgLight dark:text-brand-dark group-hover:scale-110 transition-all ${
                    isWork ? 'bg-brand-primary dark:bg-brand-accent' : 'bg-brand-highlight text-brand-dark'
                  }`}>
                    {isWork ? <Briefcase className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                  </span>

                  {/* Card Container */}
                  <div className="glass-card p-6 md:p-8 rounded-3xl">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded mb-2 inline-block ${
                          isWork ? 'bg-brand-primary/10 text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent' : 'bg-brand-highlight/10 text-brand-dark dark:text-brand-highlight'
                        }`}>
                          {exp.type}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-brand-dark dark:text-brand-textDark group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-brand-secondary dark:text-brand-accent/80 mt-0.5">
                          {exp.company}
                        </h4>
                      </div>
                      
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark/50 dark:text-brand-textDark/45 mt-2 md:mt-0.5 bg-brand-primary/5 dark:bg-brand-bgDark/50 px-3 py-1 rounded-xl border border-brand-primary/5 dark:border-brand-accent/5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-dark/80 dark:text-brand-textDark/80 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tasks bullets */}
                    <ul className="space-y-3">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-dark/70 dark:text-brand-textDark/70 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-primary dark:text-brand-accent mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
