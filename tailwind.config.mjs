import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#96af6f',
        'primary-dark': '#5a7b00',
      },
      /* fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }, */
      boxShadow: {
        card: '0 3px 6px #00000029',
      },
    },
  },
  plugins: [],
};
