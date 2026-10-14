import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import tailwindSrc from '../../tailwind.config.ts?raw';
import html from '../../index.html?raw';
import { LangProvider } from '../i18n/LangProvider';
import Header from '../components/layout/Header';

// Lê os tokens direto do arquivo de config (string), sem importar o projeto TS do Node.
const token = (name: string) =>
  tailwindSrc.match(new RegExp(`\\b${name}: (?:\\{ DEFAULT: )?'(#[0-9A-Fa-f]{6})'`))?.[1] ?? '';

function luminance(h: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

describe('contraste dos tokens', () => {
  it('segundo tom dos títulos (dim) tem pelo menos 3:1 sobre o papel', () => {
    expect(contrast(token('dim'), token('paper'))).toBeGreaterThanOrEqual(3);
  });
  it('texto branco pequeno passa AA sobre o laranja do topo', () => {
    expect(contrast('#FFFFFF', token('orange'))).toBeGreaterThanOrEqual(4.5);
  });
});

describe('cabeçalho', () => {
  it('botão de idioma inativo não usa branco translúcido (perde contraste no laranja)', () => {
    window.history.replaceState(null, '', '/portfolio/?lang=pt');
    render(<LangProvider><Header /></LangProvider>);
    const inactive = screen.getByRole('button', { name: 'en' });
    expect(inactive.className).not.toMatch(/text-white\/\d+/);
  });

  it('menu tem nome acessível no idioma escolhido', () => {
    window.history.replaceState(null, '', '/portfolio/?lang=pt');
    render(<LangProvider><Header /></LangProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'en' }));
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
  });

  it('menu também existe no celular (não fica só em md:flex)', () => {
    window.history.replaceState(null, '', '/portfolio/?lang=pt');
    render(<LangProvider><Header /></LangProvider>);
    const nav = screen.getByRole('navigation');
    expect(nav.className).not.toMatch(/(^|\s)hidden(\s|$)/);
  });
});

describe('fontes', () => {
  const files = import.meta.glob('../components/**/*.tsx', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const src = Object.values(files).join('\n');
  const interUrl = html.match(/family=Inter\+Tight:wght@([\d;]+)/)?.[1].split(';') ?? [];

  it.each([
    ['font-semibold', '600'],
    ['font-bold', '700'],
    ['font-extrabold', '800'],
    ['font-black', '900'],
  ])('%s usado nos componentes tem o peso %s carregado', (cls, weight) => {
    if (new RegExp(`\\b${cls}\\b`).test(src)) expect(interUrl).toContain(weight);
  });
});
