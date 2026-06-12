import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, MotionConfig } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, Shield, Cpu, Code, Sparkles } from 'lucide-react';
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

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 8 + 10,
  opacity: Math.random() * 0.5 + 0.2,
}));

export default function Hero({ reducedMotion }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % profileData.subtitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }, [reducedMotion, mouseX, mouseY]);

  const handleMouseMove = (e) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.015);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.015);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* ─── Animated Background ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Morphing blobs (hidden when reducedMotion is active to save resources) */}
        {!reducedMotion && (
          <>
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[10%] left-[8%] w-[32vw] h-[32vw] rounded-full bg-brand-primary/12 dark:bg-brand-primary/7 blur-[90px] animate-blob"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.15], rotate: [0, -20, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
              className="absolute bottom-[15%] right-[8%] w-[38vw] h-[38vw] rounded-full bg-brand-accent/10 dark:bg-brand-accent/6 blur-[110px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
              className="absolute top-[55%] left-[40%] w-[22vw] h-[22vw] rounded-full bg-brand-highlight/8 blur-[100px]"
            />
          </>
        )}

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f677808_1px,transparent_1px),linear-gradient(to_bottom,#1f677808_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#57dddd04_1px,transparent_1px),linear-gradient(to_bottom,#57dddd04_1px,transparent_1px)] bg-[size:44px_44px]" />

        {/* Floating particles (disabled in reduced motion) */}
        {!reducedMotion && particles.map(p => (
          <div
            key={p.id}
            className="particle bg-brand-accent dark:bg-brand-accent"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              bottom: '-10px',
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10">
        {/* ─── Left: Content ─── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkles className="w-4 h-4 text-brand-highlight" />
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary dark:text-brand-accent px-4 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 border border-brand-primary/20 dark:border-brand-accent/20">
              Welcome to my Portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]"
          >
            Hi, I&apos;m{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent dark:from-brand-accent dark:via-brand-secondary dark:to-brand-primary animate-gradient-x">
              {profileData.name}
            </span>
          </motion.h1>

          {/* Animated Roles */}
          <MotionConfig reducedMotion="never">
            <motion.div variants={item} className="h-10 sm:h-12 flex items-center mb-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -25, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-xl sm:text-2xl font-bold text-brand-secondary dark:text-brand-accent flex items-center gap-3"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {roleIndex === 0 && <Cpu className="w-6 h-6 text-brand-highlight" />}
                    {roleIndex === 1 && <Shield className="w-6 h-6 text-brand-primary dark:text-brand-accent" />}
                    {roleIndex === 2 && <Code className="w-6 h-6 text-brand-secondary" />}
                    {roleIndex === 3 && <Sparkles className="w-6 h-6 text-brand-highlight" />}
                  </motion.span>
                  <span className="cursor-blink">{profileData.subtitles[roleIndex]}</span>
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </MotionConfig>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base text-brand-dark/75 dark:text-brand-textDark/75 max-w-xl leading-loose mb-8"
          >
            {profileData.about}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 items-center mb-10">
            <motion.button
              onClick={() => handleScrollTo('projects')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold shadow-lg hover:shadow-xl shimmer-hover transition-shadow duration-300 group"
            >
              <span>View Portfolio</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>

            <motion.a
              href="/CV-Rifky Cahya Setyaji.pdf"
              download="CV-Rifky_Cahya_Setyaji.pdf"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border-2 border-brand-primary dark:border-brand-accent text-brand-primary dark:text-brand-accent font-bold hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10 transition-all duration-300"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={item} className="flex items-center gap-3">
            {[
              { href: profileData.linkedin, label: 'LinkedIn', icon: <LinkedInIcon className="w-5 h-5" /> },
              { href: profileData.github, label: 'GitHub', icon: <GithubIcon className="w-5 h-5" /> },
              { href: `mailto:${profileData.email}`, label: 'Email', icon: <Mail size={20} /> },
              { href: `tel:${profileData.phone}`, label: 'Phone', icon: <Phone size={20} /> },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/60 dark:bg-brand-cardDark/60 border border-brand-primary/15 dark:border-brand-accent/15 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-colors duration-200 shadow-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── Right: Animated Visual ─── */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
            style={reducedMotion ? {} : { x: springX, y: springY }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Outer rings */}
            <div className={`absolute inset-0 rounded-full border border-brand-primary/20 dark:border-brand-accent/20 ${reducedMotion ? '' : 'animate-spin-slow'}`} />
            <div className={`absolute inset-4 rounded-full border border-dashed border-brand-secondary/30 dark:border-brand-secondary/25 ${reducedMotion ? '' : 'animate-spin-slower'}`} />
            <motion.div
              animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-8 rounded-full border border-brand-highlight/20"
            />

            {/* Glow ring */}
            <div className={`absolute inset-10 rounded-full opacity-30 dark:opacity-50 ${reducedMotion ? 'border border-brand-accent/20' : 'animate-glow-pulse'}`} />

            {/* Center badge */}
            <div className="absolute inset-14 rounded-full glass-card flex flex-col justify-center items-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/15 via-transparent to-brand-highlight/10 dark:from-brand-accent/10" />
              <motion.div
                className="relative z-10 flex flex-col items-center"
                animate={reducedMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-brand-accent dark:to-brand-secondary flex items-center justify-center text-white dark:text-brand-dark font-extrabold text-2xl shadow-lg mb-3"
                >
                  RCS
                </motion.div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-primary dark:text-brand-accent">
                  DEV & PM
                </span>
                <div className="flex gap-1.5 mt-2">
                  <span className={`w-2 h-2 rounded-full bg-brand-primary dark:bg-brand-accent ${reducedMotion ? '' : 'animate-ping'}`} />
                  <span className={`w-2 h-2 rounded-full bg-brand-highlight ${reducedMotion ? '' : 'animate-pulse'}`} style={{ animationDelay: '0.3s' }} />
                  <span className={`w-2 h-2 rounded-full bg-brand-secondary ${reducedMotion ? '' : 'animate-pulse'}`} style={{ animationDelay: '0.6s' }} />
                </div>
              </motion.div>
            </div>

            {/* Orbiting icon badges */}
            {[
              { icon: <Shield className="w-5 h-5" />, pos: 'top-3 left-3', anim: { y: [0, -12, 0] }, delay: 0.5, color: 'text-brand-primary dark:text-brand-accent' },
              { icon: <Code className="w-5 h-5" />, pos: 'bottom-3 right-3', anim: { y: [0, 10, 0] }, delay: 1, color: 'text-brand-secondary dark:text-brand-accent' },
              { icon: <Cpu className="w-5 h-5" />, pos: 'top-1/2 -right-2 -translate-y-1/2', anim: { x: [0, 10, 0] }, delay: 1.5, color: 'text-brand-highlight' },
              { icon: <Sparkles className="w-5 h-5" />, pos: 'top-1/2 -left-2 -translate-y-1/2', anim: { x: [0, -10, 0] }, delay: 2, color: 'text-brand-accent' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                animate={reducedMotion ? {} : badge.anim}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: badge.delay }}
                whileHover={reducedMotion ? {} : { scale: 1.2 }}
                className={`absolute ${badge.pos} p-3 rounded-2xl bg-white/80 dark:bg-brand-cardDark/80 shadow-lg border border-brand-primary/15 dark:border-brand-accent/15 ${badge.color} cursor-pointer`}
              >
                {badge.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-brand-dark/40 dark:text-brand-textDark/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-brand-primary/30 dark:border-brand-accent/30 flex justify-center pt-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
