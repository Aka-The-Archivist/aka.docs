module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {},
  },
  plugins: [],
};