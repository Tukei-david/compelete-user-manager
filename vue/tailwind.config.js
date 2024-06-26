/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/views/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
  ],
  theme: {
    // Adding animation
    extend: {
      keyframes: {
        'fade-in-down': {
          "from": {
            transform: "translate(-0.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translate(0rem)",
            opacity: '1'
          },
        },
      },
      animation: {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
      }
    },
  },
  plugins: ['@tailwindcss/forms'],
}

