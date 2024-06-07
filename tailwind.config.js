/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        dropdown: "dropdown 1s",
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-80px)" },
        },
      },
      colors: {
        "main-yellow": "#D7DF23",
        "pale-yellow": "#D7DD5D",
        "main-teal": "#00A79D",
        "main-gray": "#353535",
        "main-black": "#1F1F1F",
        "main-purple": "#693193",
        "pale-purple": "#A96DD6",
        "main-peach": "#E66B5B",
      },
      fontFamily: {
        urbanist: ['"Urbanist"'],
      },
    },
  },
  plugins: [],
};
