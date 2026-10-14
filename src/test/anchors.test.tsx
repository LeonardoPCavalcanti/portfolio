import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LangProvider } from '../i18n/LangProvider';
import App from '../App';
import { NAV } from '../components/layout/Header';

describe('navegação', () => {
  it('todo link do menu aponta para uma seção que existe', () => {
    const { container } = render(
      <LangProvider>
        <App />
      </LangProvider>,
    );
    for (const n of NAV) {
      expect(container.querySelector(n.href), n.href).not.toBeNull();
    }
    expect(container.querySelector('#top')).not.toBeNull();
    expect(container.querySelector('#conteudo')).not.toBeNull();
  });
});
