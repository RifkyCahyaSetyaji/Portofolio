import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Reusable scroll-triggered fade+slide animation wrapper
export function FadeIn({ children, delay = 0, duration = 0.6, direction = 'up', className = '', once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  const directionMap = {
    up:    { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down:  { hidden: { y: -40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.85, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  };

  const variant = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: variant.hidden,
        visible: { ...variant.visible, transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] } }
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container - children animate in sequence
export function StaggerContainer({ children, className = '', stagger = 0.12, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
export function StaggerItem({ children, className = '', direction = 'up' }) {
  const directionMap = {
    up:    { hidden: { y: 35, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  };
  const variant = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: variant.hidden,
        visible: { ...variant.visible, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } }
      }}
    >
      {children}
    </motion.div>
  );
}
