"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Fbdadache@gmail.com",
    href: "mailto:Fbdadache@gmail.com",
    accent: "#C4A882",
    sub: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0799 647 870",
    href: "tel:+213799647870",
    accent: "#A0C878",
    sub: "Available 9 AM – 8 PM (GMT+1)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "fouad-b-dadache",
    href: "https://linkedin.com/in/fouad-b-dadache-ab1907410",
    accent: "#8AB4D8",
    sub: "Connect professionally",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bordj Bou Arreridj",
    href: "#",
    accent: "#D8A8C8",
    sub: "Algeria · Open to remote",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "linear-gradient(160deg, #0D1B2A 0%, #122034 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase">
            07 · Contact
          </span>
          <div className="w-14 h-px bg-gradient-to-r from-[#C4A882] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6"
            >
              Let's build
              <br />
              <em className="text-[#C4A882] not-italic">something great</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm"
            >
              Whether you have a project in mind, want to collaborate, or just
              want to connect — my inbox is always open.
            </motion.p>

            {/* Primary CTA */}
            <motion.a
              href="mailto:Fbdadache@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#C4A882] text-[#0D1B2A] rounded-full font-semibold text-sm hover:bg-[#FAF8F5] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(196,168,130,0.3)]"
            >
              <Send size={16} />
              Send me an email
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.a>
          </div>

          {/* Right — contact cards */}
          <div className="grid grid-cols-2 gap-4">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                  className="group relative p-5 rounded-2xl border border-white/7 bg-white/3 hover:bg-white/6 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${c.accent}12 0%, transparent 70%)`,
                    }}
                  />

                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${c.accent}18` }}
                  >
                    <Icon size={16} style={{ color: c.accent }} />
                  </div>

                  <div
                    className="text-xs font-mono mb-0.5"
                    style={{ color: c.accent }}
                  >
                    {c.label}
                  </div>
                  <div className="text-white/80 text-xs font-semibold truncate mb-1">
                    {c.value}
                  </div>
                  <div className="text-white/25 text-[10px] font-mono">{c.sub}</div>

                  {/* Arrow icon on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity">
                    <ArrowUpRight size={14} style={{ color: c.accent }} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
