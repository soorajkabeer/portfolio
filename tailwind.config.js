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
          white: "#f1f1f1" /*#181818 */,
          black: "#1d1d1d" /*#eaeaea*/,
          dblack: "#0b0b0b",
          yellow: "#fff200" /*#ffdd00 */,
          green: "#379777",
          blue: "#007bff" /*#00b8d9 */,
          grey: "#d3d3d3" /*#303030 */,
        },
      },
      fontFamily: {
        primary: ['"Bebas Neue"', "sans-serif"],
        body: ['"Red Hat Display"', "sans-serif"],
      },
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
