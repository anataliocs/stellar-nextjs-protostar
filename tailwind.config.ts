/** @type {import('tailwindcss').Config} */
import tailwind_scrollbar from 'tailwind-scrollbar';

module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [tailwind_scrollbar]
};
