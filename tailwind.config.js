module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'iphone-se': '320px',
      'iphone-8': '375px',
      sm: '415px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1536px',
    },
  },
  plugins: [],
};
