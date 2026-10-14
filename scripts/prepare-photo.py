"""Recorta o fundo da foto e exporta os tamanhos usados no site.

Uso (fora do build, com um venv que tenha rembg e Pillow):
    python -I scripts/prepare-photo.py <foto-original.jpg> src/assets/me

O original nunca entra no repositório; só os recortes otimizados.
"""
import sys
from pathlib import Path

from PIL import Image
from rembg import new_session, remove


def main(src: str, out_dir: str) -> None:
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    cut = remove(Image.open(src), session=new_session("birefnet-portrait")).convert("RGBA")

    bbox = cut.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    cut = cut.crop(bbox)

    h = 1200
    big = cut.resize((round(cut.width * h / cut.height), h), Image.LANCZOS)
    big.save(out / "leo-1200.webp", "WEBP", quality=86, method=6)
    big.save(out / "leo-1200.png", optimize=True)

    # Miniatura do cartão "Vamos conversar": rosto, quadrada.
    face = cut.crop((int(cut.width * 0.18), 0, int(cut.width * 0.82), int(cut.width * 0.64)))
    face.resize((160, 160), Image.LANCZOS).save(out / "leo-thumb.webp", "WEBP", quality=86)

    print(big.size, "->", out)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
