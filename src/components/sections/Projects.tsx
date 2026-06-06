import { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { projects } from '../../data/projects';
import RevealOnScroll from '../ui/RevealOnScroll';
import ProjectPreviewCard from '../ui/ProjectPreviewCard';

/**
 * Lista vertical de projetos. Cada item é um link com:
 *   [número] [título + descrição + tags] [seta ↗ ou cadeado]
 *
 * Links:
 *   - external=true  → abre o repositório ou demo em nova aba (seta).
 *   - isPrivate=true → repositório privado; aponta para #contact
 *     ("disponível sob solicitação") e exibe um cadeado em vez de seta,
 *     evitando enviar recrutadores para uma página 404.
 *
 * Ao passar o mouse sobre um item, um card de preview (ProjectPreviewCard)
 * aparece e segue o cursor mostrando o emoji e o rótulo do projeto.
 */
export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? projects[hovered] : null;

  return (
    <section id="projects">
      <div className="container">
        <RevealOnScroll>
          <div className="section-label">Projects</div>
        </RevealOnScroll>

        <div className="projects-list">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.num} delay={i * 0.06}>
              <a
                className="project-item"
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noreferrer' : undefined}
                title={
                  project.isPrivate
                    ? 'Repositório privado — disponível sob solicitação'
                    : undefined
                }
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="project-num">{project.num}</span>
                <div>
                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                    {project.isPrivate && <span className="tag">Privado · sob solicitação</span>}
                  </div>
                </div>
                <span className="project-arrow">
                  {project.isPrivate ? <Lock size={16} /> : <ArrowUpRight size={18} />}
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Card de preview que segue o cursor — montado uma vez, alterna visibilidade. */}
      <ProjectPreviewCard
        icon={active?.icon ?? ''}
        label={active?.label ?? ''}
        visible={hovered !== null}
      />
    </section>
  );
}
