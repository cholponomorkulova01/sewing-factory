/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '422px',
        '560': '560px',
        '340': '340px',
        '3xl': '1680px',
      },
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'primary-blue': '#5079EC'
      },
      fontSize: {
        'small': '14px',
        'medium': '16px',
        'secondary-medium': '24px',
        'large': '32px',
      },
      fontWeight: {
        'thin': '300',
        'regular': '400',
        'medium': '500',
        'bold': '600',
      },
    },
  },
  plugins: [],
}