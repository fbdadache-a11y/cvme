"use client";

import { useEffect, useState, useRef } from "react";

// ── Helpers ────────────────────────────────────────────────────────────────
function seeded(i: number, max: number, off = 0) {
  return ((i * 137.508 + off * 73.1) % max + max) % max;
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "experience", "education", "contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg border-b border-white/5" : ""
        }`}
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg text-[#0D1B2A] group-hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg,#C4A882,#A08060)", fontFamily: "Georgia, serif" }}>
              FD
            </div>
            <span className="hidden sm:block text-xs text-white/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>fouad.dadache</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l} href={`#${l}`}
                className="text-sm text-white/60 hover:text-white capitalize transition-colors relative group">
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C4A882] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="mailto:Fbdadache@gmail.com"
              className="px-5 py-2 rounded-full text-sm font-semibold text-[#0D1B2A] hover:scale-105 transition-all duration-300"
              style={{ background: "#C4A882" }}>
              Hire Me
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl" aria-label="menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(13,27,42,0.98)", backdropFilter: "blur(20px)" }}>
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              className="capitalize text-white hover:text-[#C4A882] transition-colors"
              style={{ fontSize: "2.5rem", fontFamily: "Georgia, serif" }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────
const ROLES = [
  "Business Administration Student",
  "AI-Assisted Digital Creator",
  "Visual Content Creator",
  "Community Builder",
];

function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const role = ROLES[idx];
    const t = !del
      ? text.length < role.length
        ? setTimeout(() => setText(role.slice(0, text.length + 1)), 75)
        : setTimeout(() => setDel(true), 2200)
      : text.length > 0
        ? setTimeout(() => setText(text.slice(0, -1)), 35)
        : (() => { setDel(false); setIdx(p => (p + 1) % ROLES.length); })();
    return () => { if (t) clearTimeout(t as ReturnType<typeof setTimeout>); };
  }, [text, del, idx]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: seeded(i, 100, 0), y: seeded(i, 100, 1),
    size: seeded(i, 4, 2) + 1.5,
    dur: seeded(i, 10, 3) + 10,
    delay: seeded(i, 8, 4),
    color: i % 3 === 0 ? "rgba(196,168,130,0.5)" : i % 3 === 1 ? "rgba(22,59,39,0.6)" : "rgba(255,255,255,0.2)",
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Aurora bg */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(-45deg,#0D1B2A,#0B2114,#162236,#163B27,#0D1B2A)",
        backgroundSize: "400% 400%",
        animation: "aurora 12s ease infinite",
      }} />
      {/* Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(196,168,130,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(196,168,130,0.06) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-[8%] w-32 h-32 rounded-full border border-[#C4A882]/10" style={{ animation: "float 8s ease-in-out infinite" }} />
      <div className="absolute bottom-1/3 left-[6%] w-20 h-20 rounded-full border border-[#163B27]/40" style={{ animation: "float 11s ease-in-out infinite 3s" }} />

      {/* Particles */}
      {mounted && particles.map(p => (
        <div key={p.id} className="absolute rounded-full" style={{
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          backgroundColor: p.color,
          animation: `particle ${p.dur}s ease-in-out infinite ${p.delay}s`,
        }} />
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs"
          style={{ border: "1px solid rgba(196,168,130,0.25)", background: "rgba(196,168,130,0.08)", color: "#C4A882", fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="w-2 h-2 rounded-full bg-[#22613A]" style={{ animation: "ping 1.5s ease-in-out infinite" }} />
          Available for opportunities · Bordj Bou Arreridj, Algeria
        </div>

        {/* Name */}
        <h1 className="leading-none tracking-tight mb-4" style={{
          fontFamily: "Georgia, 'DM Serif Display', serif",
          fontSize: "clamp(3.5rem,12vw,7rem)",
          color: "white",
        }}>
          Fouad<br />
          <span style={{ color: "#C4A882" }}>Dadache</span>
        </h1>

        {/* Typewriter */}
        <div className="h-8 mb-12">
          <span className="text-white/50 text-base tracking-wide" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {text}<span style={{ animation: "blink 1s step-end infinite", color: "#C4A882" }}>|</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="#experience"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300"
            style={{ background: "#C4A882", color: "#0D1B2A", boxShadow: "0 0 0 0 rgba(196,168,130,0)" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(196,168,130,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(196,168,130,0)")}>
            See My Work →
          </a>
          <a href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm text-white hover:scale-105 transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 justify-center">
          {[
            { href: "mailto:Fbdadache@gmail.com", label: "✉" },
            { href: "https://linkedin.com/in/fouad-b-dadache-ab1907410", label: "in" },
            { href: "https://github.com/fbdadache-a11y", label: "gh" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/40 hover:text-[#C4A882] hover:scale-110 transition-all duration-300 font-mono text-sm"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}>
        SCROLL
        <span style={{ animation: "bounce 1.6s ease-in-out infinite" }}>↓</span>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { v: "39+", l: "Club Members", s: "ECONOVO launch" },
    { v: "4.5K", l: "Organic Views", s: "in first 24 hours" },
    { v: "3", l: "Languages", s: "AR · FR · EN" },
  ];

  return (
    <section id="about" ref={ref} className="py-28 px-6" style={{ background: "#FAF8F5", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>01 · About Me</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-40px)", transition: "all 0.8s ease" }}>
            {/* Avatar */}
            <div className="relative inline-block mb-8">
              <div className="w-28 h-28 rounded-2xl flex items-center justify-center shadow-xl"
                style={{ background: "linear-gradient(135deg,#0D1B2A,#163B27)", fontFamily: "Georgia,serif", fontSize: "2.5rem", color: "#C4A882" }}>
                FD
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full text-xs font-semibold shadow"
                style={{ background: "#C4A882", color: "#0D1B2A", fontFamily: "monospace" }}>
                Open to work
              </div>
            </div>

            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,6vw,3.5rem)", color: "#0D1B2A", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Business thinker<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>& digital builder</em>
            </h2>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(13,27,42,0.65)" }}>
              Business Administration student with hands-on experience in administrative coordination,
              visual content creation, and community management. Co-founded <strong style={{ color: "#0D1B2A" }}>ECONOVO</strong> student
              club — attracting <strong style={{ color: "#0D1B2A" }}>39 members</strong> and{" "}
              <strong style={{ color: "#0D1B2A" }}>4,500 organic views</strong> within the first day, zero ad spend.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Co-Founder & Communication Manager at ECONOVO",
                "Bordj Bou Arreridj, Algeria",
                "Business Admin — Université M.E.B. El Ibrahimi",
                "Claude AI 101 Certified — Anthropic, 2025",
              ].map(t => (
                <div key={t} className="flex items-center gap-3 text-sm" style={{ color: "rgba(13,27,42,0.6)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(13,27,42,0.06)", color: "#C4A882" }}>◆</div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5" style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(40px)", transition: "all 0.8s ease 0.2s" }}>
            {stats.map(s => (
              <div key={s.l} className="group flex items-center gap-6 p-7 rounded-2xl bg-white cursor-default"
                style={{ border: "1px solid rgba(13,27,42,0.06)", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(196,168,130,0.4)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(196,168,130,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(13,27,42,0.06)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div className="w-1 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(180deg,#C4A882,#A08060)" }} />
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: "3rem", color: "#0D1B2A", lineHeight: 1 }}>{s.v}</div>
                  <div className="font-semibold text-sm" style={{ color: "#0D1B2A" }}>{s.l}</div>
                  <div className="text-xs" style={{ color: "rgba(13,27,42,0.4)", fontFamily: "monospace" }}>{s.s}</div>
                </div>
              </div>
            ))}
            <a href="#contact"
              className="group flex items-center justify-between p-7 rounded-2xl cursor-pointer transition-colors duration-300"
              style={{ background: "#0D1B2A" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#162236")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0D1B2A")}>
              <div>
                <div className="font-semibold text-white text-sm mb-1">Ready to collaborate?</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>Fbdadache@gmail.com</div>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#0D1B2A] group-hover:scale-110 transition-transform"
                style={{ background: "#C4A882" }}>→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ─────────────────────────────────────────────────────────────────
function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cats = [
    { icon: "💼", title: "Business & Administration", color: "#C4A882",
      skills: ["Administrative Coordination", "Official Correspondence", "Event Planning", "Document Management", "Database Management"] },
    { icon: "🎨", title: "Design & Content", color: "#A0C878",
      skills: ["Canva · Visual Identity", "Poster & Flyer Creation", "Presentation Design", "Social Media Content", "Brand Guidelines"] },
    { icon: "🧠", title: "AI & Digital Workflow", color: "#8AB4D8",
      skills: ["Claude AI · ChatGPT", "AI-Assisted Research", "AI Content Drafting", "Vibe Coding", "Prompt Engineering"] },
    { icon: "💻", title: "Productivity Tools", color: "#D8A8C8",
      skills: ["Microsoft Word · PowerPoint", "Google Sheets · Forms", "Google Drive", "Data Tracking", "Workflow Automation"] },
  ];

  return (
    <section id="skills" ref={ref} className="py-28 px-6"
      style={{ background: "linear-gradient(160deg,#0D2818 0%,#0B1F12 60%,#0D2818 100%)", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>02 · Core Competencies</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>
        <h2 className="mb-16 leading-tight" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,7vw,3.5rem)", color: "white" }}>
          What I bring<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>to the table</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {cats.map((c, i) => (
            <div key={c.title}
              onClick={() => setActive(active === i ? null : i)}
              className="cursor-pointer rounded-2xl p-7 transition-all duration-400"
              style={{
                border: `1px solid ${active === i ? c.color + "40" : "rgba(255,255,255,0.07)"}`,
                background: active === i ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 * i}s, transform 0.7s ease ${0.1 * i}s, border 0.3s, background 0.3s`,
                boxShadow: active === i ? `0 20px 60px rgba(0,0,0,0.3)` : "none",
              }}>
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: c.color + "18" }}>{c.icon}</div>
                <span className="text-white/30 text-sm mt-1" style={{ transform: active === i ? "rotate(90deg)" : "none", color: active === i ? c.color : undefined, transition: "all 0.3s" }}>›</span>
              </div>
              <h3 className="text-white mb-3" style={{ fontFamily: "Georgia,serif", fontSize: "1.2rem" }}>{c.title}</h3>
              <div className="flex flex-wrap gap-2" style={{ opacity: active === i ? 1 : 0.4, transition: "opacity 0.3s" }}>
                {c.skills.map(s => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs"
                    style={{ fontFamily: "monospace", background: active === i ? c.color + "18" : "rgba(255,255,255,0.05)", color: active === i ? c.color : "rgba(255,255,255,0.4)", border: `1px solid ${active === i ? c.color + "30" : "rgba(255,255,255,0.06)"}` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Experience ─────────────────────────────────────────────────────────────
function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = [
    { icon: "👥", h: "Launch Event · 39 Participants", d: "Planned and coordinated the club's debut event — managing logistics, communication, and guest reception end-to-end." },
    { icon: "👁", h: "4,500 Organic Views in 24 Hours", d: "Produced social media content for Facebook and Instagram with zero advertising budget." },
    { icon: "📢", h: "Full Visual Identity Design", d: "Designed logo direction, poster templates, and presentation materials using Canva and PowerPoint." },
    { icon: "📄", h: "Official University Correspondence", d: "Drafted formal letters to the Dean to obtain administrative authorisations for club operations." },
    { icon: "📊", h: "Member Database · Google Forms + Sheets", d: "Built an integrated registration and tracking system for 39+ members." },
    { icon: "🏛", h: "University Administration Liaison", d: "Coordinated with university administration to validate and monitor all club activities." },
  ];

  return (
    <section id="experience" ref={ref} className="py-28 px-6" style={{ background: "#FAF8F5", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>03 · Experience</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>
        <h2 className="mb-16 leading-tight" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,7vw,3.5rem)", color: "#0D1B2A" }}>
          Where I&apos;ve<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>made an impact</em>
        </h2>

        <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(13,27,42,0.08)", boxShadow: "0 8px 40px rgba(13,27,42,0.08)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: "all 0.8s ease" }}>
          {/* Header */}
          <div className="p-8 border-b border-white/10" style={{ background: "linear-gradient(135deg,#0D1B2A,#163B27)" }}>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs mb-3" style={{ background: "rgba(196,168,130,0.2)", color: "#C4A882", fontFamily: "monospace" }}>Current Role</div>
                <h3 className="text-white mb-1" style={{ fontFamily: "Georgia,serif", fontSize: "1.3rem" }}>Co-Founder & Communication and Administrative Manager</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>ECONOVO Student Club — Université M.E.B. El Ibrahimi</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm" style={{ color: "#C4A882", fontFamily: "monospace" }}>Dec 2025</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>Present</div>
              </div>
            </div>
          </div>
          {/* Timeline */}
          <div className="p-8 bg-white">
            <div className="relative">
              <div className="absolute left-[19px] top-2 w-px" style={{ background: "linear-gradient(180deg,#C4A882,rgba(196,168,130,0.2))", height: "calc(100% - 8px)" }} />
              <div className="flex flex-col gap-7">
                {items.map((item, i) => (
                  <div key={item.h} className="flex gap-5 group" style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-20px)", transition: `all 0.5s ease ${0.4 + i * 0.1}s` }}>
                    <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg transition-all duration-300"
                      style={{ background: "#FAF8F5", border: "2px solid rgba(196,168,130,0.3)" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "#C4A882")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(196,168,130,0.3)")}>
                      {item.icon}
                    </div>
                    <div className="pt-1.5">
                      <div className="font-semibold text-sm mb-1" style={{ color: "#0D1B2A" }}>{item.h}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "rgba(13,27,42,0.5)" }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Education ──────────────────────────────────────────────────────────────
function Education() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const degrees = [
    { icon: "🎓", badge: "In Progress", title: "Bachelor's in Business Administration", inst: "Université Mohamed El Bachir El Ibrahimi", loc: "Bordj Bou Arreridj, Algeria", period: "2025 – 2028", color: "#C4A882",
      desc: "Studying core business disciplines — applying learnings immediately through the ECONOVO student club.", tags: ["Business Admin", "Management", "Finance", "Marketing"] },
    { icon: "🏅", badge: "Certified", title: "Claude AI 101 — Applied Artificial Intelligence", inst: "Anthropic", loc: "Online", period: "2025", color: "#8AB4D8",
      desc: "Comprehensive certification covering AI-assisted workflows, prompt engineering, and responsible AI usage.", tags: ["Anthropic", "AI Workflows", "Prompt Engineering", "Claude"] },
  ];

  return (
    <section id="education" ref={ref} className="py-28 px-6"
      style={{ background: "linear-gradient(160deg,#0D1B2A,#162236)", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>04 · Education</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>
        <h2 className="mb-16 leading-tight" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,7vw,3.5rem)", color: "white" }}>
          Learning &<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>credentials</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((d, i) => (
            <div key={d.title} className="group relative rounded-2xl p-8 overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: `all 0.8s ease ${0.2 + i * 0.15}s` }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5" style={{ background: d.color }} />
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ background: d.color + "18" }}>{d.icon}</div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: d.color + "22", color: d.color, fontFamily: "monospace" }}>{d.badge}</span>
              </div>
              <h3 className="text-white leading-snug mb-2" style={{ fontFamily: "Georgia,serif", fontSize: "1.15rem" }}>{d.title}</h3>
              <p className="font-semibold text-sm mb-4" style={{ color: d.color }}>{d.inst}</p>
              <p className="text-xs leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>{d.desc}</p>
              <div className="flex flex-col gap-2 mb-6">
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>📅 {d.period}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>📍 {d.loc}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs" style={{ color: d.color + "cc", borderColor: d.color + "25", border: "1px solid", background: d.color + "0c", fontFamily: "monospace" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Impact ─────────────────────────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!vis) return;
    let v = 0;
    const t = setInterval(() => {
      v += target / 60;
      if (v >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(v));
    }, 1600 / 60);
    return () => clearInterval(t);
  }, [vis, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function Impact() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const metrics = [
    { icon: "👥", n: 39, s: "+", l: "Club Members", d: "Registered at ECONOVO — all acquired organically through community outreach" },
    { icon: "📈", n: 4500, s: "", l: "Organic Views", d: "Social media impressions within the first 24 hours, zero ad spend" },
    { icon: "⏱", n: 24, s: "h", l: "Time to Impact", d: "Hours between first post going live and achieving 4,500 views" },
    { icon: "⚡", n: 1, s: "", l: "Club Co-Founded", d: "ECONOVO — from idea to active community with full visual identity" },
  ];

  return (
    <section id="impact" ref={ref} className="py-28 px-6"
      style={{ background: "linear-gradient(160deg,#0B1F12,#0D2818,#0B1F12)", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>05 · Impact</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>
        <h2 className="mb-16 leading-tight" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,7vw,3.5rem)", color: "white" }}>
          Numbers that<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>speak for themselves</em>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div key={m.l} className="group relative p-7 rounded-2xl transition-all duration-400"
              style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: `all 0.7s ease ${0.1 * i}s` }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(196,168,130,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
              <div className="text-2xl mb-5">{m.icon}</div>
              <div className="mb-2" style={{ fontFamily: "Georgia,serif", fontSize: "3rem", color: "white", lineHeight: 1 }}>
                <Counter target={m.n} suffix={m.s} />
              </div>
              <div className="font-semibold text-sm mb-3" style={{ color: "#C4A882" }}>{m.l}</div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Languages ──────────────────────────────────────────────────────────────
function Languages() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const langs = [
    { name: "Arabic", level: "Native", pct: 100, flag: "🇩🇿", color: "#C4A882", desc: "Native speaker — all formal and informal communication" },
    { name: "English", level: "Intermediate B1", pct: 65, flag: "🌐", color: "#8AB4D8", desc: "Professional reading, writing & tool usage" },
    { name: "French", level: "Intermediate B1", pct: 65, flag: "🇫🇷", color: "#A0C878", desc: "Academic and everyday written communication" },
  ];

  return (
    <section id="languages" ref={ref} className="py-28 px-6" style={{ background: "#F5F0E8", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>06 · Languages</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>
        <h2 className="mb-16 leading-tight" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,7vw,3.5rem)", color: "#0D1B2A" }}>
          I communicate<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>across borders</em>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {langs.map((l, i) => (
            <div key={l.name} className="flex flex-col items-center p-8 rounded-2xl bg-white text-center transition-all duration-400"
              style={{ border: "1px solid rgba(13,27,42,0.06)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: `all 0.7s ease ${0.1 * i}s` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(196,168,130,0.3)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(196,168,130,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(13,27,42,0.06)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div className="text-4xl mb-4">{l.flag}</div>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: "1.5rem", color: "#0D1B2A", marginBottom: "0.5rem" }}>{l.name}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-xs mb-3" style={{ background: l.color + "18", color: l.color, fontFamily: "monospace" }}>{l.level}</span>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(13,27,42,0.45)" }}>{l.desc}</p>
              <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(13,27,42,0.08)" }}>
                <div className="h-full rounded-full" style={{ width: vis ? `${l.pct}%` : "0%", background: l.color, transition: `width 1.2s cubic-bezier(0.25,1,0.5,1) ${0.5 + i * 0.1}s` }} />
              </div>
              <div className="mt-2 text-xs font-semibold" style={{ color: l.color, fontFamily: "monospace" }}>{l.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const contacts = [
    { icon: "✉", label: "Email", value: "Fbdadache@gmail.com", href: "mailto:Fbdadache@gmail.com", color: "#C4A882", sub: "Best way to reach me" },
    { icon: "📞", label: "Phone", value: "0799 647 870", href: "tel:+213799647870", color: "#A0C878", sub: "9 AM – 8 PM GMT+1" },
    { icon: "in", label: "LinkedIn", value: "fouad-b-dadache", href: "https://linkedin.com/in/fouad-b-dadache-ab1907410", color: "#8AB4D8", sub: "Connect professionally" },
    { icon: "📍", label: "Location", value: "Bordj Bou Arreridj", href: "#", color: "#D8A8C8", sub: "Algeria · Open to remote" },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 px-6"
      style={{ background: "linear-gradient(160deg,#0D1B2A,#122034)", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882", fontFamily: "monospace" }}>07 · Contact</span>
          <div className="w-14 h-px" style={{ background: "linear-gradient(90deg,#C4A882,transparent)" }} />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
            <h2 className="leading-tight mb-6" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,7vw,3.5rem)", color: "white" }}>
              Let&apos;s build<br /><em style={{ color: "#C4A882", fontStyle: "normal" }}>something great</em>
            </h2>
            <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Whether you have a project in mind, want to collaborate, or just want to connect — my inbox is always open.
            </p>
            <a href="mailto:Fbdadache@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300"
              style={{ background: "#C4A882", color: "#0D1B2A" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FAF8F5"; e.currentTarget.style.boxShadow = "0 0 40px rgba(196,168,130,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#C4A882"; e.currentTarget.style.boxShadow = "none"; }}>
              ✉ Send me an email →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="group relative p-5 rounded-2xl transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", opacity: vis ? 1 : 0, transform: vis ? "none" : "scale(0.9)", transition: `all 0.5s ease ${0.25 + i * 0.1}s` }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-sm font-bold"
                  style={{ background: c.color + "18", color: c.color }}>{c.icon}</div>
                <div className="text-xs mb-0.5" style={{ color: c.color, fontFamily: "monospace" }}>{c.label}</div>
                <div className="text-xs font-semibold truncate mb-1" style={{ color: "rgba(255,255,255,0.8)" }}>{c.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>{c.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: "#090F14", borderTop: "1px solid rgba(255,255,255,0.05)", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[#0D1B2A]"
              style={{ background: "linear-gradient(135deg,#C4A882,#A08060)", fontFamily: "Georgia,serif" }}>FD</div>
            <div>
              <div className="text-white/80 font-semibold text-sm">Fouad Dadache</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>Business · AI · Design</div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {["about","skills","experience","education","contact"].map(l => (
              <a key={l} href={`#${l}`} className="text-xs capitalize hover:text-[#C4A882] transition-colors"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{l}</a>
            ))}
          </div>
          <div className="flex gap-3">
            {[
              { href: "mailto:Fbdadache@gmail.com", l: "✉" },
              { href: "https://linkedin.com/in/fouad-b-dadache-ab1907410", l: "in" },
              { href: "https://github.com/fbdadache-a11y", l: "gh" },
            ].map(s => (
              <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono hover:text-[#C4A882] transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}>{s.l}</a>
            ))}
          </div>
        </div>
        <div className="h-px mb-8" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
          <span>© {new Date().getFullYear()} Fouad Dadache · All rights reserved</span>
          <span>Built with ♥ & Next.js</span>
        </div>
      </div>
    </footer>
  );
}

// ── Global styles injected ─────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    html { scroll-behavior: smooth; }
    body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0D1B2A; }
    ::-webkit-scrollbar-thumb { background: #C4A882; border-radius: 3px; }
    @keyframes aurora {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    @keyframes float {
      0%,100% { transform: translateY(0px); }
      50%      { transform: translateY(-20px); }
    }
    @keyframes particle {
      0%,100% { transform: translateY(0); opacity: 0.2; }
      50%      { transform: translateY(-25px); opacity: 0.8; }
    }
    @keyframes blink {
      0%,100% { opacity: 1; } 50% { opacity: 0; }
    }
    @keyframes bounce {
      0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); }
    }
    @keyframes ping {
      0% { transform: scale(1); opacity: 0.75; }
      100% { transform: scale(2); opacity: 0; }
    }
  `}</style>
);

// ── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Impact />
        <Languages />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
