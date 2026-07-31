"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="hero">

      <Container>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >

          <p className="hero-label">
            PERSONAL WEBSITE
          </p>

          <h1 className="hero-title">
            Fouad
            <br />
            Dadache
          </h1>

          <p className="hero-description">
            Building thoughtful digital experiences,
            student communities,
            and practical ideas.
          </p>

          <div className="hero-actions">

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

          </div>

        </motion.div>

      </Container>

    </section>
  );
}
