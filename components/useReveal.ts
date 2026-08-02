'use client';

import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every element with the `.reveal`
 * class currently in the DOM, adding `.visible` once each one scrolls
 * into view. Runs once on mount; safe to call from the top-level page.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}
