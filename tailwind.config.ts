import type { Config } from 'tailwindcss';

/**
 * Paleta e tipografia inspiradas no design da wibify.agency:
 * fundo quase-preto, verde-limão ácido como único acento, tipografia
 * Switzer (sans display) + Instrument Serif (itálico editorial) +
 * JetBrains Mono (rótulos e referências).
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        panel: '#131316',
        panel2: '#1a1a1e',
        text: '#fafafa',
        secondary: '#c8c7c2',
        muted: '#9a9994',
        accent: '#c9e265',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Switzer', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
