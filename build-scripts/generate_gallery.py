#!/usr/bin/env python3
import os

def main() -> None:
    files = os.listdir("images/gallerie")
    for i, f in enumerate(files):
        extra_classes = ""
        if "-bottom" in f:
            extra_classes = " gallery-image-bottom"
        elif "-top" in f:
            extra_classes = " gallery-image-top"
        print(f'  <li class="gallery-element"><img class="gallery-image{extra_classes}" loading="lazy" src="../images/gallerie/{f}" alt="Bild {i + 1}"></li>')

if __name__ == "__main__":
    main()
