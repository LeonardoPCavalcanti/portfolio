import type { Config } from 'tailwindcss';

/**
 * Identidade 2026: topo laranja de página inteira, seções em papel claro,
 * uma faixa preta. Inter Tight pesada nos títulos, JetBrains Mono nos rótulos.
 * O laranja do topo (#CC4A1C) é mais fechado que o vivo (#E2531F) para o
 * texto branco pequeno passar AA (4,6:1). O vivo é só detalhe.
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#CC4A1C', bright: '#E2531F' },
        paper: '#F4F3EF',
        ink: '#111110',
        muted: '#6E6B66',
        line: '#DCD9D2',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        crush: '-0.055em',
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};

export default config;
