import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Carrusel } from './components/carrusel/carrusel';
import { Home } from './components/home/home';
import { HomeAgs } from './components/home-ags/home-ags';
import { Ordenar } from './components/ordenar/ordenar';
import { PreguntasFrecuentes } from './components/preguntas-frecuentes/preguntas-frecuentes';
import { QuienesSomos } from './components/quienes-somos/quienes-somos';
import { RedesSociales } from './components/redes-sociales/redes-sociales';
import { Suscribirse } from './components/suscribirse/suscribirse';
import { Ubicaciones } from './components/ubicaciones/ubicaciones';
import { BotonWhatsapp } from "./components/boton-whatsapp/boton-whatsapp";

import { Logo } from './components/logo/logo';
import { Gorras } from './components/gorras/gorras';
import { SidebarComponent } from "./components/sidebar/sidebar";
import { EdadVerificacion } from './edad-verificacion/edad-verificacion';
import { ChangeDetectorRef } from '@angular/core';
import { Banner } from './components/banner/banner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Footer,
    SidebarComponent,
    BotonWhatsapp,
    Logo,
    EdadVerificacion, Banner
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  edadVerificada = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // Siempre bloquea scroll al cargar la app (porque se debe verificar)
    document.body.style.overflow = 'hidden';
  }

  handleVerificacion(valor: boolean) {
    if (valor) {
      this.edadVerificada = true;
      document.body.style.overflow = 'auto'; // desbloquea scroll
      this.cd.detectChanges();
    } else {
      window.location.href = 'https://www.google.com';
    }
  }
}

