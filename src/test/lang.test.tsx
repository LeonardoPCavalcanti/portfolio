import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LangProvider } from '../i18n/LangProvider';
import { resolveInitialLang } from '../i18n/lang';
import { useT } from '../i18n/useT';

describe('resolveInitialLang', () => {
  it('usa ?lang=en quando presente', () => {
    expect(resolveInitialLang('?lang=en', null, 'pt-BR')).toBe('en');
  });
  it('sem parâmetro e navegador PT, fica em pt', () => {
    expect(resolveInitialLang('', null, 'pt-BR')).toBe('pt');
  });
  it('sem parâmetro e navegador EN, vai para en', () => {
    expect(resolveInitialLang('', null, 'en-US')).toBe('en');
  });
  it('escolha salva vence o navegador', () => {
    expect(resolveInitialLang('', 'pt', 'en-US')).toBe('pt');
  });
  it('?lang= inválido ou vazio cai no padrão sem quebrar', () => {
    expect(resolveInitialLang('?lang=fr', null, 'pt-BR')).toBe('pt');
    expect(resolveInitialLang('?lang=', null, 'pt-BR')).toBe('pt');
    expect(resolveInitialLang('?lang=fr', 'xx', 'de-DE')).toBe('pt');
  });
});

function Probe() {
  const { lang, setLang, t } = useT();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="txt">{t({ pt: 'Olá', en: 'Hello' })}</span>
      <button onClick={() => setLang('en')}>en</button>
    </div>
  );
}

describe('LangProvider', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/portfolio/?lang=pt');
    document.documentElement.lang = '';
  });

  it('troca idioma, texto e <html lang>', () => {
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'en' }));
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('txt')).toHaveTextContent('Hello');
    expect(document.documentElement.lang).toBe('en');
  });

  it('continua funcionando quando localStorage lança exceção', () => {
    const get = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'en' }));
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    get.mockRestore();
    set.mockRestore();
  });
});
