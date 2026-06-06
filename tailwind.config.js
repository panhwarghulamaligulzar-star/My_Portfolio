// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_light:'#067DA0',
        dark_black:'#10131A',
        primery_white:"#FFFFFF"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #0c0f15 0%, #0c131b 30%, #0F1D27 70%)',
      },
      
      fontFamily: {
        sans: ['Inter_VariableFont', ...defaultTheme.fontFamily.sans],
        light: ['Inter_Light', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        montserrat: ['Montserrat-VariableFont', 'sans-serif'],
        montserratItalic: ['Montserrat-Italic', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        soft: '0.75rem',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)',
        innerSoft: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
