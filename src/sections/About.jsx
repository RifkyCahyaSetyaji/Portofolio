import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Calendar, MapPin, Rocket } from 'lucide-react';
import { statsData, educationData, awardsData, learningTimeline } from '../data/portfolioData';
import AnimatedCounter from '../components/AnimatedCounter';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimationWrappers';

export default function About() {
  const [activeTab, setActiveTab] = useState('timeline');

  const tabs = [
    { key: 'timeline', label: 'Journey', icon: Rocket },
    { key: 'education', label: 'Education', icon: GraduationCap },
    { key: 'awards', label: 'Achievements', icon: Award },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-primary/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-brand-accent/6 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="section-label">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-brand-textDark mt-2">
            Professional Profile &amp; Academic Path
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-5 rounded-full"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ── Left: Bio + Stats ── */}
          <StaggerContainer className="lg:col-span-5 flex flex-col space-y-6" stagger={0.13}>
            {/* Biography card */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card p-7 rounded-3xl shimmer-hover"
              >
                <h3 className="text-lg font-bold text-brand-primary dark:text-brand-accent mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  Biography
                </h3>
                <p className="text-brand-dark/80 dark:text-brand-textDark/80 leading-relaxed text-sm">
                  Saya adalah mahasiswa program studi{' '}
                  <strong className="text-brand-primary dark:text-brand-accent">S1 Sistem Informasi di Universitas Brawijaya</strong>.
                  Minat utama saya berada di persimpangan antara{' '}
                  <strong className="text-brand-primary dark:text-brand-accent">IT Project Management</strong> dan{' '}
                  <strong className="text-brand-primary dark:text-brand-accent">Cyber Security</strong>.
                </p>
                <p className="text-brand-dark/80 dark:text-brand-textDark/80 leading-relaxed text-sm mt-3">
                  Dengan latar belakang SMK Kejuruan IT, saya telah melatih fondasi teknis dalam pengembangan
                  web full-stack, administrasi server, serta manajemen risiko — sekaligus aktif memimpin tim
                  dan mengaudit keamanan aplikasi.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Stats Grid */}
            <StaggerItem>
              <div className="grid grid-cols-2 gap-4">
                {statsData.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="glass-card p-6 rounded-2xl text-center relative overflow-hidden shimmer-hover"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
                    <span className="relative text-3xl font-black text-brand-primary dark:text-brand-accent">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="relative block text-xs font-semibold text-brand-dark/55 dark:text-brand-textDark/55 mt-1.5 leading-tight">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* ── Right: Tabs ── */}
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col">
            {/* Tab bar */}
            <div className="flex gap-1 p-1 rounded-2xl bg-brand-primary/5 dark:bg-brand-bgDark/50 border border-brand-primary/10 dark:border-brand-accent/10 mb-8 relative">
              {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 z-10 ${
                      isActive
                        ? 'text-brand-bgLight dark:text-brand-dark'
                        : 'text-brand-dark/60 dark:text-brand-textDark/60 hover:text-brand-primary dark:hover:text-brand-accent'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-accent dark:to-brand-secondary shadow-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="min-h-[420px]">
              <AnimatePresence mode="wait">
                {/* ── Timeline ── */}
                {activeTab === 'timeline' && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="relative border-l-2 border-brand-primary/20 dark:border-brand-accent/20 ml-4 space-y-6 py-2"
                  >
                    {learningTimeline.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="relative pl-8 group"
                      >
                        <motion.span
                          whileHover={{ scale: 1.4 }}
                          className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-primary dark:bg-brand-accent border-4 border-brand-bgLight dark:border-brand-bgDark transition-all"
                        />
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="glass-card p-5 rounded-2xl shimmer-hover"
                        >
                          <span className="text-[11px] font-black text-brand-highlight bg-brand-highlight/10 px-2 py-0.5 rounded-lg mb-2 inline-block tracking-widest">
                            {item.year}
                          </span>
                          <h4 className="text-base font-bold text-brand-primary dark:text-brand-accent leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs text-brand-dark/65 dark:text-brand-textDark/65 mt-1.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* ── Education ── */}
                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-5"
                  >
                    {educationData.map((edu, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        whileHover={{ y: -3 }}
                        className="glass-card p-6 rounded-3xl shimmer-hover"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                          <div>
                            <h4 className="text-lg font-extrabold text-brand-primary dark:text-brand-accent">{edu.institution}</h4>
                            <p className="text-sm font-semibold text-brand-dark/75 dark:text-brand-textDark/75">{edu.degree}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 text-xs font-medium text-brand-secondary dark:text-brand-accent/80 flex flex-col sm:items-end gap-1">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {edu.highlights.map((h, hi) => (
                            <li key={hi} className="text-xs text-brand-dark/65 dark:text-brand-textDark/65 flex items-start gap-2">
                              <span className="text-brand-highlight mt-0.5 font-bold">›</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* ── Awards ── */}
                {activeTab === 'awards' && (
                  <motion.div
                    key="awards"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {awardsData.map((award, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass-card p-5 rounded-2xl flex flex-col gap-3 shimmer-hover"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] font-black text-brand-highlight bg-brand-highlight/10 px-2.5 py-1 rounded-lg tracking-widest">
                            {award.year}
                          </span>
                          <motion.div
                            animate={{ rotate: [0, 15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                          >
                            <Award className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                          </motion.div>
                        </div>
                        <h4 className="text-sm font-bold text-brand-dark dark:text-brand-textDark leading-snug">
                          {award.title}
                        </h4>
                        <p className="text-[11px] font-bold text-brand-secondary dark:text-brand-accent/80">{award.issuer}</p>
                        <p className="text-xs text-brand-dark/60 dark:text-brand-textDark/60 leading-relaxed">{award.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
