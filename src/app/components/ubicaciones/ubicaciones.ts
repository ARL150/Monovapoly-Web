import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesService } from '../../services/sucursales';
import { Sucursal } from '../../interfaces/sucursal';
import { SafePipe } from '../../pipes/safe-pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ubicaciones',
  standalone: true,
  imports: [
    CommonModule,
    SafePipe
  ],
  templateUrl: './ubicaciones.html',
  styleUrls: ['./ubicaciones.css']
})

export class Ubicaciones implements OnInit {
  sucursales: Sucursal[] = [];
  sucursalesActuales: Sucursal[] = [];
  sucursalesProximas: Sucursal[] = [];

  constructor(
    private sucursalService: SucursalesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.sucursales = this.sucursalService.getSucursales();
    this.sucursalesActuales = this.sucursales.filter(s => !s.proximamente);
    this.sucursalesProximas = this.sucursales.filter(s => s.proximamente);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

