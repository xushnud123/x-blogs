const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        shimmer: 'shimmer 8s infinite',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
      },
      keyframes: {
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        shimmer: {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shimmer-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shimmer-width)) 0',
          },
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
      },
      colors: {
        anim: {
          1: '#366585',
          2: '#2A3F4D',
          3: '#112F38',
          4: '#4D3685',
          5: '#366585',
          6: '#adb1b8',
        },
        'gran-1': 'rgb(179, 194, 203)',
        'br-1': 'rgba(204, 204, 204, 0.1)',
        'br-2': '#222222',
        'bg-1': 'rgb(20, 20, 20)',
        'bg-2': 'rgb(15, 21, 31)',
        'bg-3': '#0f1620',
        projects: {
          1: 'rgb(130, 201, 94)',
          2: 'rgb(212, 135, 64)',
          3: 'rgb(186, 138, 214)',
          4: 'rgb(15, 100, 153)',
        },
        tt: {
          1: '#E6E6E6',
          2: '#B3C2CB',
          3: '#D1DAE0',
          4: 'rgb(209, 218, 224)',
          5: ' rgb(230, 230, 230)',
          6: 'rgb(191, 191, 191)',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'san-serif'],
        satoshi: ['var(--font-satoshi)', 'san-serif'],
        'hanken-grotesk': ['var(--font-hanken-grotesk)', 'san-serif'],
      },
      backgroundImage: {
        'text-radial':
          'radial-gradient(61% 200% at 39.7% 21.9%, rgba(255, 255, 255,0.8) 0%, rgba(0, 0, 0, 0.35) 100%)',
        'noise-radial': "url('/public/Container.png')",
      },
      boxShadow: {
        '1': 'rgba(255, 255, 255, 0.5) 0px 0px 15px 0px',
        '2': 'rgba(0, 0, 0, 0.184) 0px 0.70659px 0.70659px -0.625px, rgba(0, 0, 0, 0.18) 0px 1.80656px 1.80656px -1.25px, rgba(0, 0, 0, 0.173) 0px 3.62176px 3.62176px -1.875px, rgba(0, 0, 0, 0.16) 0px 6.8656px 6.8656px -2.5px, rgba(0, 0, 0, 0.13) 0px 13.6468px 13.6468px -3.125px, rgba(0, 0, 0, 0.063) 0px 30px 30px -3.75px;',
      },
      screens: {
        smm: '450px',
      },
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms'), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
