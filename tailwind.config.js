/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        babyPowder: "#F7F9F7",
        black: "#000501",
        claret: "#750D37",
        mintGreen: "#DBF9F0",
        caledon: "#B3DEC1",
      },
    },
  },
  plugins: [],
};
