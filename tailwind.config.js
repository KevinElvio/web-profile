/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        secondary: "#94a3b8",
        page: "var(--color-page)",
        ink: "var(--color-ink)",
        card: "var(--color-card)",
        body: "var(--color-body)",
        label: "var(--color-label)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
        borderc: "var(--color-border)",
      },
    },
  },
  plugins: [],
}