"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const ROLES = [
  "Business Administration Student",
  "AI-Assisted Digital Creator",
  "Visual Content Creator",
  "Community Builder",
];

// Deterministic pseudo-random so server & client match
function seeded(i: number, max: number, offset = 0) {
  return ((i * 137.508 + offset * 73.1) % max + max) % max;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  // Typewriter
  useEffect(() => {
    const role = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (display.length < role.length) {
        t = setTimeout(() => setDisplay(role.slice(0, display.length + 1)), 75);
      } else {
        t = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [display, deleting, roleIdx]);

  const particles: Particle[] = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: seeded(i, 100, 0),
    y: seeded(i, 100, 1),
    size: seeded(i, 4, 2) + 1.5,
    duration: seeded(i, 10, 3) + 10,
    delay: seeded(i, 8, 4),
  }));

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora animated bg */}
      <div className="absolute inset-0 aurora-bg" />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 right-[8%] w-32 h-32 rounded-full border border-[#C4A882]/10 float-shape" />
      <div className="absolute bottom-1/3 left-[6%] w-20 h-20 rounded-full border border-[#163B27]/40 float-shape" />
      <div className="absolute top-1/2 left-[15%] w-10 h-10 bg-[#C4A882]/5 rounded-lg rotate-45 float-shape" />
      <div className="absolute bottom-[20%] right-[12%] w-16 h-16 border border-white/5 rounded-full float-shape" />

      {/* Particles */}
      {mounted &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor:
                p.id % 3 === 0
                  ? "rgba(196,168,130,0.5)"
                  : p.id % 3 === 1
                  ? "rgba(22,59,39,0.6)"
                  : "rgba(255,255,255,0.2)",
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Content */}
      <motion.div
        style={{ y, opacity: fade }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C4A882]/25 bg-[#C4A882]/8 text-[#C4A882] text-xs font-mono mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D7A4A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22613A]" />
          </span>
          Available for opportunities · Bordj Bou Arreridj, Algeria
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-7xl md:text-9xl text-white leading-none tracking-tight mb-4"
        >
          Fouad
          <br />
          <em className="not-italic" style={{ color: "#C4A882" }}>
            Dadache
          </em>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="h-8 mb-12"
        >
          <span className="font-mono text-base md:text-lg text-white/50 tracking-wide">
            {display}
            <span className="cursor-blink" />
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#experience"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C4A882] text-[#0D1B2A] rounded-full font-semibold text-sm tracking-wide hover:bg-[#FAF8F5] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(196,168,130,0.3)]"
          >
            See My Work
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-white/8 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex gap-4 justify-center mt-10"
        >
          {[
            { href: "mailto:Fbdadache@gmail.com", icon: Mail, label: "Email" },
            {
              href: "https://linkedin.com/in/fouad-b-dadache-ab1907410",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/fbdadache-a11y",
              icon: Github,
              label: "GitHub",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-[#C4A882] hover:border-[#C4A882]/50 hover:bg-[#C4A882]/8 transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
