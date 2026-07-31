"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="background">
      <motion.div
        className="blob blob-1"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-2"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="grid-pattern" />
    </div>
  );
}
