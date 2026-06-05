/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050a",
        foreground: "#f4f4f7",
        accent: "#8b5cf6",
        "accent-hover": "#7c3aed",
        muted: "#a0a0b0",
        card: "rgba(10,10,15,0.6)",
        "card-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ['Geist', "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}
