"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="background">

      <div className="background-grid" />

      <motion.div
        className="gradient gradient-1"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="gradient gradient-2"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, .9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="background-noise"/>

    </div>
  );
}
