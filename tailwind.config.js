/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-bottom":
          "fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    "tailwindcss-animated",
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
};
