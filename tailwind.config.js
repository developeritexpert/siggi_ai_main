/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
      },
      fontSize: {
        base: ['18px', '100%'],
        'lg-xl-title': ['72px', { lineHeight: '80px' }], // Used between 1024-1440
        'lg-xl-desc': ['16px', { lineHeight: '24px' }],
      },
      padding: {
        'btn-lg-xl-x': '24px',
        'btn-lg-xl-y': '14px',
      },
      colors: {
        mint: {
          500: 'oklch(0.72 0.11 178)',
        },
      },
      letterSpacing: {
        tightest: '0em',
      },
      screens: {
        // Custom media query range from 1024px to 1440px
        'lg-xl': { min: '1024px', max: '1439px' },
      },
    },
  },
  plugins: [],
};
