import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

// jsdom não implementa matchMedia. O motion lê a preferência uma vez e depois
// só escuta mudanças; por isso o mock avisa os ouvintes, como o navegador faz.
// Nos testes, use window.__setReduceMotion(true | false).
declare global {
  interface Window {
    __reduceMotion?: boolean;
    __setReduceMotion: (v: boolean) => void;
  }
}
const listeners = new Set<() => void>();
window.__setReduceMotion = (v: boolean) => {
  window.__reduceMotion = v;
  listeners.forEach((l) => l());
};
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => {
    const isReduce = query.includes('prefers-reduced-motion');
    return {
      get matches() {
        return isReduce ? Boolean(window.__reduceMotion) : false;
      },
      media: query,
      onchange: null,
      addListener: (l: () => void) => isReduce && listeners.add(l),
      removeListener: (l: () => void) => listeners.delete(l),
      addEventListener: (_e: string, l: () => void) => isReduce && listeners.add(l),
      removeEventListener: (_e: string, l: () => void) => listeners.delete(l),
      dispatchEvent: () => false,
    };
  },
});

// motion usa IntersectionObserver em whileInView.
class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(window, 'IntersectionObserver', { writable: true, value: IO });
