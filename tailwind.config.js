/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3762e5",
          light: "#3B82F6",
          dark: "#1E40AF",
          darker: "#262489",
        },
        secondary: {
          DEFAULT: "#ff7f7f",
          light: "#ff9999",
          dark: "#cc6666",
        },
        third: {
          DEFAULT: "#f9f9f9",
          light: "#ffffff",
          dark: "#e0e0e0",
          darker: "#888888",
        },
      },
      keyframes: {
        "fade-in-scale": {
          "0%": {
            opacity: "0",
            transform: "scale(0.7)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fade-in-scale": "fade-in-scale 0.5s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".dir-rtl": {
          direction: "rtl",
        },
        ".dir-ltr": {
          direction: "ltr",
        },
      });
    },
  ],
};
