/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#030503",
        "brand-bg-deep": "#050805",
        "brand-dark-green": "#07150B",
        "brand-emerald": "#092313",
        "brand-neon": "#39FF14",
        "brand-lime": "#75FF36",
        "brand-muted-green": "#183B20",
        "brand-text": "#F1F5EF",
        "brand-text-secondary": "#929B91",
        "brand-card": "#07150B",
        "brand-card-hover": "#0C2314",
        "brand-accent": "#39FF14",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        "neon-sm": "0 0 15px -2px rgba(57, 255, 20, 0.45)",
        "neon-md": "0 0 30px -4px rgba(57, 255, 20, 0.4)",
        "neon-lg": "0 0 60px -8px rgba(57, 255, 20, 0.3)",
      },
    },
  },
  plugins: [],
};
