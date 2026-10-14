"""Gera o banner ANIMADO do perfil do GitHub (SVG 1280x640).

O GitHub mostra o SVG como <img>: sem JavaScript e sem fontes externas. Por isso
o texto vira contorno (fontTools) e a foto vai embutida em base64. As animações
são CSS dentro do SVG: o nome sobe letra por letra, a foto assenta e uma linha
de terminal "digita" três destaques em ciclo. Com prefers-reduced-motion, tudo
fica parado no estado final.

Uso (venv com fonttools e Pillow):
    python -I scripts/make-banner-svg.py <pasta-das-fontes> <saida.svg>
A pasta precisa de InterTight-500.ttf, InterTight-900.ttf e JetBrainsMono-500.ttf.
"""
import base64
import io
import sys
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from PIL import Image

W, H = 1280, 640
ORANGE = "#CC4A1C"
ROOT = Path(__file__).resolve().parent.parent

PHRASES = [
    "> co-fundador do SellerScope, SaaS em produção",
    "> 3 extensões publicadas na Chrome Web Store",
    "> artigo completo no SBSeg 2026",
]


class Font:
    def __init__(self, path: Path):
        self.f = TTFont(path)
        self.glyphs = self.f.getGlyphSet()
        self.cmap = self.f.getBestCmap()
        self.upm = self.f["head"].unitsPerEm
        self.hmtx = self.f["hmtx"]

    def glyphs_for(self, text: str, size: float, x: float, y: float, tracking: float = 0.0):
        """Devolve [(caractere, path_d, x_inicial, avanço)] com a linha de base em y."""
        scale = size / self.upm
        out = []
        for ch in text:
            name = self.cmap.get(ord(ch))
            if name is None:
                raise ValueError(f"glifo ausente para {ch!r}")
            adv = self.hmtx[name][0] * scale
            pen = SVGPathPen(self.glyphs)
            # Fonte usa y para cima; SVG usa y para baixo.
            self.glyphs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x, y)))
            out.append((ch, pen.getCommands(), x, adv))
            x += adv + tracking * size
        return out

    def width(self, text: str, size: float, tracking: float = 0.0) -> float:
        g = self.glyphs_for(text, size, 0, 0, tracking)
        return g[-1][2] + g[-1][3]


def photo_data_uri(height: int) -> tuple[str, int, int]:
    im = Image.open(ROOT / "src/assets/me/leo-1200.png").convert("RGBA")
    w = round(im.width * height / im.height)
    im = im.resize((w, height), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=82, method=6)
    return "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode(), w, height


