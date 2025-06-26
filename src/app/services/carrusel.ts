import { Injectable } from '@angular/core';
import { CarruselImagen } from '../interfaces/carrusel-imagen';


@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private imagenes: CarruselImagen[] = [
    { src: 'https://vapematemx.com/cdn/shop/files/chris_brown.png?v=1745516506', alt: 'Producto 1', descripcion: '' },
    { src: 'https://www.vapezilla.com/cdn/shop/files/Watermelon-Ice-Lost-Angel-Pro-Max-20K.png?v=1724558396&width=900', alt: 'Producto 2', descripcion: '' },
    { src: 'https://laprincipaldelicores.com/cdn/shop/files/vap_equator_eq_30000_blue_cloud.png?v=1731086509', alt: 'Producto 3', descripcion: '' },
    { src: 'https://vapeomex.com/wp-content/uploads/2023/04/Side_e8ce2896-690d-4627-8c0f-98050b58e9d9-1.png', alt: 'Producto 4', descripcion: '' },
    { src: 'https://vapematemx.com/cdn/shop/files/rabbeat.png?v=1740179981', alt: 'Producto 5', descripcion: '' },
    { src: 'https://vapeomex.com/wp-content/uploads/2024/02/strawberrywatermelon-1.png', alt: 'Producto 6', descripcion: '' },
    { src: 'https://static.wixstatic.com/media/af7afa_6ef98c87ad4047ffa43f67e46939b848~mv2.png/v1/fit/w_500,h_500,q_90/file.png', alt: 'Producto 6', descripcion: '' }

  ];

  getImagenes() {
    return this.imagenes;
  }
}
