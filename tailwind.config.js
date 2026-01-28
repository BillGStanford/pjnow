// short-singularity/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b91c1c',
          dark: '#991b1b',
          light: '#dc2626',
        },
        secondary: {
          DEFAULT: '#111827',
          light: '#374151',
        },
        accent: {
          gold: '#d97706',
          bronze: '#92400e',
        },
        gray: {
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Roboto Condensed', 'system-ui', 'sans-serif'],
        condensed: ['Roboto Condensed', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#000000',
            lineHeight: '1.75',
            h2: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '700',
              borderBottom: '2px solid #b91c1c',
              paddingBottom: '0.5rem',
            },
            h3: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '600',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#b91c1c',
              borderLeftWidth: '4px',
              backgroundColor: '#f9fafb',
              padding: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [],
};