def main(font_dir: str, out_path: str) -> None:
    d = Path(font_dir)
    black = Font(d / "InterTight-900.ttf")
    medium = Font(d / "InterTight-500.ttf")
    mono = Font(d / "JetBrainsMono-500.ttf")

    parts: list[str] = []

    # Grade 4x3 com marcas "+" nos cruzamentos internos.
    grid = []
    for i in range(1, 4):
        grid.append(f'<line x1="{W * i / 4:.0f}" y1="0" x2="{W * i / 4:.0f}" y2="{H}"/>')
    for j in range(1, 3):
        grid.append(f'<line x1="0" y1="{H * j / 3:.0f}" x2="{W}" y2="{H * j / 3:.0f}"/>')
    parts.append(f'<g class="grid" stroke="#fff" stroke-opacity=".09">{"".join(grid)}</g>')

    # Marca d'água.
    ghost_size = 190
    gw = black.width("CAVALCANTI", ghost_size, -0.055)
    ghost = black.glyphs_for("CAVALCANTI", ghost_size, (W - gw) / 2, 34 + ghost_size * 0.73, -0.055)
    parts.append('<g class="ghost" fill="#fff" fill-opacity=".12">' + "".join(f'<path d="{p}"/>' for _, p, _, _ in ghost) + "</g>")

    # Foto.
    uri, pw, ph = photo_data_uri(590)
    parts.append(f'<image class="photo" href="{uri}" x="{W - 70 - pw}" y="{H - ph}" width="{pw}" height="{ph}"/>')

    # Frase.
    role = medium.glyphs_for("Desenvolvedor full-stack · UFRN", 30, 60, 272)
    parts.append('<g class="role" fill="#fff">' + "".join(f'<path d="{p}"/>' for _, p, _, _ in role) + "</g>")

    # Linha de terminal: cada frase é revelada por um recorte que cresce em degraus (efeito de digitação).
    term_y = 438
    term = ['<g class="term" fill="#fff">']
    defs = []
    for k, text in enumerate(PHRASES):
        g = mono.glyphs_for(text, 21, 60, term_y)
        tw = g[-1][2] + g[-1][3] - 60
        defs.append(
            f'<clipPath id="t{k}"><rect class="type t{k}" x="60" y="{term_y - 24}" width="{tw + 4:.0f}" height="34" '
            f'style="--steps:{len(text)}"/></clipPath>'
        )
        term.append(
            f'<g class="phrase p{k}"><g clip-path="url(#t{k})">' + "".join(f'<path d="{p}"/>' for _, p, _, _ in g) + '</g>'
            # Cursor: anda junto com a digitação, nos mesmos degraus.
            f'<rect class="cursor c{k}" x="62" y="{term_y - 18}" width="11" height="22" fill="#fff" '
            f'style="--steps:{len(text)};--tw:{tw:.0f}px"/></g>'
        )
    term.append("</g>")
    parts.append("".join(term))

    # Nome: cada letra sobe de trás de uma máscara na linha de base.
    name_size = 158
    base = H - 44
    letters = black.glyphs_for("LEONARDO", name_size, 52, base, -0.055)
    defs.append(f'<clipPath id="nameclip"><rect x="0" y="{base - name_size}" width="{W}" height="{name_size + 4}"/></clipPath>')
    name = ['<g clip-path="url(#nameclip)" fill="#fff">']
    for i, (_, p, _, _) in enumerate(letters):
        name.append(f'<path class="l" style="animation-delay:{0.1 + i * 0.05:.2f}s" d="{p}"/>')
    name.append("</g>")
    parts.append("".join(name))

    cycle = 3 * 4.2  # cada frase fica ~4,2 s
    css = f"""
    .l {{ animation: rise .8s cubic-bezier(.16,1,.3,1) both; transform-box: fill-box; }}
    .photo {{ animation: settle 1s cubic-bezier(.16,1,.3,1) both; }}
    .ghost {{ animation: drift 1.4s cubic-bezier(.16,1,.3,1) both; }}
    .role {{ animation: fade .7s .5s cubic-bezier(.16,1,.3,1) both; }}
    .p1, .p2 {{ opacity: 0; }}
    .phrase {{ animation: show {cycle}s 1.2s infinite both; }}
    .p1 {{ animation-delay: {1.2 + cycle / 3:.1f}s; }}
    .p2 {{ animation-delay: {1.2 + 2 * cycle / 3:.1f}s; }}
    .type {{ transform-box: fill-box; transform-origin: left; animation: type {cycle}s 1.2s infinite both; }}
    .t1 {{ animation-delay: {1.2 + cycle / 3:.1f}s; }}
    .t2 {{ animation-delay: {1.2 + 2 * cycle / 3:.1f}s; }}
    .cursor {{ transform: translateX(var(--tw)); animation: caret {cycle}s 1.2s infinite both; }}
    .c1 {{ animation-delay: {1.2 + cycle / 3:.1f}s; }}
    .c2 {{ animation-delay: {1.2 + 2 * cycle / 3:.1f}s; }}
    @keyframes rise {{ from {{ transform: translateY(105%); }} to {{ transform: none; }} }}
    @keyframes settle {{ from {{ opacity: 0; transform: translateY(28px); }} to {{ opacity: 1; transform: none; }} }}
    @keyframes drift {{ from {{ opacity: 0; transform: translateX(60px); }} to {{ opacity: 1; transform: none; }} }}
    @keyframes fade {{ from {{ opacity: 0; transform: translateY(10px); }} to {{ opacity: 1; transform: none; }} }}
    @keyframes show {{ 0% {{ opacity: 0; }} 0.4% {{ opacity: 1; }} 31% {{ opacity: 1; }} 33.3% {{ opacity: 0; }} 100% {{ opacity: 0; }} }}
    @keyframes type {{ 0% {{ transform: scaleX(0); animation-timing-function: steps(var(--steps), end); }}
                       14% {{ transform: scaleX(1); }} 100% {{ transform: scaleX(1); }} }}
    @keyframes caret {{ 0% {{ transform: translateX(0); animation-timing-function: steps(var(--steps), end); }}
                        14% {{ transform: translateX(var(--tw)); }} 100% {{ transform: translateX(var(--tw)); }} }}
    @media (prefers-reduced-motion: reduce) {{
      * {{ animation: none !important; }}
      .p0 {{ opacity: 1; }}
    }}
    """

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" '
        f'aria-label="Leonardo Cavalcanti, desenvolvedor full-stack">'
        f"<style>{' '.join(css.split())}</style>"
        f"<defs>{''.join(defs)}</defs>"
        f'<rect width="{W}" height="{H}" fill="{ORANGE}"/>'
        + "".join(parts)
        + "</svg>"
    )
    Path(out_path).write_text(svg, encoding="utf-8")
    print(f"{out_path}: {len(svg) / 1024:.0f} KB")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
