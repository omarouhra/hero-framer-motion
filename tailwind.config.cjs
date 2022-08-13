/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cal: ["Cal Sans", "Inter var", "sans-serif"],
      },

      keyframes: {
        wave: {
          "0%, 100%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(2px) rotate(30deg)",
          },
        },
      },
      animation: {
        wave: "wave 3s infinite both",
      },
    },
  },
  plugins: [],
};
