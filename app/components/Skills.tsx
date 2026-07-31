"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Palette,
  Brain,
  Laptop,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    title: "Business & Administration",
    color: "#C4A882",
    skills: [
      "Administrative Coordination",
      "Official Correspondence",
      "Event Planning & Logistics",
      "Document Management",
      "Database Management",
      "Member Registration Systems",
    ],
    desc: "Practical business operations, from drafting formal correspondence to planning events with 39+ attendees.",
  },
  {
    icon: Palette,
    title: "Design & Content",
    color: "#A0C878",
    skills: [
      "Canva · Visual Identity",
      "Poster & Flyer Creation",
      "Presentation Design (PPT)",
      "Social Media Content",
      "Brand Guidelines",
      "Photography Direction",
    ],
    desc: "Designed ECONOVO's full visual identity — logo direction, templates, and materials — generating 4,500 views on launch day.",
  },
  {
    icon: Brain,
    title: "AI & Digital Workflow",
    color: "#8AB4D8",
    skills: [
      "Claude AI · ChatGPT",
      "AI-Assisted Research",
      "AI Content Drafting",
      "Vibe Coding Workflows",
      "Prompt Engineering",
      "AI Tool Integration",
    ],
    desc: "Certified in Claude AI 101 by Anthropic. Integrates AI into every creative and research workflow.",
  },
  {
    icon: Laptop,
    title: "Productivity Tools",
    color: "#D8A8C8",
    skills: [
      "Microsoft Word · PowerPoint",
      "Google Sheets · Forms",
      "Google Drive · Docs",
      "Data Tracking & Reporting",
      "Workflow Automation",
      "Collaboration Platforms",
    ],
    desc: "Built full member management systems using Google Forms + Sheets for tracking 39+ registered members.",
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "linear-gradient(160deg, #0D2818 0%, #0B1F12 60%, #0D2818 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            02 · Core Competencies
          </span>
          <div className="w-14 h-px bg-gradient-to-r from-[#C4A882] to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight"
        >
          What I bring
          <br />
          <em className="text-[#C4A882] not-italic">to the table</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-sm font-mono mb-16 max-w-xl"
        >
          Click any card to explore the skill set
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(isActive ? null : i)}
                className="group cursor-pointer rounded-2xl p-7 border transition-all duration-400"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                  borderColor: isActive
                    ? `${cat.color}40`
                    : "rgba(255,255,255,0.07)",
                  boxShadow: isActive
                    ? `0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 ${cat.color}20`
                    : "none",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}18` }}
                  >
                    <Icon size={22} style={{ color: cat.color }} />
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-white/30 mt-1 transition-transform duration-300"
                    style={{
                      transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                      color: isActive ? cat.color : undefined,
                    }}
                  />
                </div>

                <h3 className="font-serif text-xl text-white mb-2">{cat.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-5">{cat.desc}</p>

                {/* Skill tags — always visible, just dim when collapsed */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.3 }}
                >
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono transition-colors duration-300"
                      style={{
                        background: isActive ? `${cat.color}18` : "rgba(255,255,255,0.05)",
                        color: isActive ? cat.color : "rgba(255,255,255,0.4)",
                        border: `1px solid ${isActive ? `${cat.color}30` : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
