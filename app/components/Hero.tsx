"use client";

import { motion } from "framer-motion";

import Container from "./Container";
import Background from "./Background";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">

      <Background />

      <Container>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.p
            className="hero-label"
            variants={itemVariants}
          >
            PERSONAL WEBSITE
          </motion.p>
<div className="hero-title">

  <Reveal delay={0.2}>
    <div>Fouad</div>
  </Reveal>

  <Reveal delay={0.35}>
    <div>Dadache</div>
  </Reveal>

</div>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Building thoughtful digital experiences,
            student communities,
            and practical ideas.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={itemVariants}
          >

            <a
              className="button button-primary"
              href="#work"
            >
              View Work
            </a>

            <a
              className="button button-secondary"
              href="#contact"
            >
              Contact
            </a>

          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
}
