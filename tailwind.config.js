/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        lightning: 'polygon(50% 0%, 70% 40%, 60% 40%, 80% 100%, 50% 60%, 60% 60%, 30% 100%, 40% 40%, 30% 40%)',
      },
    },
  },
  plugins: [],
}

