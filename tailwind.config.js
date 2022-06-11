const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: "jit",
  darkMode: "false",
  theme: {
    extend: {
      // gray: colors.neutral,
    },
  },
  plugins: [],
};
