import { Injectable } from '@angular/core';

export interface Gorra {
  nombre: string;
  marca: 'Barbas Hats' | 'ALO' | 'Goorin Bros' | 'New Era';
  imagen: string;
}


@Injectable({
  providedIn: 'root'
})
export class GorrasService {
  private gorras: Gorra[] = [
    // ALO (sin cambios)
    {
      nombre: 'ALO Black & White',
      marca: 'ALO',
      imagen: 'https://aloyoga.com.mx/cdn/shop/products/A0195U_01_b1_a2_b309c1c0-fdad-4f22-b9ec-331f05169141.jpg?v=1693850173'
    },
    {
      nombre: 'ALO Azul ',
      marca: 'ALO',
      imagen: 'https://aloyoga.com.mx/cdn/shop/files/A0647U_05442_b1_s1_a2_1_750x_11af65ae-2750-4f35-9dcf-c90654d869a0.webp?v=1750117773&width=750'
    },
    {
      nombre: 'ALO White & Black',
      marca: 'ALO',
      imagen: 'https://aloyoga.com.mx/cdn/shop/files/A0007U_0001_b1_a2_750x_e476b03c-54e8-4cd8-828a-8a9492828510.webp?v=1694532677&width=750'
    },

    // Barbas Hats (más modelos)
    {
      nombre: 'Gorra Barbas Hats x Rich The Kid - Chrome I BLACKOUT',
      marca: 'Barbas Hats',
      imagen: 'https://drop-shop.mx/cdn/shop/files/55f19ebe-b37c-4409-bedb-32662b357186.jpg?v=1745691126&width=1346'
    },
    {
      nombre: 'Gorra Barbas Hats x Rich The Kid - Rich Forever',
      marca: 'Barbas Hats',
      imagen: 'https://drop-shop.mx/cdn/shop/files/8d8d0df2-5551-41a9-9da1-d6dbe700a949.jpg?v=1745518398&width=1346'
    },
    {
      nombre: 'Gorra Barbas Hats x Rich The Kid - Rich Stars',
      marca: 'Barbas Hats',
      imagen: 'https://drop-shop.mx/cdn/shop/files/2a391fd3-756e-4744-a26f-ace4b4ab877d.jpg?v=1745518308&width=1346'
    },
    {
      nombre: 'Gorra Barbas Hats x Rich The Kid - Skate or Die',
      marca: 'Barbas Hats',
      imagen: 'https://drop-shop.mx/cdn/shop/files/3f248418-70f5-41a6-b884-90a55c4d0fba.jpg?v=1745518110&width=1346'
    },
    {
      nombre: 'Barbas Hats B*ANGING B*TCHES (',
      marca: 'Barbas Hats',
      imagen: 'https://www.hatsmexico.store/cdn/shop/files/04C4FE4E-428B-4423-9A4B-883109D51245.webp?v=1734504563&width=1646' // ejemplo
    },
    {
      nombre: 'Barbas Hats BEAR SCOTT',
      marca: 'Barbas Hats',
      imagen: 'https://www.hatsmexico.store/cdn/shop/files/AA286CC0-E540-4805-9967-E945B57C1E64.webp?v=1734504882&width=1646' // ejemplo
    },

    // Goorin Bros (más modelos)
    {
      nombre: 'Goorin Panther',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.com/cdn/shop/files/101-0381-YA-BLK-F01.jpg?v=1704847095'
    },
    {
      nombre: 'Goorin Lion Heart',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.com/cdn/shop/files/101-1570-CRE-F01.jpg?v=1731336621'
    },
    {
      nombre: 'Goorin Wolf Pack',
      marca: 'Goorin Bros',
      imagen: 'https://cdn.shopify.com/s/files/1/2532/9670/files/101-1369-NVY-U01.jpg?v=1706732708'
    },
    {
      nombre: 'Goorin The Rooster',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.com/cdn/shop/files/101-0378-YA-BLK-F01.jpg?v=1689190104'
    },
    {
      nombre: 'Goorin Black Sheep',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.com/cdn/shop/products/101-0380-YA-BLK-F01.jpg?v=1674235178'
    },
    {
      nombre: 'Goorin The Goat',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.mx/cdn/shop/products/101-0385-CHA-F01.jpg?v=1672857824'
    },
    {
      nombre: 'Goorin Gran Rojo',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.com/cdn/shop/products/101-0751-RED-F01.jpg?v=1663718409'
    },
    {
      nombre: 'Goorin Tiger Claw',
      marca: 'Goorin Bros',
      imagen: 'https://goorin.com/cdn/shop/files/101-1986-ORA-F01.jpg?v=1732225022'
    },
    {
      nombre: 'Goorin Arctic Fox',
      marca: 'Goorin Bros',
      imagen: 'https://hatstore.imgix.net/HS1008286_1.jpg' // ejemplo
    },
    {
      nombre: 'Goorin Red Hawk',
      marca: 'Goorin Bros',
      imagen: 'https://goorinshop.eu/cdn/shop/files/101-1932-RED-L01.jpg?v=1741267702&width=1946' // ejemplo
    },

    // New Era (nueva marca)
    {
      nombre: 'New Era Los Angeles Dodgers',
      marca: 'New Era',
      imagen: 'https://www.newera.mx/cdn/shop/files/60435006_W9FORTYAF_WMN_MLB_LOADOD_BL_3QL_1296x.png?v=1715030179' // ejemplo
    },
    {
      nombre: 'New Era New York Yankees MLB Floral 9FORTY',
      marca: 'New Era',
      imagen: 'https://www.newera.mx/cdn/shop/files/60667540_9FORTYAF_MLB_NEYYAN_CHRM_3QL_1296x.jpg?v=1746175212' // ejemplo
    },
    {
      nombre: 'New Era Golden State Warriors',
      marca: 'New Era',
      imagen: 'https://www.newera.mx/cdn/shop/files/60673616_9FORTYMCAF_NBA25CWDRFT940MCAF_GOLWAR_OTC_3QR_1296x.png?v=1749051807' // ejemplo
    },
    {
      nombre: 'New Era New York Mets MLB Chrome Arch ',
      marca: 'New Era',
      imagen: 'https://www.newera.mx/cdn/shop/files/60604781_9FORTYMC_20AF_20TRUCKER_9FORTYMCAFCHROME22957_NEYMET_OTC_3QL_1296x.png?v=1744344051' // ejemplo
    }
  ];

  getGorras(): Gorra[] {
    return this.gorras;
  }
}
