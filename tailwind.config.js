/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.1em',
        'wider': '0.15em',
        'widest': '0.2em',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
