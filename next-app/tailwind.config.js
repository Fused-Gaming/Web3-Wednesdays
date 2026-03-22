/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vln-dark': '#0b0f17',
        'vln-secondary': '#111827',
        'vln-elevated': '#1f2937',
        'vln-text': '#f3f4f6',
        'vln-muted': '#9ca3af',
        'vln-accent': '#00f5d4',
        'vln-secondary-accent': '#7c3aed',
        'vln-tertiary': '#00b3ff',
        'vln-success': '#22c55e',
        'vln-warning': '#f59e0b',
        'vln-danger': '#ef4444',
      },
      boxShadow: {
        'vln-glow': '0 0 12px rgba(0,245,212,0.4)',
      },
    },
  },
  plugins: [],
};
