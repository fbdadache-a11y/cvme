// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // التأخير بـ 150ms بين كل عنصر
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-label" variants={itemVariants}>
            PERSONAL WEBSITE
          </motion.p>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Fouad
            <br />
            Dadache
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Building thoughtful digital experiences, student communities,
            and practical ideas.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a className="button button-primary" href="#work">
              View Work
            </a>
            <a className="button button-secondary" href="#contact">
              Contact
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
