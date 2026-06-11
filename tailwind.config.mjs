/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces — calm, dark, enterprise-grade
        ink: '#080b11',
        'ink-soft': '#0b0f18',
        panel: '#0e131e',
        'panel-2': '#121a28',

        // Hairlines / borders
        line: 'rgb(255 255 255 / 0.08)',
        'line-strong': 'rgb(255 255 255 / 0.16)',

        // Text
        fg: '#eef1f7',
        muted: '#9aa6bd',
        'muted-2': '#727e93',

        // Restrained electric accent (indigo / periwinkle)
        accent: '#8093ff',
        'accent-soft': '#9aa8ff',
        'accent-deep': '#5b6cff',
        // Secondary highlight (used sparingly, e.g. AI section)
        'accent-2': '#5fe3cf',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
      maxWidth: {
        shell: '1180px',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      borderRadius: {
        '4xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 0 0 rgb(255 255 255 / 0.04) inset, 0 18px 40px -24px rgb(0 0 0 / 0.8)',
        glow: '0 0 0 1px rgb(128 147 255 / 0.25), 0 20px 60px -20px rgb(91 108 255 / 0.45)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
