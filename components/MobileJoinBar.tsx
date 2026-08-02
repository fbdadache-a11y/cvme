'use client';

import { useEffect, useRef, useState } from 'react';

export default function MobileJoinBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const cta = document.querySelector('.cta-section');
    if (!hero || !('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHidden(true);
          else setHidden(false);
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(hero);
    if (cta) obs.observe(cta);

    return () => obs.disconnect();
  }, []);

  return (
    <div className={`mobile-join ${hidden ? 'hidden' : ''}`}>
      <a href="#faq" className="btn-primary">
        Join Econovo →
      </a>
    </div>
  );
}
