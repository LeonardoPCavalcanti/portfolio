import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Ticker from '../ui/Ticker';

const EMAIL = 'leopcavalcanti30@gmail.com';

/**
 * Seção de contato:
 *   - Heading pequeno "NOW ACCEPTING INQUIRIES".
 *   - Email como link grande (mailto) com seta animada no hover.
 *   - Ticker em loop infinito com status/localização.
 *   - Links sociais (GitHub, LinkedIn).
 */
export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <RevealOnScroll>
          <p className="contact-heading">Now Accepting Inquiries</p>
          <a className="contact-email-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
            <span className="arr">
              <ArrowUpRight size={28} strokeWidth={2.2} />
            </span>
          </a>
        </RevealOnScroll>

        <Ticker />

        <RevealOnScroll>
          <div className="contact-links">
            <a className="cl" href="https://github.com/LeonardoPCavalcanti" target="_blank" rel="noreferrer">
              GitHub <span className="ext">↗</span>
            </a>
            <a
              className="cl"
              href="https://linkedin.com/in/leonardocavalcanti-dev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span className="ext">↗</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
