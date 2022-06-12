const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: "jit",
  darkMode: "false",
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(5deg)" },
          "20%": { transform: "rotate(-5deg)" },
          "30%": { transform: "rotate(5deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(5.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wiggle: "wave 2s ease-in infinite",
      },
    },
  },
  plugins: [],
};
