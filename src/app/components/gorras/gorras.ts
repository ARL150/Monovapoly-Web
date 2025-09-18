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
  categorias: string[] = ['Barbas Hats', 'ALO', 'Goorin Bros', 'New Era G5', 'Bass Pro Shops', 'Dandy Hats G5', 'Rude Awakenings'];
  categoriaSeleccionada: string = this.categorias[0]; // Siempre hay una categoría activa

  constructor(private gorrasService: GorrasService) {}

  ngOnInit(): void {
    this.gorras = this.gorrasService.getGorras();
  }

  gorrasPorCategoria(categoria: string): Gorra[] {
    return this.gorras.filter(g => g.marca === categoria);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }
}
