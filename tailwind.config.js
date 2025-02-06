/** @type {import('tailwindcss').Config} */

const backupFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

module.exports = {


  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {fontFamily: {
      cairo: ['Cairo', ...backupFonts], // Add Cairo to the font list
      poppins: ['Poppins', 'sans-serif'], // Add Cairo to the font list
    },},
  },
  plugins: [],
}

