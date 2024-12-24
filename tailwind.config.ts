import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary-color)',
        text: 'var(--text-color)',
      },
      fontFamily: {
        'roboto-sans': ['var(--font-roboto)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
