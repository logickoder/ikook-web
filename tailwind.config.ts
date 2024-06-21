import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: '#FCC01C',
        body: '#323335',
        title: '#060605'
      },
      borderRadius: {
        large: '1.5rem'
      },
      width: {
        max: '70%',
        min: '35%'
      },
      spacing: {
        small: '1.5rem',
        medium: '2.5rem',
        large: '3.5rem'
      },
      fontSize: {
        '2xs': '0.625rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Hide scrollbar for Chrome, Safari and Opera
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        // Hide scrollbar for IE, Edge and Firefox
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      });
    })
  ]
} satisfies Config;
