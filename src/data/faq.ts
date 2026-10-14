import type { FaqItem } from '../types';

export const faq: FaqItem[] = [
  {
    q: { pt: 'Qual é a sua disponibilidade?', en: 'What is your availability?' },
    a: {
      pt: 'Me chama pelo e-mail ou pelo LinkedIn e a gente acerta horário, carga e modalidade.',
      en: 'Reach out by email or LinkedIn and we can work out schedule, hours and work arrangement.',
    },
  },
  {
    q: { pt: 'Qual é a sua formação?', en: 'What is your education?' },
    a: {
      pt: 'Bacharel em Ciência e Tecnologia pela UFRN (2024) e graduando em Engenharia de Computação na mesma universidade.',
      en: 'Bachelor of Science and Technology from UFRN (2024), currently studying Computer Engineering at the same university.',
    },
  },
  {
    q: { pt: 'Como está o seu inglês?', en: 'How is your English?' },
    a: {
      pt: 'Intermediário: leio documentação técnica com fluência e estou aperfeiçoando escrita e conversação no programa Ágora/UFRN.',
      en: 'Intermediate: I read technical documentation fluently and I am improving writing and speaking through the Ágora/UFRN program.',
    },
  },
  {
    q: { pt: 'Onde você mora?', en: 'Where are you based?' },
    a: { pt: 'Natal, Rio Grande do Norte.', en: 'Natal, Rio Grande do Norte, Brazil.' },
  },
  {
    q: { pt: 'Você já trabalhou com sistema em produção?', en: 'Have you worked on production systems?' },
    a: {
      pt: 'Sim. Mantenho o backend do SellerScope, que tem assinantes pagantes, e trabalhei dois anos na SEEC/RN do levantamento de requisitos à implantação.',
      en: 'Yes. I run the backend of SellerScope, which has paying subscribers, and spent two years at SEEC/RN taking features from requirements to deployment.',
    },
  },
];
