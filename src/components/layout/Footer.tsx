/**
 * Footer em três blocos: nome/título à esquerda, copyright ao centro,
 * links sociais à direita. No mobile empilha verticalmente (globals.css).
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span className="ft">Leonardo Cavalcanti · Full-Stack Developer</span>
      <span className="ft">© {year}</span>
      <div className="ft-social">
        <a href="https://github.com/LeonardoPCavalcanti" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/leonardocavalcanti-dev" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
