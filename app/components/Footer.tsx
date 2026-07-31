"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t border-white/5"
      style={{ background: "#090F14" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C4A882] to-[#A08060] flex items-center justify-center font-serif text-[#0D1B2A] font-bold text-base leading-none select-none">
              FD
            </div>
            <div>
              <div className="text-white/80 font-semibold text-sm">Fouad Dadache</div>
              <div className="text-white/30 font-mono text-[10px]">Business · AI · Design</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white/30 text-xs font-mono hover:text-[#C4A882] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { href: "mailto:Fbdadache@gmail.com", icon: Mail, label: "Email" },
              { href: "https://linkedin.com/in/fouad-b-dadache-ab1907410", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/fbdadache-a11y", icon: Github, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C4A882] hover:border-[#C4A882]/40 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-white/20 text-[11px] font-mono">
          <span>© {new Date().getFullYear()} Fouad Dadache · All rights reserved</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={10} className="text-[#C4A882] mx-0.5" /> & Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
