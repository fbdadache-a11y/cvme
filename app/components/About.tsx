"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, MapPin, GraduationCap, Sparkles } from "lucide-react";

const stats = [
  { value: "39+", label: "Club Members", sub: "ECONOVO launch" },
  { value: "4.5K", label: "Organic Views", sub: "in first 24 hours" },
  { value: "3", label: "Languages", sub: "Arabic · French · English" },
];

const highlights = [
  { icon: User, text: "Co-Founder & Communication Manager at ECONOVO" },
  { icon: MapPin, text: "Bordj Bou Arreridj, Algeria" },
  { icon: GraduationCap, text: "Business Administration — Université M.E.B. El Ibrahimi" },
  { icon: Sparkles, text: "Claude AI 101 Certified — Anthropic, 2025" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            01 · About Me
          </span>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — identity card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar placeholder */}
            <div className="relative inline-block mb-8">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#0D1B2A] to-[#163B27] flex items-center justify-center font-serif text-5xl text-[#C4A882] shadow-xl">
                FD
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#C4A882] text-[#0D1B2A] text-xs font-mono font-semibold rounded-full shadow">
                Open to work
              </div>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-[#0D1B2A] leading-tight mb-6">
              Business thinker
              <br />
              <em className="text-[#C4A882]">& digital builder</em>
            </h2>

            <p className="text-[#0D1B2A]/65 text-base leading-relaxed mb-8">
              Business Administration student with hands-on experience in
              administrative coordination, visual content creation, and community
              management. Co-founded the <strong className="text-[#0D1B2A]">ECONOVO</strong> student club and shaped its
              launch, membership workflow, and visual identity — attracting
              <strong className="text-[#0D1B2A]"> 39 members</strong> and{" "}
              <strong className="text-[#0D1B2A]">4,500 organic views</strong> in the first
              day alone.
            </p>

            <p className="text-[#0D1B2A]/55 text-sm leading-relaxed mb-10">
              I combine business thinking, design, and vibe-coding workflows to
              turn ideas into practical digital outputs — working confidently with
              Microsoft Office, Google Workspace, Canva, and AI tools like Claude
              and ChatGPT.
            </p>

            {/* Highlight list */}
            <div className="flex flex-col gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#0D1B2A]/60">
                  <div className="w-8 h-8 rounded-lg bg-[#0D1B2A]/6 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#C4A882]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats */}
          <div className="flex flex-col gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-6 p-7 rounded-2xl bg-white border border-[#0D1B2A]/6 hover:border-[#C4A882]/40 hover:shadow-[0_8px_30px_rgba(196,168,130,0.12)] transition-all duration-300 cursor-default"
              >
                <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-[#C4A882] to-[#A08060] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="font-serif text-5xl text-[#0D1B2A] leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-semibold text-sm text-[#0D1B2A] mb-0.5">{s.label}</div>
                  <div className="text-xs text-[#0D1B2A]/40 font-mono">{s.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="group flex items-center justify-between p-7 rounded-2xl bg-[#0D1B2A] hover:bg-[#162236] transition-colors duration-300 cursor-pointer"
            >
              <div>
                <div className="font-semibold text-white text-sm mb-1">Ready to collaborate?</div>
                <div className="text-white/40 text-xs font-mono">Fbdadache@gmail.com</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C4A882] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-[#0D1B2A] text-lg font-bold leading-none">→</span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
