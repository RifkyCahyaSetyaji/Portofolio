import { useState, useEffect } from 'react';

export default function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('reduced-motion');
      if (saved !== null) {
        return saved === 'true';
      }
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    localStorage.setItem('reduced-motion', reducedMotion);
  }, [reducedMotion]);

  // Listen to system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => {
      // Only apply system change if user has not explicitly set a preference in localStorage
      const hasUserPreference = localStorage.getItem('reduced-motion') !== null;
      if (!hasUserPreference) {
        setReducedMotion(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
  };

  return [reducedMotion, toggleReducedMotion];
}
