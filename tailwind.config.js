/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9ba',
          400: '#ec7a95',
          500: '#df4f73',
          600: '#cc305b',
          700: '#ab2349',
          800: '#8f2041',
          900: '#7a1e3c',
        },
        cream: '#FAF7F5',
        charcoal: '#1a1a1a',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
      },
    },
  },
  plugins: [],
};
