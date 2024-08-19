import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },
        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
      },
      fontSize: {
        'heading-xs': ['1rem', '140%'],
        'heading-sm': ['1.125em', '140%'],
        'heading-lg': ['1.5rem', '140%'],
        'body-sm': ['0.875rem', '160%'],
        'body-md': ['1rem', '160%'],
        'button-md': ['1rem', '160%'],
        'button-lg': ['1.125rem', '160%'],
      },
      backgroundImage: {
        'gradient-horizontal':
          'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-vertical':
          'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
