/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Ensures the container is centered
        padding: {
          DEFAULT: '2rem', // Default padding for all screen sizes
          md: '4rem',
          sm: '2rem', // Padding for small screens
          lg: '4rem', // Padding for large screens (laptop)
          xl: '6rem', // Padding for extra large screens (desktop)
        },
      },
    },
  },
  plugins: [],
}

