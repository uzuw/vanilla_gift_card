/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#FBBF24",
          brightColor: "var(--color-brightColor)",
        backgroundColor: "var(--color-backgroundColor)",
        textColor: "var(--color-textColor)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
    },
  },
  plugins: [],
}
}


