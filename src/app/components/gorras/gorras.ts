import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GorrasService } from '../../services/gorras';
import { Gorra } from '../../services/gorras';

@Component({
  selector: 'app-gorras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gorras.html',
  styleUrls: ['./gorras.css']
})
export class Gorras implements OnInit {
  gorras: Gorra[] = [];
  categorias: string[] = ['Barbas Hats', 'ALO', 'Goorin Bros'];
  categoriasVisibles: { [key: string]: boolean } = {};

  constructor(private gorrasService: GorrasService) {}

  ngOnInit(): void {
    this.gorras = this.gorrasService.getGorras();
    // Por defecto todas las categorías visibles
    this.categorias.forEach(cat => {
      this.categoriasVisibles[cat] = true;
    });
  }

  gorrasPorCategoria(categoria: string): Gorra[] {
    return this.gorras.filter(g => g.marca === categoria);
  }

  toggleCategoria(categoria: string): void {
    this.categoriasVisibles[categoria] = !this.categoriasVisibles[categoria];
  }
}
