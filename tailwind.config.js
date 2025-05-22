/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        // Simple Mode Colors
        navy: "#0B1120",
        red: "#c80000ff",
        black: "#000000",
        white: "#FFFFFF",

        // Legacy colors (keeping for compatibility)
        background: "#F9FAFB",
        "primary-text": "#0B1120",
        accent: "#1D4ED8",
        "secondary-accent": "#60A5FA",
        "muted-text": "#D1D5DB",
        "button-text": "#FFFFFF",
        "dark-background": "#0B1120",
        "dark-primary-text": "#F9FAFB",
        "dark-accent": "#3B82F6",
        "dark-secondary-accent": "#93C5FD",
        "dark-muted-text": "#374151",
        "dark-button-text": "#FFFFFF",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
