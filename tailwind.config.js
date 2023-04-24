/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'canyon': "url('assets/GrandCanyon.jpg')",
        'escocia': "url('assets/Escocia.jfif')",
        'china': "url('assets/Muralha.jpg')",
        'aruba': "url('assets/Aruba.jpg')",
      }
    },
  },
  plugins: [],
}

