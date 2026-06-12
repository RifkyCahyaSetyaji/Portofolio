import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Briefcase, Shield, Monitor, Database, CheckCircle, Zap } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimationWrappers';
import { useRef } from 'react';

const techStack = [
  { name: 'React.js',      desc: 'Frontend Framework',          color: '#61dafb' },
  { name: 'Laravel',       desc: 'Backend PHP Framework',       color: '#ff2d20' },
  { name: 'Tailwind CSS',  desc: 'Utility CSS Styling',         color: '#38bdf8' },
  { name: 'Java Desktop',  desc: 'Swing Applications',          color: '#ea2d2e' },
  { name: 'CodeIgniter 3', desc: 'MVC PHP Framework',           color: '#ee4326' },
  { name: 'WordPress',     desc: 'CMS & Custom Theming',        color: '#21759b' },
  { name: 'Kali Linux',    desc: 'Pen-Testing Environment',     color: '#557c9f' },
  { name: 'Wireshark',     desc: 'Packet Analysis Tool',        color: '#1679a7' },
  { name: 'Notion',        desc: 'Project Planning & Docs',     color: '#6366f1' },
  { name: 'Midtrans API',  desc: 'Payment Gateway Integration', color: '#16b072' },
];

function AnimatedSkillBar({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-brand-dark dark:text-brand-textDark flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-brand-primary dark:text-brand-accent" />
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.4 }}
          className="text-xs font-black text-brand-primary dark:text-brand-accent"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full h-2.5 bg-brand-primary/10 dark:bg-brand-accent/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.08 + 0.1, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #1f6778, #57d4dd)' }}
        >
          {/* Shimmer on bar */}
          <motion.div
            animate={{ x: ['−100%', '200%'] }}
            transition={{ duration: 1.5, delay: index * 0.08 + 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('pm');

  const tabDetails = {
    pm:       { title: 'Project Management',    icon: Briefcase, data: skillsData.projectManagement },
    security: { title: 'Cyber Security',        icon: Shield,    data: skillsData.cyberSecurity },
    frontend: { title: 'Frontend Development',  icon: Monitor,   data: skillsData.frontend },
    backend:  { title: 'Backend Development',   icon: Database,  data: skillsData.backend },
  };

  const activeData = tabDetails[activeTab];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-brand-bgLight/40 dark:bg-brand-bgDark/30">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-secondary/6 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-brand-accent/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="section-label">Skills & Stack</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-brand-textDark mt-2">
            My Expertise & Tech Stack
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-5 rounded-full"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* ── Category Buttons ── */}
          <FadeIn direction="left" className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-brand-dark dark:text-brand-textDark mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-highlight animate-pulse" />
              Expertise Area
            </h3>
            {Object.entries(tabDetails).map(([key, tab], i) => {
              const Icon = tab.icon;
              const isSelected = activeTab === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ x: isSelected ? 0 : 6, scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 w-full relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-lg'
                      : 'bg-white/40 dark:bg-brand-cardDark/40 border-brand-primary/10 dark:border-brand-accent/10 text-brand-dark/80 dark:text-brand-textDark/80 hover:bg-white/70 dark:hover:bg-brand-cardDark/70'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="skill-tab-glow"
                      className="absolute inset-0 bg-white/5"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-brand-primary/10 dark:bg-brand-accent/10'}`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-brand-primary dark:text-brand-accent'}`} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-sm leading-tight">{tab.title}</h4>
                    <span className={`text-xs ${isSelected ? 'text-white/70' : 'text-brand-dark/45 dark:text-brand-textDark/45'}`}>
                      {tab.data.length} Skills
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </FadeIn>

          {/* ── Animated Progress Bars ── */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-8">
            <div className="glass-card p-8 rounded-3xl min-h-[380px]">
              <div className="flex items-center gap-3 mb-7 pb-4 border-b border-brand-primary/10 dark:border-brand-accent/10">
                <div className="p-2 bg-brand-primary/10 dark:bg-brand-accent/10 rounded-xl">
                  <activeData.icon className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark dark:text-brand-textDark">
                  {activeData.title} Skills
                </h3>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-5"
                >
                  {activeData.data.map((skill, idx) => (
                    <AnimatedSkillBar key={`${activeTab}-${idx}`} skill={skill} index={idx} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>

        {/* ── Tech Stack Showcase ── */}
        <FadeIn delay={0.2}>
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-lg font-bold text-brand-dark dark:text-brand-textDark mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-highlight" />
              Interactive Tech Stack Showcase
            </h3>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4" stagger={0.06}>
              {techStack.map((tech, idx) => (
                <StaggerItem key={idx} direction="scale">
                  <motion.div
                    whileHover={{ scale: 1.08, y: -6 }}
                    whileTap={{ scale: 0.96 }}
                    className="p-4 rounded-2xl bg-white/50 dark:bg-brand-cardDark/50 border border-brand-primary/10 dark:border-brand-accent/10 flex flex-col items-center text-center cursor-pointer group relative overflow-hidden shimmer-hover"
                    style={{ '--hover-color': tech.color }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle at center, ${tech.color}18, transparent 70%)` }}
                    />
                    <span className="text-sm font-bold text-brand-dark dark:text-brand-textDark group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors relative z-10">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-medium text-brand-dark/45 dark:text-brand-textDark/45 mt-1 relative z-10">
                      {tech.desc}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
