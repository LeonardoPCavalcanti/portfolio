import { createContext } from 'react';
import type { Lang } from './types';

const STORAGE_KEY = 'lang';

function isLang(v: string | null | undefined): v is Lang {
  return v === 'pt' || v === 'en';
}

/**
 * Ordem de decisão: ?lang= na URL > escolha salva > idioma do navegador.
 * Qualquer valor desconhecido cai no português.
 */
export function resolveInitialLang(search: string, stored: string | null, navigatorLang: string): Lang {
  const fromUrl = new URLSearchParams(search).get('lang');
  if (isLang(fromUrl)) return fromUrl;
  if (isLang(stored)) return stored;
  return navigatorLang.toLowerCase().startsWith('en') ? 'en' : 'pt';
}

export function readStored(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function writeStored(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Sem armazenamento (aba anônima, bloqueio): o idioma vale só nesta visita.
  }
}

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangContextValue | null>(null);
