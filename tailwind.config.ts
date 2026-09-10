import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        foreground: "#111111",
        accent: {
          DEFAULT: "#3454D1",
          hover: "#2A45AB",
          subtle: "rgba(52, 84, 209, 0.08)",
        },
        muted: {
          DEFAULT: "#6B6B6B",
          foreground: "#8A8A87",
        },
        border: {
          DEFAULT: "#E5E5E2",
          subtle: "#EEEEEC",
          strong: "#111111",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#F5F5F2",
          elevated: "#F8F8F6",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Hero: 40px mobile (2.5rem), 64px tablet (4rem), 96px desktop (6rem)
        hero: [
          "clamp(2.5rem, 6.5vw, 6rem)",
          {
            lineHeight: "0.96",
            letterSpacing: "-0.04em",
          },
        ],
        "display-sm": [
          "clamp(2rem, 4.5vw, 3.75rem)",
          {
            lineHeight: "1.02",
            letterSpacing: "-0.035em",
          },
        ],
        "heading-1": [
          "clamp(1.75rem, 3.2vw, 2.75rem)",
          {
            lineHeight: "1.12",
            letterSpacing: "-0.03em",
          },
        ],
        "heading-2": [
          "clamp(1.25rem, 2.2vw, 1.875rem)",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.025em",
          },
        ],
        "heading-3": [
          "clamp(1.125rem, 1.5vw, 1.375rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          },
        ],
        "body-lg": [
          "1.125rem", // 18px
          {
            lineHeight: "1.75",
            letterSpacing: "-0.01em",
          },
        ],
        "body-base": [
          "1rem", // 16px
          {
            lineHeight: "1.65",
            letterSpacing: "-0.01em",
          },
        ],
        meta: [
          "0.75rem", // 12px / 0.8125rem caption
          {
            lineHeight: "1.4",
            letterSpacing: "0.06em",
          },
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.035em",
        tight: "-0.02em",
        editorial: "0.08em",
      },
      borderWidth: {
        "1": "1px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      screens: {
        xs: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
