/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
        hoverBounce: 'hoverBounce 0.6s ease-out', // Animación para los cards al hacer hover
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        hoverBounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gray-gradient': 'linear-gradient(to bottom, #E5E7EB, #4B5563)', // de bg-gray-200 a bg-gray-700
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.service-card': {
          '@apply bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg': {},
        },
        '.service-card:hover h3': {
          '@apply text-indigo-500': {},
        },
        '.service-card h3': {
          '@apply text-gray-800 transition-colors': {},
        },
      });
    },
  ],
};
