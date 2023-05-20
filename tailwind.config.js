/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text: {
          '0': '#fafafc',
          '1': '#8c8c8e',
          '2': '#646466',
          '3': '#20202a',
          '4': '#1e1e28',
          '5': '#121217',
          'yellow':"#FFC107"
        },
        background: {
          '0': '#191923',
          '1': '#1e1e28e0',
          '2':'linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)'
        },
        boxShadow: {
          '0': '#0f0f1433',
        },
        textShadow: {
          '0': '#fafafc66',
        },
      }
    },
  },
  plugins: [],
}

