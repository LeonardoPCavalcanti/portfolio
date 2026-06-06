import type { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
  {
    category: 'Linguagens',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Go', 'C/C++'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'Spring Boot', 'gRPC'],
  },
  {
    category: 'Banco de Dados',
    items: ['PostgreSQL', 'Redis (em breve)'],
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'Nginx', 'GitHub Actions', 'Vercel', 'Linux', 'Git'],
  },
  {
    category: 'Testes',
    items: ['Jest', 'Postman', 'Vitest'],
  },
];
