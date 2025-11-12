/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(17, 17, 17)',
        foreground: 'rgb(209, 209, 209)',
        muted: {
          foreground: 'rgb(140, 140, 143)',
        },
        border: 'rgb(48, 48, 48)',
      },
    },
  },
  plugins: [],
}
