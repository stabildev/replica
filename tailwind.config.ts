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
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
        'grad-purple': 'rgb(var(--grad-purple-rgb) / <alpha-value>)',
        'grad-pink': 'rgb(var(--grad-pink-rgb) / <alpha-value>)',
        'grad-orange': 'rgb(var(--grad-orange-rgb) / <alpha-value>)',
        purpleshine: 'rgb(var(--purpleshine-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
      },
      height: {
        '11': '2.75rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      opacity: {
        '15': '0.15',
      },
      animation: {
        orbit: 'orbit 15s linear infinite',
        'orbit-reverse': 'orbit-reverse 15s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-gradient-mask-image')],
}
export default config
