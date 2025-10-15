import { Component } from '@angular/core';

// Importa tus componentes hijos correctamente

import { Carrusel } from '../carrusel/carrusel'; 
import { HomeAgs } from '../home-ags/home-ags';
import { Ordenar } from '../ordenar/ordenar';
import { PreguntasFrecuentes } from '../preguntas-frecuentes/preguntas-frecuentes';
import { QuienesSomos } from '../quienes-somos/quienes-somos';

import { RedesSociales } from '../redes-sociales/redes-sociales';
import { Suscribirse } from '../suscribirse/suscribirse';
import { Ubicaciones } from '../ubicaciones/ubicaciones';
import { BotonWhatsapp } from '../boton-whatsapp/boton-whatsapp';
import { Gorras } from '../gorras/gorras';
import { EdadVerificacion } from '../../edad-verificacion/edad-verificacion';
import { PromoNuevo } from '../promo-nuevo/promo-nuevo';

@Component({
  selector: 'app-home',
  standalone: true,                  // IMPORTANTE: para usar imports dentro del componente
  imports: [
    Carrusel,
    HomeAgs,
    Ordenar,
    PreguntasFrecuentes,
    QuienesSomos,
    RedesSociales,
    Suscribirse,
    Ubicaciones,
    BotonWhatsapp, Gorras, EdadVerificacion, PromoNuevo
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']          // plural styleUrls
})
export class Home {}
