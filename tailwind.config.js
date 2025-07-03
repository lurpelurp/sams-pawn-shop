module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gold: '#D4AF37',
        navy: '#22304A',
        red: '#E53935',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 4px 16px 0 rgba(34,48,74,0.07)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}; 