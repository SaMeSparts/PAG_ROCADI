/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'font-display' será para títulos (Poppins)
        display: ['Poppins', 'sans-serif'],
        // 'font-sans' será la fuente por defecto (Roboto)
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        dorado_oscuro: "#E8860B",
        dorado_suave:"#E6C200",
        dorado_metalico:"#DAA520",
      },
    },
  },
  plugins: [],
}
