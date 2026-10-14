import { describe, it, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MotionConfig } from 'motion/react';
import BlurText from '../components/ui/BlurText';

afterEach(() => {
  window.__setReduceMotion(false);
});

describe('BlurText', () => {
  it('leitor de tela lê a frase inteira uma vez', () => {
    render(<BlurText as="h2" text="Software que está no ar" />);
    const h = screen.getByRole('heading', { level: 2 });
    expect(h).toHaveAccessibleName('Software que está no ar');
  });

  it('com movimento reduzido, as palavras já nascem visíveis e sem desfoque', () => {
    window.__setReduceMotion(true);
    const { container } = render(
      <MotionConfig reducedMotion="user">
        <BlurText text="Quatro anos no ar" />
      </MotionConfig>,
    );
    const words = container.querySelectorAll('[data-word]');
    expect(words).toHaveLength(4);
    words.forEach((w) => {
      const style = (w as HTMLElement).style;
      expect(style.opacity === '' || style.opacity === '1').toBe(true);
      expect(style.filter === '' || style.filter === 'none' || style.filter === 'blur(0px)').toBe(true);
    });
  });

  it('sem movimento reduzido, as palavras começam escondidas', () => {
    const { container } = render(<BlurText text="Quatro anos no ar" />);
    const first = container.querySelector('[data-word]') as HTMLElement;
    expect(first.style.opacity).toBe('0');
  });

  it('dimWords escurece só as palavras indicadas', () => {
    const { container } = render(<BlurText text="a b c d" dimWords={[1, 3]} dimClassName="dim" />);
    const dims = [...container.querySelectorAll('[data-word]')].map((w) => w.classList.contains('dim'));
    expect(dims).toEqual([false, true, false, true]);
  });
});
