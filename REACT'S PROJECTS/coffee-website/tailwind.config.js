/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: '#AB6B2E', // Brown
      },
      linearGradientColors: (theme) => ({
        'coffee': ['to right', '#8B4513', '#D2B48C'], // Gradient from Saddle Brown to Tan
      }),
    },
  },
};
