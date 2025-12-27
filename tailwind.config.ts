import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'aeonik': ['Aeonik', 'sans-serif'],
        'pp-editorial': ['PP Editorial Old', 'serif'],
      },
      colors: {
        'pure-cacao': '#262424',
        'fog': '#E5E2DE',
        'channel-orange': '#F27E4C',
        'warm-beige': '#C0BBAE',
        'sage': '#9B978B',
      },
    },
  },
  plugins: [],
}

export default config