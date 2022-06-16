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
          "10%": { transform: "rotate(1deg)" },
          "20%": { transform: "rotate(-1deg)" },
          "30%": { transform: "rotate(1deg)" },
          "40%": { transform: "rotate(-0.8deg)" },
          "50%": { transform: "rotate(1deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wiggle: "wave 1s ease-in infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
