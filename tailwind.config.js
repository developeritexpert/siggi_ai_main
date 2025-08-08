/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'], // ✅ Inter via CSS var
        georgia: ['Georgia', 'serif'],
      },
      fontSize: {
        base: ['18px', '100%'], // ✅ Match your screenshot
      },
      colors: {
        mint: {
          500: 'oklch(0.72 0.11 178)',
        },
      },
      letterSpacing: {
        tightest: '0em', // just to match 0% tracking if you want
      },
    },
  },
  plugins: [],
};
