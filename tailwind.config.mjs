/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'cyan': '#2BD0D0',
          'cyan-hover': '#9AE3E3',
          'dark-violet': '#4B3F6B'
        },
        seconary: {
          'red': 'hsl(0, 87%, 67%)'
        },
        neutral: {
          'gray': '#EFF1F7',
          'grayish-violet': '#9E9AA8',
          'very-dark-blue': '#34313D',
          'very-dark-violet': '#3A3054'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
