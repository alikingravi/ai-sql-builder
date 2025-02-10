import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        navbar: "var(--navbar-bg)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbarBg: "var(--navbar-bg)",
        navbarBorderGlow: "var(--navbar-border-glow)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowingBorder: {
          "0%": { boxShadow: "0 0 10px var(--navbar-border-glow)" },
          "50%": { boxShadow: "0 0 20px var(--navbar-border-glow)" },
          "100%": { boxShadow: "0 0 10px var(--navbar-border-glow)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        glowing: "glowingBorder 2s infinite ease-in-out",
        gradientShift: "gradientShift 6s infinite linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
