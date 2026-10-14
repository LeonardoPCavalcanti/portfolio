import { describe, it, expect } from 'vitest';
import { featured, others } from '../data/projects';
import { primaryStack, secondaryStack } from '../data/stack';
import { paper } from '../data/research';
import { experience } from '../data/experience';
import { faq } from '../data/faq';
import { stats } from '../data/stats';
import { profile } from '../data/profile';
import { ui } from '../i18n/ui';

/** Percorre qualquer estrutura e devolve todo objeto com chaves exatamente {pt, en}. */
function collectLocalized(node: unknown, path = 'root', out: Array<[string, Record<string, unknown>]> = []) {
  if (node && typeof node === 'object') {
    const keys = Object.keys(node as object).sort();
    if (keys.length === 2 && keys[0] === 'en' && keys[1] === 'pt') {
      out.push([path, node as Record<string, unknown>]);
      return out;
    }
    for (const [k, v] of Object.entries(node as object)) collectLocalized(v, `${path}.${k}`, out);
  }
  return out;
}

const all = { featured, others, primaryStack, secondaryStack, paper, experience, faq, stats, profile, ui };

describe('conteúdo bilíngue', () => {
  const pairs = collectLocalized(all);

  it('existe conteúdo localizado para conferir', () => {
    expect(pairs.length).toBeGreaterThan(40);
  });

  it.each(pairs)('%s tem pt e en não vazios', (_path, v) => {
    for (const lang of ['pt', 'en'] as const) {
      const value = v[lang];
      const text = typeof value === 'string' ? value : JSON.stringify(value);
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  it.each(pairs)('%s não tem travessão no meio de frase', (_path, v) => {
    expect(String(v.pt)).not.toMatch(/—/);
    expect(String(v.en)).not.toMatch(/—/);
  });
});

describe('stack com evidência', () => {
  const ids = new Set([...featured, ...others].map((p) => p.id));
  const stack = [...primaryStack, ...secondaryStack];
  const label = (s: (typeof stack)[number]) => (typeof s.name === 'string' ? s.name : s.name.pt);

  it('lista enxuta: 5 principais e 5 secundárias', () => {
    expect(primaryStack).toHaveLength(5);
    expect(secondaryStack).toHaveLength(5);
  });

  it.each(stack.map((s) => [label(s), s.usedIn] as const))('%s aponta para projetos que existem', (_n, usedIn) => {
    expect(usedIn.length).toBeGreaterThan(0);
    for (const id of usedIn) expect(id === 'research' || ids.has(id)).toBe(true);
  });
});

describe('projetos', () => {
  it('5 em destaque numerados 001 a 005', () => {
    expect(featured.map((p) => p.num)).toEqual(['001', '002', '003', '004', '005']);
  });

  it('ids únicos', () => {
    const list = [...featured, ...others].map((p) => p.id);
    expect(new Set(list).size).toBe(list.length);
  });

  it.each(featured.map((p) => [p.name, p] as const))('%s tem link público ou está marcado como privado', (_n, p) => {
    const hasLink = Boolean(p.links.site || p.links.demo || p.links.code);
    expect(hasLink || p.private === true).toBe(true);
  });

  it.each(featured.map((p) => [p.name, p] as const))('%s tem print ou ilustração', (_n, p) => {
    expect(Boolean(p.shot) || Boolean(p.illustration)).toBe(true);
  });
});
