import type { ExperienceItem } from '../types';

// O período do SellerScope fica "atual" até o mês de início ser confirmado.
export const experience: ExperienceItem[] = [
  {
    period: { pt: '08/2026 – atual', en: '08/2026 – present' },
    org: 'Edge4AI · Conect2AI/DCA/UFRN',
    role: { pt: 'Bolsista de iniciação científica (CNPq)', en: 'Undergraduate research fellow (CNPq)' },
    tag: { pt: 'IA na borda', en: 'Edge AI' },
    current: true,
  },
  {
    period: { pt: 'atual', en: 'present' },
    org: 'SellerScope',
    role: { pt: 'Co-fundador · backend', en: 'Co-founder · backend' },
    tag: { pt: 'SaaS', en: 'SaaS' },
    current: true,
  },
  {
    period: { pt: '10/2024 – atual', en: '10/2024 – present' },
    org: 'Gerência de Redes · CCHLA/UFRN',
    role: { pt: 'Bolsista em infraestrutura e dados', en: 'Infrastructure and data fellow' },
    tag: { pt: 'Linux · Docker', en: 'Linux · Docker' },
    current: true,
  },
  {
    period: { pt: '01/2026 – 05/2026', en: '01/2026 – 05/2026' },
    org: 'ConfIoTA · IMD/UFRN',
    role: { pt: 'Bolsista de iniciação científica', en: 'Undergraduate research fellow' },
    tag: { pt: 'SBSeg 2026', en: 'SBSeg 2026' },
    current: false,
  },
  {
    period: { pt: '10/2022 – 10/2024', en: '10/2022 – 10/2024' },
    org: 'GPD · SEEC/RN',
    role: { pt: 'Estagiário em desenvolvimento', en: 'Software development intern' },
    tag: { pt: 'Node · React', en: 'Node · React' },
    current: false,
  },
];
