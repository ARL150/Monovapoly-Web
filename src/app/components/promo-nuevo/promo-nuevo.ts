import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-nuevo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-nuevo.html',
  styleUrls: ['./promo-nuevo.css']
})
export class PromoNuevo implements OnInit {
  @ViewChild('carrusel', { static: false }) carrusel!: ElementRef<HTMLDivElement>;

  imagenes = [
    { src: 'https://photo.yupoo.com/2022cap/0ae6373a/d9470387.png', alt: 'Producto 1' },
    { src: 'https://photo.yupoo.com/2022cap/f0b95b37/71831e81.png', alt: 'Producto 2' },
    { src: 'https://photo.yupoo.com/2022cap/403e9d66/024a924f.png', alt: 'Producto 3' },
    { src: 'https://photo.yupoo.com/2022cap/92d4e6de/759a2fde.png', alt: 'Producto 4' },
    { src: 'https://photo.yupoo.com/2022cap/faf6130e/6ce6b55e.png', alt: 'Producto 5' },
    { src: 'https://photo.yupoo.com/2022cap/66843493/b5b6163c.png', alt: 'Producto 6' },
    { src: 'https://photo.yupoo.com/2022cap/606fb6ef/04e2675a.png', alt: 'Producto 7' },
    { src: 'https://photo.yupoo.com/2022cap/e3abf634/011067bc.png', alt: 'Producto 8' },
    { src: 'https://photo.yupoo.com/2022cap/a713aebb/8f00637e.jpeg', alt: 'Producto 9' },
    { src: 'https://photo.yupoo.com/2022cap/dd48af75/e05ff874.png', alt: 'Producto 10' },
    { src: 'https://photo.yupoo.com/2022cap/7adfbc73/ceff9887.png', alt: 'Producto 11' },
    { src: 'https://photo.yupoo.com/2022cap/e38c4671/4ba41d16.png', alt: 'Producto 12' },
    { src: 'https://photo.yupoo.com/2022cap/969b41ac/9c788b91.png', alt: 'Producto 13' },
    { src: 'https://photo.yupoo.com/2022cap/a2d439e2/dff97087.png', alt: 'Producto 14' },
    { src: 'https://photo.yupoo.com/2022cap/6728580a/60dc9d53.png', alt: 'Producto 15' },
    { src: 'https://photo.yupoo.com/2022cap/22cf9262/6039c92a.png', alt: 'Producto 16' },
    { src: 'https://drop-shop.mx/cdn/shop/files/DSC05663_1400x_71a9f234-b959-44ac-a423-1114c6f4386d.webp?v=1730743555', alt: 'Producto 17' },
    { src: 'https://photo.yupoo.com/2022cap/6657a42d/a0768247.jpeg', alt: 'Producto 18' }
  ];

  index = 0;

  ngOnInit(): void {}

  prev() {
    this.index = (this.index - 1 + this.imagenes.length) % this.imagenes.length;
  }

  next() {
    this.index = (this.index + 1) % this.imagenes.length;
  }

  goto(i: number) {
    this.index = i;
  }
}
