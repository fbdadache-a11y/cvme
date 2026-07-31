import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          700: "#122034",
          600: "#162236",
          500: "#1E3050",
          400: "#2A4470",
          300: "#3A5A8A",
        },
        beige: {
          50: "#FAF8F5",
          100: "#F5F0E8",
          200: "#EDE4D5",
          300: "#DDD0BC",
          400: "#C4A882",
          500: "#B09060",
          600: "#A08060",
        },
        forest: {
          DEFAULT: "#0B1F12",
          950: "#070F09",
          900: "#0B2114",
          800: "#0D2818",
          700: "#163B27",
          600: "#1A4D2E",
          500: "#22613A",
          400: "#2D7A4A",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(180deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "draw-line": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        aurora: "aurora 12s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "draw-line": "draw-line 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
