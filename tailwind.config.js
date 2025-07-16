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
        'gold-light': '#E6C866',
        'gold-dark': '#B8941F',
        navy: '#1A2332',
        'navy-light': '#2A3447',
        'navy-dark': '#0F1419',
        red: '#E53935',
        'gray-light': '#F8F9FA',
        'gray-medium': '#6B7280',
        'gray-dark': '#374151',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        card: '0 4px 16px 0 rgba(34,48,74,0.07)',
        'card-hover': '0 8px 32px 0 rgba(34,48,74,0.12)',
        'hero': '0 20px 40px 0 rgba(34,48,74,0.15)',
      },
      borderRadius: {
        card: '12px',
        'card-lg': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        'section-y': '5rem',
        'section-x': '1.5rem',
      },
    },
  },
  plugins: [],
}; 