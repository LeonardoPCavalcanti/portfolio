/**
 * Header fixo, transparente, em três blocos:
 *   [Projects · About]   [LC]   [Skills · Contact]
 *
 * Todos os links são âncoras de scroll suave (o `scroll-behavior: smooth`
 * global cuida da animação). O logo central "LC" leva ao topo.
 */
export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#about">
          About
        </a>
      </nav>

      <a className="logo" href="#home" aria-label="Início">
        LC
      </a>

      <nav className="site-nav">
        <a className="nav-link" href="#skills">
          Skills
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
