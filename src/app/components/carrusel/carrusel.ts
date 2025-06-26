import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { CarruselImagen } from '../../interfaces/carrusel-imagen';
import { CarruselService } from '../../services/carrusel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css'
})
export class Carrusel implements OnInit {

  imagenes: CarruselImagen[] = [];

  constructor(private carruselService: CarruselService) { }

  ngOnInit(): void {
    this.imagenes = this.carruselService.getImagenes();
  }

}