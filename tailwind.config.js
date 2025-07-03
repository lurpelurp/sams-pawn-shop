module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary: '#1F2937',
        neutral: {
          50: '#F9FAFB',
          100: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        card: '0 4px 8px rgba(0,0,0,0.05)',
      },
      spacing: {
        sectionY: '80px',
        sectionX: '24px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}; 