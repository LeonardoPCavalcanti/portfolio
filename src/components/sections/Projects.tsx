import { useState } from 'react';
import { projects } from '../../data/projects';
import RevealOnScroll from '../ui/RevealOnScroll';
import ProjectPreviewCard from '../ui/ProjectPreviewCard';

/**
 * Lista vertical de projetos. Cada item é um link com:
 *   [número] [título + descrição + tags] [seta ↗]
 *
 * Ao passar o mouse sobre um item, um card de preview (ProjectPreviewCard)
 * aparece e segue o cursor mostrando o emoji e o rótulo do projeto.
 * O índice do projeto sob o cursor é guardado em `hovered`.
 */
export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Projeto atualmente em hover (ou o primeiro, como fallback de conteúdo do card).
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
                href={project.url}
                target="_blank"
                rel="noreferrer"
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
                  </div>
                </div>
                <span className="project-arrow">↗</span>
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
