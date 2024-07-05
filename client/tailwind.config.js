/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'd-blue': 'hsl(209, 23%, 22%)',
      'vd-blue': 'hsl(207, 26%, 17%)',
      'vd-blue-lm': 'hsl(200, 15%, 8%)',
      'd-gray-lm': 'hsl(0, 0%, 52%)',
      'vl-gray-lm': 'hsl(0, 0%, 98%)',
      'white-txt': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'Nunito': ['Nunito Sans', 'sans-serif'],
    }
  },
  plugins: [],
  darkMode: "class",
};
