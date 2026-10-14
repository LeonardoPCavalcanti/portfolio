import type { Paper } from '../types';

export const paper: Paper = {
  authors: 'Araújo, H.; Garcia, L.; Cavalcanti, L.; Barradas, W.; Falcão, E.; Brito, A.',
  title: 'Protegendo Modelos de IA com GPUs Confidenciais em Nuvens Não Confiáveis',
  venue: 'SBSeg 2026 · Simpósio Brasileiro de Cibersegurança',
  pages: 'p. 977-992',
  doi: '10.5753/sbseg.2026.27136',
  contribution: {
    pt: 'Minha contribuição: verificação de identidade e integridade de nós integrada ao SPIRE (SPIFFE), com atestação conjunta de CPU e GPU, emissão automática de identidades X.509 e JWT para cargas em Kubernetes e medição de desempenho da atestação em Confidential Containers com Intel TDX e NVIDIA H100.',
    en: 'My contribution: node identity and integrity verification integrated with SPIRE (SPIFFE), with joint CPU and GPU attestation, automatic X.509 and JWT identities for Kubernetes workloads, and attestation performance measurements on Confidential Containers with Intel TDX and NVIDIA H100.',
  },
};
