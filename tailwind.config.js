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
          darkblack: "#131313",
          yellow: {
            light: "#ffcc00",
            DEFAULT: "#e6b800",
            dark: "#c69e00",
          } /*#ffdd00 */,
          green: {
            light: "#52b493",
            DEFAULT: "#379777",
            dark: "#1e7457",
          },
          blue: "#007bff" /*#00b8d9 */,
          grey: "#d3d3d3" /*#303030 */,
        },
      },
      fontFamily: {
        primary: ['"Bebas Neue"', "sans-serif"],
        body: ['"Red Hat Display"', "sans-serif"],
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(29,29,29,4) 2px, #f1f1f101 5px, #f1f1f101 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(241,241,241,4) 2px, #f1f1f101 5px, #f1f1f101 100px)",
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
