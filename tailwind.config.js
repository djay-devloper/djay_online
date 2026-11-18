/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        panel: "#141414",
        line: "#262626",
        paper: "#F5F5F5",
        muted: "#A3A3A3",
        emerald: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        page: "1120px",
      },
    },
  },
  plugins: [],
};
