import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { PreguntasFrecuentes } from './components/preguntas-frecuentes/preguntas-frecuentes';
import { Ubicaciones } from './components/ubicaciones/ubicaciones';
import { ServicioDomicilio } from './components/servicio-domicilio/servicio-domicilio';
import { QuienesSomos } from './components/quienes-somos/quienes-somos';
import { Ordenar } from './components/ordenar/ordenar';
import { RedesSociales } from './components/redes-sociales/redes-sociales';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'servicio-domicilio', component: Ordenar },
  { path: 'redes-sociales', component: RedesSociales },
   { path: 'ubicaciones', component: Ubicaciones },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentes },
  { path: '**', redirectTo: '', pathMatch: 'full' }   // redirige rutas no definidas a home
];
