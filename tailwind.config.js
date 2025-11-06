/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        morph: {
          '0%, 100%': {
            borderRadius: '30% 70% 70% 30% / 40% 30% 70% 60%',
          },
          '50%': {
            borderRadius: '70% 30% 30% 70% / 60% 70% 30% 40%',
          },
        },
      },
      animation: {
        'fade-down': 'fadeDown 0.3s ease-out',
        float: 'float 6s ease-in-out infinite',
        morph: 'morph 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
