/**
 * Footer com logotipo grande (Switzer + acento em serif itálico) à moda da
 * wibify, seguido por uma linha de metadados em mono: localidade, ano e links.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-mark">
        <div className="footer-logo">
          Leonardo<span className="serif"> Cavalcanti</span>
        </div>

        <div className="footer-meta">
          <span>Natal, RN · Brasil · BRT (UTC−3)</span>
          <div className="footer-social">
            <a href="https://github.com/LeonardoPCavalcanti" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/leonardocavalcanti-dev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:leopcavalcanti30@gmail.com">E-mail</a>
          </div>
          <span>© {year} · Feito com rigor</span>
        </div>
      </div>
    </footer>
  );
}
