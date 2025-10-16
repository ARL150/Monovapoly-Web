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
  { src: './promos/1.png', alt: 'Producto 1' },
  { src: './promos/2.png', alt: 'Producto 2' },
  { src: './promos/3.png', alt: 'Producto 3' },
  { src: './promos/4.png', alt: 'Producto 4' },
  { src: './promos/5.jpeg', alt: 'Producto 5' },
  { src: './promos/6.png', alt: 'Producto 6' },
  { src: './promos/7.png', alt: 'Producto 7' },
  { src: './promos/8.png', alt: 'Producto 8' },
  { src: './promos/9.png', alt: 'Producto 9' },
  { src: './promos/10.png', alt: 'Producto 10' },
  { src: './promos/11.png', alt: 'Producto 11' },
  { src: './promos/12.png', alt: 'Producto 12' },
  { src: './promos/13.png', alt: 'Producto 13' },
  { src: './promos/14.png', alt: 'Producto 14' },
  { src: './promos/15.png', alt: 'Producto 15' },
  { src: './promos/16.jpeg', alt: 'Producto 16' },
  { src: './promos/17.webp', alt: 'Producto 17' },
  { src: './promos/18.webp', alt: 'Producto 18' },
  { src: './promos/19.jpg', alt: 'Producto 19' },
  { src: './promos/20.webp', alt: 'Producto 20' },
  { src: './promos/21.webp', alt: 'Producto 21' },
  { src: './promos/22.jpg', alt: 'Producto 22' },
  { src: './promos/23.webp', alt: 'Producto 23' },
  { src: './promos/24.webp', alt: 'Producto 24' },
  { src: './promos/25.jpg', alt: 'Producto 25' },
  { src: './promos/26.jpeg', alt: 'Producto 26' },
  { src: './promos/27.webp', alt: 'Producto 27' },
  { src: './promos/28.webp', alt: 'Producto 28' },
  { src: './promos/29.jpeg', alt: 'Producto 29' },
  { src: './promos/30.jpeg', alt: 'Producto 30' }
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
