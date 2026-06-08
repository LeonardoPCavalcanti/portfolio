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
    items: ['Node.js', 'NestJS', 'Express', 'Spring Boot', 'Django REST', 'gRPC'],
  },
  {
    category: 'Dados & Infra',
    items: ['PostgreSQL', 'Redis', 'Docker', 'Nginx', 'GitHub Actions', 'Linux'],
  },
  {
    category: 'Teoria & CS',
    items: ['Sistemas Distribuídos', 'Compiladores', 'Computação Paralela', 'Concorrência'],
  },
  {
    category: 'Testes & Tooling',
    items: ['Pytest', 'Jest', 'Vitest', 'Postman', 'Git'],
  },
];
