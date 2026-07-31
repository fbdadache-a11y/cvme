"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Zap, Clock } from "lucide-react";

const metrics = [
  {
    icon: Users,
    number: 39,
    suffix: "+",
    label: "Club Members",
    description: "Registered at ECONOVO launch — all acquired organically through community outreach",
  },
  {
    icon: TrendingUp,
    number: 4500,
    suffix: "",
    label: "Organic Views",
    description: "Social media impressions generated within the first 24 hours of launch, zero ad spend",
  },
  {
    icon: Clock,
    number: 24,
    suffix: "h",
    label: "Time to Impact",
    description: "Hours between first post going live and achieving 4,500 organic views",
  },
  {
    icon: Zap,
    number: 1,
    suffix: "",
    label: "Club Co-Founded",
    description: "ECONOVO — from idea to active community with a full visual identity and admin workflow",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="impact"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "linear-gradient(160deg, #0B1F12 0%, #0D2818 50%, #0B1F12 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            05 · Selected Impact
          </span>
          <div className="w-14 h-px bg-gradient-to-r from-[#C4A882] to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6"
        >
          Numbers that
          <br />
          <em className="text-[#C4A882] not-italic">speak for themselves</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/35 text-sm leading-relaxed max-w-xl mb-16 font-mono"
        >
          Real results from real work — no ad spend, no borrowed audiences.
        </motion.p>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-7 rounded-2xl border border-white/6 bg-white/3 hover:bg-white/6 hover:border-[#C4A882]/25 transition-all duration-400 overflow-hidden"
              >
                {/* BG glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "radial-gradient(ellipse at bottom left, rgba(196,168,130,0.06) 0%, transparent 70%)" }}
                />

                <div className="w-10 h-10 rounded-lg bg-[#C4A882]/10 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#C4A882]" />
                </div>

                <div className="font-serif text-5xl text-white leading-none mb-2">
                  <Counter target={m.number} suffix={m.suffix} />
                </div>

                <div className="font-semibold text-[#C4A882] text-sm mb-3">{m.label}</div>
                <p className="text-white/35 text-xs leading-relaxed">{m.description}</p>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#C4A882]/20 group-hover:bg-[#C4A882]/60 transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 p-8 rounded-2xl border border-[#C4A882]/15 bg-[#C4A882]/5 relative overflow-hidden"
        >
          <div className="font-serif text-4xl text-[#C4A882]/30 absolute top-4 left-6 leading-none select-none">
            "
          </div>
          <p className="font-serif text-xl md:text-2xl text-white/70 leading-relaxed italic pl-8">
            Combines business thinking, design, and vibe-coding workflows to
            turn ideas into practical digital outputs.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
