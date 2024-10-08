/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          white: "#f1f1f1",
          black: "#1d1d1d" /*1d1d1d*/,
          yellow: "#fff200",
        },
      },
      fontFamily: {
        primary: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
