import type { Stat } from '../types';

// Cada número tem fonte conferível. Reconferir antes de cada publicação.
export const stats: Stat[] = [
  // Endpoint de atualização da Chrome Web Store, 14/10/2026: Shopee 2.7.4, ML 1.0.7, TikTok 1.0.3.
  { value: 3, label: { pt: 'extensões publicadas na Chrome Web Store', en: 'extensions published on the Chrome Web Store' } },
  // No ar em 14/10/2026: sellerscope.com.br, demo do Zoonoses, leoehelena.vercel.app.
  // O site novo do Conect2AI ainda não está publicado (o domínio serve o antigo).
  { value: 3, label: { pt: 'sistemas em produção que mantenho', en: 'production systems I maintain' } },
  // 10/2022 (SEEC/RN) até hoje.
  { value: 4, label: { pt: 'anos desenvolvendo e mantendo sistemas', en: 'years building and maintaining systems' } },
  // DOI 10.5753/sbseg.2026.27136
  { value: 1, label: { pt: 'artigo completo no SBSeg 2026', en: 'full paper at SBSeg 2026' } },
];
