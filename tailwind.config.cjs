/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#E60000',
      secondary: '#020203',
      'text-primary': '#000000',
      'text-secondary': '#FFFFFF',
      'bg-primary': '#FFFFFF',
    },
  },
  plugins: [],
};
