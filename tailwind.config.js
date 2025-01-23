/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        Arial: ["Arial", "sans-serif"],
        "Open Sans": ["Open Sans", "sans-serif"],
        Marselis: ["Marselis Pro", "sans-serif"],
      },
      colors: {
        primary: "#da4b07",
        bg: "#252c3e",
        secondary: "#f9f9fb",
        silver: "#dbdbdb",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "8px",
          sm: "8px",
          md: "8px",
          lg: "0",
          xl: "0",
        },
        screens: {
          sm: "640px", // ≥640px
          md: "768px", // ≥768px
          lg: "992px", // ≥1024px
          xl: "1140px", // ≥1280px
        },
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "22px",
      },
    },
  },
  plugins: [],
};
