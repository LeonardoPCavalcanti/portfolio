import { ArrowUpRight, Lock, Play } from 'lucide-react';
import { projects } from '../../data/projects';
import RevealOnScroll from '../ui/RevealOnScroll';

/**
 * Projetos como cards. Cada card traz, além de título/descrição/tags, um bloco
 * "o que se estuda aqui" (destaque em limão) — o diferencial acadêmico do
 * portfólio. Projetos com demo interativa expõem um botão "Demo ao vivo";
 * repositórios privados mostram cadeado e apontam para #contact (sem 404).
 */
export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <RevealOnScroll>
          <div className="section-head">
            <span className="eyebrow">Projetos</span>
            <h2 className="section-title">
              Conceitos que viraram <span className="serif">código rodando</span>
            </h2>
            <p className="section-lead">
              Cada projeto isola uma ideia de ciência da computação e a torna
              tangível — muitos com demonstração interativa.
            </p>
          </div>
        </RevealOnScroll>

        <div className="projects-list">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.num} delay={i * 0.05}>
              <article className="project-card">
                <span className="project-num">{project.num}</span>

                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-label">{project.label}</span>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-study">
                    <span className="tag-study">Estuda</span>
                    <p>{project.study}</p>
                  </div>

                  {project.metric && <p className="project-metric">{project.metric}</p>}

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.shot && project.demo && (
                    <a
                      className="project-shot"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir demo ao vivo de ${project.title}`}
                    >
                      <img
                        src={project.shot}
                        alt={`Captura de tela real do demo de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        width={1440}
                        height={900}
                      />
                    </a>
                  )}
                </div>

                <div className="project-actions">
                  {project.demo && (
                    <a className="proj-link" href={project.demo} target="_blank" rel="noreferrer">
                      <Play size={13} /> Demo
                    </a>
                  )}
                  {project.isPrivate ? (
                    <a
                      className="proj-link locked"
                      href={project.href}
                      title="Repositório privado — disponível sob solicitação"
                    >
                      <Lock size={13} /> Sob solicitação
                    </a>
                  ) : (
                    <a className="proj-link" href={project.href} target="_blank" rel="noreferrer">
                      <ArrowUpRight size={13} /> Código
                    </a>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
