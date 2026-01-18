/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        balsanBlue: "#0B2B59",
        balsanBlue2: "#0E3A7A",
        balsanSky: "#3B82F6",
        balsanGray: "#64748B",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
