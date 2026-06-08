import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const EMAIL = 'leopcavalcanti30@gmail.com';

/**
 * Chamada final de contato, centralizada: título grande com acento em serif,
 * e-mail como link mono e botões para GitHub/LinkedIn.
 */
export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <RevealOnScroll>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Vamos conversar
          </span>
          <h2 className="contact-title">
            Aberto a estágios e <span className="serif">colaborações</span>
          </h2>

          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
            <ArrowUpRight size={22} strokeWidth={2} />
          </a>

          <div className="contact-links">
            <a
              className="btn btn-out"
              href="https://github.com/LeonardoPCavalcanti"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
            <a
              className="btn btn-out"
              href="https://linkedin.com/in/leonardocavalcanti-dev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
