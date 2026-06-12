import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-brand-bgLight/50 dark:bg-brand-bgDark/30">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-brand-secondary/5 blur-[80px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-brand-primary dark:text-brand-accent px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 mb-3"
          >
            Recommendations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-brand-textDark"
          >
            What Mentors & Peers Say
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-primary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Slider Card */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          <div className="w-full relative z-10 px-4 sm:px-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Large Background Quote Icon */}
                <Quote className="absolute -right-4 -bottom-6 w-32 h-32 text-brand-primary/5 dark:text-brand-accent/5 pointer-events-none" />
                
                <div>
                  <Quote className="w-8 h-8 text-brand-primary dark:text-brand-accent mb-6 opacity-60" />
                  <p className="text-sm sm:text-base md:text-lg text-brand-dark/80 dark:text-brand-textDark/80 leading-relaxed italic mb-8 relative z-10">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-brand-primary/10 dark:border-brand-accent/10 pt-6">
                  {/* Styled Monogram Avatar */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${currentTestimonial.avatarBg} flex items-center justify-center text-brand-bgLight font-extrabold text-base shadow-sm`}>
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-brand-dark dark:text-brand-textDark leading-none">
                      {currentTestimonial.name}
                    </h4>
                    <span className="text-[11px] sm:text-xs text-brand-secondary dark:text-brand-accent/85 mt-1 block">
                      {currentTestimonial.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 p-2 rounded-xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all duration-300 shadow-sm"
            aria-label="Previous recommendation"
          >
            <ChevronLeft size={20} className="stroke-[2.5]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 p-2 rounded-xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10 text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all duration-300 shadow-sm"
            aria-label="Next recommendation"
          >
            <ChevronRight size={20} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-brand-primary dark:bg-brand-accent'
                  : 'w-2.5 bg-brand-primary/20 dark:bg-brand-accent/20 hover:bg-brand-primary/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
