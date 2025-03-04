import type { Config } from 'tailwindcss';
import fade from '@eioluseyi/tailwind-fade';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [fade],
} satisfies Config;
export default config;
