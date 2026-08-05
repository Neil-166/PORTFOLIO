import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
      },
      fontFamily: { sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: {
        glow: '0 0 40px rgb(var(--brand) / 0.16)',
        card: '0 1px 0 rgb(255 255 255 / .04) inset, 0 18px 45px rgb(0 0 0 / .22)',
        'card-lg': '0 1px 0 rgb(255 255 255 / .05) inset, 0 30px 70px rgb(0 0 0 / .3)',
      },
      backgroundImage: { grid: 'linear-gradient(rgb(255 255 255 / 0.045) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.045) 1px, transparent 1px)' },
    },
  },
  plugins: [],
} satisfies Config;
