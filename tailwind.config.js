/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./mdx-components.jsx",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--ifm-color-primary)',
          dark: 'var(--ifm-color-primary-dark)',
          darker: 'var(--ifm-color-primary-darker)',
          darkest: 'var(--ifm-color-primary-darkest)',
          light: 'var(--ifm-color-primary-light)',
          lighter: 'var(--ifm-color-primary-lighter)',
          lightest: 'var(--ifm-color-primary-lightest)',
        },
        surface: 'var(--ifm-background-surface-color)',
        card: 'var(--ifm-background-card-color)',
        base: 'var(--ifm-background-color)',
        border: 'var(--border-color)',
        emphasis: {
          100: 'var(--ifm-color-emphasis-100)',
          200: 'var(--ifm-color-emphasis-200)',
          300: 'var(--ifm-color-emphasis-300)',
          700: 'var(--ifm-color-emphasis-700)',
        },
      },
      textColor: {
        base: 'var(--ifm-font-color-base)',
        muted: 'var(--ifm-color-emphasis-700)',
        primary: 'var(--ifm-color-primary)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      maxWidth: {
        container: '1140px',
        prose: '760px',
      },
      lineHeight: {
        base: '1.65',
        heading: '1.25',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
