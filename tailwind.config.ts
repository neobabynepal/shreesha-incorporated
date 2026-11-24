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
        corporate: {
          50: "#F2F7FA",
          100: "#DEECF3",
          200: "#C1DCE8",
          300: "#96C5D8",
          400: "#62A4C2",
          500: "#3F86A9",
          600: "#2D6C8F",
          700: "#265A7A",
          800: "#215172", // Core Primary Color #215172
          900: "#1B425E",
          950: "#102738",
        },
        cream: {
          50: "#FCFAF6",
          100: "#F8F5EE",
          200: "#F1EBE0",
          300: "#E6DDCD",
          400: "#D7C9B2",
          500: "#C2AF92",
        },
        sage: {
          50: "#F3F7F4",
          100: "#E3ECE5",
          200: "#C7DAD0",
          300: "#A3C2B1",
          400: "#7DA58E",
          500: "#5D886F",
          600: "#486E58",
          700: "#385545",
          800: "#2B4136",
          900: "#1F2E27",
        },
        sand: {
          50: "#FAF9F6",
          100: "#F4F1EA",
          200: "#E7E2D6",
          300: "#D6CEBC",
          400: "#C2B59D",
          500: "#AA997C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-xs": "0 1px 3px 0 rgba(33, 81, 114, 0.04)",
        "soft-sm": "0 2px 8px -2px rgba(33, 81, 114, 0.06)",
        soft: "0 4px 20px -2px rgba(33, 81, 114, 0.07)",
        "soft-lg": "0 10px 30px -4px rgba(33, 81, 114, 0.09)",
        "soft-xl": "0 20px 40px -6px rgba(33, 81, 114, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
