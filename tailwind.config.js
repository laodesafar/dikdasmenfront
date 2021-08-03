module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        50: "#118ff100",
        100: "#f0fffe",
        200: "#a4fefa",
        300: "#58fef6",
        400: "#06fef1",
        500: "#01b7ae",
        600: "#019891",
        700: "#01756f",
        800: "#005652",
        900: "#003330",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#F3F4F6",
        300: "#F3F4F6",
        400: "#F3F4F6",
        500: "#F3F4F6",
        600: "#F3F4F6",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
    zIndex: {
      "-10": "-10",
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
