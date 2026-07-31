"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D1B2A]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo monogram */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C4A882] to-[#A08060] flex items-center justify-center font-serif text-[#0D1B2A] font-bold text-lg leading-none select-none group-hover:scale-105 transition-transform">
              FD
            </div>
            <span className="hidden sm:block font-mono text-sm text-white/50 tracking-wider">
              fouad.dadache
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link font-sans text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:Fbdadache@gmail.com"
              className="ml-2 px-5 py-2 rounded-full bg-[#C4A882] text-[#0D1B2A] font-semibold text-sm hover:bg-[#FAF8F5] transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D1B2A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {links.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-serif text-4xl text-white hover:text-[#C4A882] transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:Fbdadache@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 px-8 py-3 rounded-full bg-[#C4A882] text-[#0D1B2A] font-semibold text-lg"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
