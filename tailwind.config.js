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
        primary: "#0898A2",    // El turquesa del logo
        secondary: "#111111",  // Negro para el Navbar
        accent: "#FBBF24",     // El amarillo del logo para detalles
        bg: "#FFFFFF",         // Fondo blanco limpio
        bgSoft: "#F9FAFB",     // Gris casi blanco para secciones
      },
    },
  },
  plugins: [],
}
