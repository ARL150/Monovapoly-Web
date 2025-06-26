import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Carrusel, Home, HomeAgs,SidebarComponent, Ordenar, Navbar, PreguntasFrecuentes, QuienesSomos, RedesSociales, Suscribirse, Ubicaciones, BotonWhatsapp, Logo, Gorras, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Monovapoly-Web';
}
