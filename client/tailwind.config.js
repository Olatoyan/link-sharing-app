/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "instrument-sans": ["Instrument Sans", "sans-serif"],
      },
      boxShadow: {
        "purple-sh": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
