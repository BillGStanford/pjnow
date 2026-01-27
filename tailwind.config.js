// short-singularity/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c00010c7',
          dark: '#990000',
          light: '#F77F00',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
        accent: {
          gold: '#FCA311',
          bronze: '#EAE2B7',
        },
        gray: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#000000',
            lineHeight: '1.75',
            h2: {
              fontFamily: 'Roboto Slab, Georgia, serif',
              fontWeight: '700',
            },
            h3: {
              fontFamily: 'Roboto Slab, Georgia, serif',
              fontWeight: '600',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#E63946',
              borderLeftWidth: '4px',
            },
          },
        },
      },
    },
  },
  plugins: [],
};