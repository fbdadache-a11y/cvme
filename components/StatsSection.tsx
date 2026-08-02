'use client';

import { useEffect, useRef, useState } from 'react';

interface StatDef {
  target: number | null;
  suffix: string;
  label: string;
  staticValue?: string;
}

const STATS: StatDef[] = [
  { target: 2026, suffix: '', label: 'Founded' },
  { target: 4, suffix: '', label: 'Focus Areas' },
  { target: null, suffix: '', label: 'Ideas Welcomed', staticValue: '∞' },
  { target: 100, suffix: '%', label: 'Student-Led' },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const start = performance.now();
    const dur = 1200;

    function tick(now: number) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span className="stat-val">
      {value}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid reveal" ref={ref}>
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              {stat.target !== null ? (
                <Counter target={stat.target} suffix={stat.suffix} active={active} />
              ) : (
                <span className="stat-val">{stat.staticValue}</span>
              )}
              <span className="stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
