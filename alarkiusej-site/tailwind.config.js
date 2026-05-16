/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#191919',
          light: '#1f1f1f',
        },
        surface: {
          DEFAULT: '#252525',
          raised: '#2e2e2e',
          hover: '#353535',
        },
        border: {
          DEFAULT: '#3a3a3a',
          light: '#444444',
        },
        text: {
          DEFAULT: '#e8e3dc',
          muted: '#9e9890',
          faint: '#6b6560',
        },
        rose: {
          DEFAULT: '#c97b73',
          light: '#e8a59e',
          dark: '#a35e57',
          bg: 'rgba(201, 123, 115, 0.12)',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2c87a',
          bg: 'rgba(201, 168, 76, 0.12)',
        },
        teal: {
          DEFAULT: '#5a9e8f',
          light: '#7bbfb0',
          bg: 'rgba(90, 158, 143, 0.12)',
        },
        success: '#7cb986',
        warning: '#d4a847',
        error: '#c96060',
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        body: '1.7',
        heading: '1.2',
      },
    },
  },
  plugins: [],
}
