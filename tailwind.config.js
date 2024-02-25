/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: "#D26E4B",
        primary: "#7D2EEF",
        cBase: "#A0A5BA",
        pending: "#F7CB73",
        success: "#4BB543",
        heart: "#ff0000",
        primaryBlack: "#222529",
        error: "#F04235",
      },
      screens: {
        1000: 1000,
      },
    },
  },
  plugins: [],
};
