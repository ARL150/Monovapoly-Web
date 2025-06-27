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
  indiceActual: { [key: string]: number } = {}; // NUEVO

  constructor(private gorrasService: GorrasService) {}

  ngOnInit(): void {
    this.gorras = this.gorrasService.getGorras();
    this.categorias.forEach(cat => {
      this.categoriasVisibles[cat] = true;
      this.indiceActual[cat] = 0;
    });
  }

  gorrasPorCategoria(categoria: string): Gorra[] {
    return this.gorras.filter(g => g.marca === categoria);
  }

  gorraActual(categoria: string): Gorra | undefined {
    const gorras = this.gorrasPorCategoria(categoria);
    return gorras[this.indiceActual[categoria]] || undefined;
  }

  siguienteGorra(categoria: string): void {
    const gorras = this.gorrasPorCategoria(categoria);
    if (gorras.length > 0) {
      this.indiceActual[categoria] = (this.indiceActual[categoria] + 1) % gorras.length;
    }
  }

  toggleCategoria(categoria: string): void {
    this.categoriasVisibles[categoria] = !this.categoriasVisibles[categoria];
  }
}