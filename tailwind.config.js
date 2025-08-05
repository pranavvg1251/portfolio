/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        'primary-hover': '#f3f4f6',
        secondary: '#9ca3af',
      },
      spacing: {
        'section': '2rem',
        'container': '0.5rem',
      },
    },
  },
  plugins: [],
}
