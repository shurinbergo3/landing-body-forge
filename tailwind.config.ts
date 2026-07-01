import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        volt: {
          DEFAULT: "#bfff00",
          dim: "#9ed900",
          deep: "#86b800",
        },
        ink: {
          DEFAULT: "#000000",
          900: "#070708",
          800: "#0c0d0f",
          700: "#141518",
          600: "#1c1e22",
          500: "#262a30",
        },
        ash: {
          400: "#8b9099",
          300: "#a9aeb6",
        },
        orange: { brand: "#ff8a3d" },
        mint: { brand: "#4fe0c0" },
        violet: { brand: "#9a7bff" },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SF Mono", "Menlo", "Monaco", "monospace"],
      },
      maxWidth: {
        container: "1240px",
        narrow: "820px",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.28, 0.11, 0.32, 1)",
        "apple-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glow: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        glow: "glow 5s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
