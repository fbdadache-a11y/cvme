"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const langs = [
  {
    name: "Arabic",
    level: "Native",
    pct: 100,
    code: "AR",
    flag: "🇩🇿",
    desc: "Native speaker — all formal and informal communication",
    color: "#C4A882",
  },
  {
    name: "English",
    level: "Intermediate B1",
    pct: 65,
    code: "EN",
    flag: "🌐",
    desc: "Professional reading, writing & tool usage",
    color: "#8AB4D8",
  },
  {
    name: "French",
    level: "Intermediate B1",
    pct: 65,
    code: "FR",
    flag: "🇫🇷",
    desc: "Academic and everyday written communication",
    color: "#A0C878",
  },
];

function CircleProgress({
  pct,
  color,
  size = 120,
  stroke = 5,
  active,
}: {
  pct: number;
  color: string;
  size?: number;
  stroke?: number;
  active: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (current / 100) * circ;

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const steps = 60;
    const stepVal = pct / steps;
    let v = 0;
    const t = setInterval(() => {
      v += stepVal;
      if (v >= pct) {
        setCurrent(pct);
        clearInterval(t);
      } else {
        setCurrent(Math.round(v));
      }
    }, duration / steps);
    return () => clearInterval(t);
  }, [active, pct]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(13,27,42,0.06)"
        strokeWidth={stroke}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.05s linear" }}
      />
    </svg>
  );
}

export default function Languages() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="languages" ref={ref} className="py-28 px-6 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            06 · Languages
          </span>
          <div className="section-divider" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-5xl md:text-6xl text-[#0D1B2A] leading-tight mb-16"
        >
          I communicate
          <br />
          <em className="text-[#C4A882] not-italic">across borders</em>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {langs.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
              className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-[#0D1B2A]/6 hover:border-[#C4A882]/30 hover:shadow-[0_12px_40px_rgba(196,168,130,0.12)] transition-all duration-400 text-center"
            >
              {/* Flag + circle */}
              <div className="relative mb-4">
                <CircleProgress
                  pct={lang.pct}
                  color={lang.color}
                  size={110}
                  stroke={5}
                  active={inView}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl mb-0.5">{lang.flag}</span>
                  <span
                    className="font-mono text-xs font-semibold"
                    style={{ color: lang.color }}
                  >
                    {lang.pct}%
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl text-[#0D1B2A] mb-1">{lang.name}</h3>

              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-3"
                style={{
                  background: `${lang.color}18`,
                  color: lang.color,
                }}
              >
                {lang.level}
              </span>

              <p className="text-[#0D1B2A]/45 text-xs leading-relaxed">{lang.desc}</p>

              {/* Bar */}
              <div className="w-full mt-5 h-px rounded-full overflow-hidden bg-[#0D1B2A]/8">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={inView ? { width: `${lang.pct}%` } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: lang.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
