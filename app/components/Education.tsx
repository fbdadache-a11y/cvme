"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BadgeCheck, Calendar, MapPin } from "lucide-react";

const degrees = [
  {
    type: "degree",
    icon: GraduationCap,
    badge: "In Progress",
    title: "Bachelor's in Business Administration",
    institution: "Université Mohamed El Bachir El Ibrahimi",
    location: "Bordj Bou Arreridj, Algeria",
    period: "2025 – 2028",
    description:
      "Studying core business disciplines including administration, finance, marketing, and management — applying learnings immediately through the ECONOVO student club.",
    tags: ["Business Admin", "Management", "Finance", "Marketing"],
    accent: "#C4A882",
  },
  {
    type: "cert",
    icon: BadgeCheck,
    badge: "Certified",
    title: "Claude AI 101 — Applied Artificial Intelligence",
    institution: "Anthropic",
    location: "Online",
    period: "2025",
    description:
      "Comprehensive certification covering AI-assisted workflows, prompt engineering, responsible AI usage, and integrating Claude into professional processes.",
    tags: ["Anthropic", "AI Workflows", "Prompt Engineering", "Claude"],
    accent: "#8AB4D8",
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "linear-gradient(160deg, #0D1B2A 0%, #162236 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            04 · Education
          </span>
          <div className="w-14 h-px bg-gradient-to-r from-[#C4A882] to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-5xl md:text-6xl text-white leading-tight mb-16"
        >
          Learning &
          <br />
          <em className="text-[#C4A882] not-italic">credentials</em>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-8 border border-white/7 bg-white/3 hover:bg-white/5 hover:border-white/12 transition-all duration-400 overflow-hidden"
              >
                {/* Accent corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{ background: d.accent }}
                />

                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `${d.accent}18` }}
                  >
                    <Icon size={26} style={{ color: d.accent }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{ background: `${d.accent}22`, color: d.accent }}
                  >
                    {d.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white leading-snug mb-2">{d.title}</h3>
                <p className="font-semibold text-sm mb-4" style={{ color: d.accent }}>
                  {d.institution}
                </p>

                <p className="text-white/40 text-xs leading-relaxed mb-6">{d.description}</p>

                {/* Meta */}
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
                    <Calendar size={12} />
                    {d.period}
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
                    <MapPin size={12} />
                    {d.location}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border"
                      style={{
                        color: `${d.accent}cc`,
                        borderColor: `${d.accent}25`,
                        background: `${d.accent}0c`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${d.accent}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
