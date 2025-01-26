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
        "Open Sans": ["Open Sans", "ans-serif"],
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
          sm: "640px",
          md: "768px",
          lg: "992px",
          xl: "1140px",
        },
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "22px",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slow-reverse": "spin 8s linear infinite reverse",
        hammer: "hammer 2s ease-in-out infinite",
        progress: "progress 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        hammer: {
          "0%, 100%": { transform: "translate(-50%, -50%) rotate(-15deg)" },
          "50%": { transform: "translate(-50%, -50%) rotate(15deg)" },
        },
        progress: {
          "0%, 100%": { width: "70%" },
          "50%": { width: "75%" },
        },
      },
    },
  },
  plugins: [],
};