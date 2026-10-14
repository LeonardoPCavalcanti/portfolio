import { useCallback, useContext } from 'react';
import { LangContext } from './lang';
import type { Localized } from './types';

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useT precisa estar dentro de <LangProvider>');
  const { lang, setLang } = ctx;
  const t = useCallback(<T,>(v: Localized<T>): T => v[lang], [lang]);
  return { lang, setLang, t };
}
