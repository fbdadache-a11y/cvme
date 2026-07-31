"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Eye, FileText, BarChart3, Building2, Megaphone } from "lucide-react";

const achievements = [
  {
    icon: Users,
    headline: "Launch Event · 39 Participants",
    detail:
      "Planned and coordinated the club's debut event — managing logistics, communication, and guest reception end-to-end.",
  },
  {
    icon: Eye,
    headline: "4,500 Organic Views in 24 Hours",
    detail:
      "Produced social media content for Facebook and Instagram that generated 4,500 views with zero advertising budget.",
  },
  {
    icon: Megaphone,
    headline: "Full Visual Identity Design",
    detail:
      "Designed logo direction, poster templates, and presentation materials using Canva and PowerPoint.",
  },
  {
    icon: FileText,
    headline: "Official University Correspondence",
    detail:
      "Drafted formal letters to the university Dean to obtain administrative authorisations for club operations.",
  },
  {
    icon: BarChart3,
    headline: "Member Database · Google Forms + Sheets",
    detail:
      "Built an integrated registration and tracking system for 39+ members using Google Forms and Sheets.",
  },
  {
    icon: Building2,
    headline: "University Administration Liaison",
    detail:
      "Coordinated with university administration to validate and monitor all club activities throughout the semester.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 px-6 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            03 · Experience
          </span>
          <div className="section-divider" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-5xl md:text-6xl text-[#0D1B2A] leading-tight mb-16"
        >
          Where I've
          <br />
          <em className="text-[#C4A882] not-italic">made an impact</em>
        </motion.h2>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="rounded-3xl overflow-hidden border border-[#0D1B2A]/8 bg-white shadow-[0_8px_40px_rgba(13,27,42,0.08)]"
        >
          {/* Card header */}
          <div className="p-8 border-b border-[#0D1B2A]/6" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #163B27 100%)" }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#C4A882]/20 text-[#C4A882] text-xs font-mono mb-3">
                  Current Role
                </div>
                <h3 className="font-serif text-2xl text-white mb-1">
                  Co-Founder & Communication and Administrative Manager
                </h3>
                <p className="text-white/50 text-sm font-mono">
                  ECONOVO Student Club — Université Mohamed El Bachir El Ibrahimi
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-[#C4A882] text-sm font-mono">Dec 2025</div>
                <div className="text-white/30 text-xs font-mono">Present</div>
              </div>
            </div>
          </div>

          {/* Achievements timeline */}
          <div className="p-8">
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                initial={{ height: "0%" }}
                animate={inView ? { height: "100%" } : {}}
                transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-[#C4A882] via-[#C4A882]/50 to-transparent"
              />

              <div className="flex flex-col gap-7">
                {achievements.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.headline}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="flex gap-5 group"
                    >
                      {/* Node */}
                      <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border-2 border-[#C4A882]/30 group-hover:border-[#C4A882] flex items-center justify-center transition-colors duration-300">
                        <Icon size={16} className="text-[#C4A882]" />
                      </div>
                      {/* Text */}
                      <div className="pt-1.5">
                        <div className="font-semibold text-[#0D1B2A] text-sm mb-1">
                          {item.headline}
                        </div>
                        <div className="text-[#0D1B2A]/50 text-xs leading-relaxed">
                          {item.detail}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
