import type { Stat } from '../types';

// Cada número tem fonte conferível. Reconferir antes de cada publicação.
export const stats: Stat[] = [
  // sellerscope.com.br lista Shopee, Mercado Livre e TikTok Shop com "Instalar no Chrome";
  // conferido pelo endpoint de atualização da Chrome Web Store.
  { value: 3, label: { pt: 'extensões publicadas na Chrome Web Store', en: 'extensions published on the Chrome Web Store' } },
  // SellerScope, site do Conect2AI, Zoonoses e Leo & Helena respondendo no ar.
  { value: 4, label: { pt: 'sistemas em produção que eu mantenho', en: 'production systems I maintain' } },
  // 10/2022 (SEEC/RN) até hoje.
  { value: 4, label: { pt: 'anos desenvolvendo e mantendo sistemas', en: 'years building and maintaining systems' } },
  // DOI 10.5753/sbseg.2026.27136
  { value: 1, label: { pt: 'artigo completo no SBSeg 2026', en: 'full paper at SBSeg 2026' } },
];
