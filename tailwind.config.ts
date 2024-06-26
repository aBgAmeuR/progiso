import type { Config } from 'tailwindcss';
import { PluginUtils } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      mono: ['var(--font-mono)'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      /* backgroundImage: () => ({
        darka: "url('/placeholder-dark.png')",
        lighta: "url('/placeholder-white.png')",
      }), */
    },
    typography: ({ theme }: PluginUtils) => ({
      DEFAULT: {
        css: {
          color: theme('colors.foreground'),
          a: {
            color: theme('colors.primary.DEFAULT'),
            textDecoration: 'none',
            '&:hover': {
              color: theme('colors.primary.foreground'),
            },
          },
          'a code': {
            color: theme('colors.primary.DEFAULT'),
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          blockquote: {
            borderLeftColor: theme('colors.primary.DEFAULT'),
          },
          'h1, h2, h3, h4': {
            color: theme('colors.foreground'),
          },
          'figure figcaption': {
            color: theme('colors.foreground'),
          },
          pre: {
            color: theme('colors.foreground'),
            backgroundColor: theme('colors.background'),
          },
          strong: {
            color: theme('colors.foreground'),
          },
          th: {
            color: theme('colors.foreground'),
          },
          td: {
            color: theme('colors.foreground'),
          },
          h1: {
            fontSize: theme('fontSize.4xl'),
            fontWeight: theme('fontWeight.bold'),
          },
          h2: {
            fontSize: theme('fontSize.3xl'),
            fontWeight: theme('fontWeight.bold'),
          },
          h3: {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.semibold'),
          },
          h4: {
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.semibold'),
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.foreground'),
          a: {
            color: theme('colors.primary.DEFAULT'),
            textDecoration: 'none',
            '&:hover': {
              color: theme('colors.primary.foreground'),
            },
          },
          'a code': {
            color: theme('colors.primary.DEFAULT'),
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          blockquote: {
            borderLeftColor: theme('colors.primary.DEFAULT'),
          },
          'h1, h2, h3, h4': {
            color: theme('colors.foreground'),
          },
          'figure figcaption': {
            color: theme('colors.foreground'),
          },
          pre: {
            color: theme('colors.foreground'),
            backgroundColor: theme('colors.background'),
          },
          strong: {
            color: theme('colors.foreground'),
          },
          th: {
            color: theme('colors.foreground'),
          },
          td: {
            color: theme('colors.foreground'),
          },
        },
      },
    }),
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
