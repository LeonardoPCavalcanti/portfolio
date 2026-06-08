/**
 * Navegação flutuante em "pílula de vidro" (backdrop-blur), centralizada no
 * topo — assinatura visual da wibify. Marca à esquerda, âncoras ao centro
 * (escondidas no mobile) e um CTA de contato à direita.
 */
export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav-pill">
        <a className="brand" href="#home" aria-label="Início">
          <span className="dot" />
          LC
        </a>

        <div className="nav-center">
          <a className="nav-link" href="#focus">
            Estudo
          </a>
          <a className="nav-link" href="#projects">
            Projetos
          </a>
          <a className="nav-link" href="#references">
            Leituras
          </a>
          <a className="nav-link" href="#about">
            Sobre
          </a>
        </div>

        <a className="nav-cta" href="#contact">
          Contato
        </a>
      </nav>
    </header>
  );
}
