import { Injectable } from '@angular/core';
import { Sucursal } from '../interfaces/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  private sucursales: Sucursal[] = [
    {
      nombre: 'Express Universidad',
      direccion: 'Sierra Nevada 102, Los Bosques, 20120 Aguascalientes, Ags.',
      horario: '9 a.m. - 9 p.m. (Domingo cerrado)',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.4210088053565!2d-102.31662592570316!3d21.91836067996305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef2cecb55e2d%3A0x7d834e9989c8b8fc!2sMONOVAPOLY%20EXPRESS%20UNIVERSIDAD!5e0!3m2!1ses-419!2smx!4v1750901394936!5m2!1ses-419!2smx'
    },
    {
      nombre: 'Norte',
      direccion: 'Prol. Gral. Ignacio Zaragoza 205a, Jardines de la Concepción II, 20120 Aguascalientes, Ags.',
      horario: '9 a.m. - 9 p.m.',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.291207300941!2d-102.30709912570305!3d21.9233536799594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efe25b1190d7%3A0xc4baefc49d22730b!2sMonovapoly%20Norte!5e0!3m2!1ses-419!2smx!4v1750901364001!5m2!1ses-419!2smx'
    },
    {
      nombre: 'Centro',
      direccion: 'Venustiano Carranza 216, Zona Centro, 20000 Aguascalientes, Ags.',
      horario: '9 a.m. - 10 p.m. (Domingo 12 - 9 p.m.)',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.423576690973!2d-102.30361302570455!3d21.879758979991117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef6e60650189%3A0x2a5ad347ab283afb!2sMonovapoly%20Centro!5e0!3m2!1ses-419!2smx!4v1750901331487!5m2!1ses-419!2smx'
    },
    {
      nombre: 'Pocitos',
      direccion: 'Placita San José, 20126 Aguascalientes, Ags.',
      horario: '10 a.m. - 9 p.m. (Domingo cerrado)',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.5628354305527!2d-102.33189952384282!3d21.91290387996698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429effe1072a5a7%3A0x99d9ba7ec63b3b43!2sMONOVAPOLY%20POCITOS!5e0!3m2!1ses!2smx!4v1748328000776!5m2!1ses!2smx'
    },
    {
      nombre: 'Trojes',
      direccion: 'La Placita San José, Adolfo López Mateos 103, Trojes de Alonso, 20908 Aguascalientes, Ags.',
      horario: '9 a.m. - 10 p.m. (Domingo 12 - 9 p.m.)',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.8059798366403!2d-102.30325422570235!3d21.942009079945784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef0044eb5d5f%3A0x1c2ed56c6a0ba973!2sMONOVAPOLY%20Trojes!5e0!3m2!1ses-419!2smx!4v1750901295398!5m2!1ses-419!2smx'
    },
    {
      nombre: 'Canteras',
      direccion: 'Plaza la Cantera, Blvrd Juan Pablo II 1098, Canteras de San Agustín, 20218 Aguascalientes, Ags',
      horario: '9 a.m. - 10 p.m. (Domingo Cerrado)',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.8540462057986!2d-102.33831950000001!3d21.8631648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ed390a788359%3A0x9bf643849fc5e9e6!2sMonovapoly%20Canteras!5e0!3m2!1ses-419!2smx!4v1750901237435!5m2!1ses-419!2smx'
    },
    {
      nombre: 'Bonaterra',
      direccion: 'Av. José María Escrivá de Balaguer No79, Villa Bonaterra, 20296 Aguascalientes, Ags.',
      horario: '¡Abrimos todos los días de 9 a.m. a 10 p.m.!',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3703.8172442002206!2d-102.284757!3d21.825991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ5JzMzLjYiTiAxMDLCsDE3JzA1LjEiVw!5e0!3m2!1ses-419!2smx!4v1746987737925!5m2!1ses-419!2smx'
    },    
    {
      nombre: 'Farias',
      direccion: 'Valentín Gómez Farías 214, Barrio de Guadalupe, 20059 Aguascalientes, Ags.',
      horario: '¡Abrimos todos los días de 10 a.m. a 7 p.m.!',
      telefono: '449-203-0408',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.2954637109037!2d-102.29910690000001!3d21.884695300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efe55ad718d3%3A0x9de005e3e1e65ad9!2sImportaciones%20y%20Regalos%20Francia!5e0!3m2!1ses-419!2smx!4v1752350342532!5m2!1ses-419!2smx'
    },
    {
      nombre: 'León 🦁',
      direccion: 'León, Guanajuato, Gto 📍',
      horario: '✨ COMING SOON... ✨',
      telefono: '',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.446249414662!2d-101.684974!3d21.122933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b96b1f20f6c17%3A0x5f2276bd456d2c9e!2sLe%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1717999999999',
      proximamente: true
    }
  ];

  getSucursales(): Sucursal[] {
    return this.sucursales;
  }
}
