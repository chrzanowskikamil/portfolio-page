import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        '100': '#3FCF8EB2',
        '200': '#87F740',
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
