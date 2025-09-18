import { Injectable } from '@angular/core';

export interface Gorra {
  nombre: string;
  marca: 'Barbas Hats' | 'ALO' | 'Goorin Bros' | 'New Era G5' | 'Dandy Hats G5' | 'Bass Pro Shops' | 'Rude Awakenings';
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
      nombre: 'New Era - Gorra Chicago White Sox Chrome White and Green 9FORTY A-Frame',
      marca: 'New Era G5',
      imagen: 'https://www.neweracap.eu/cdn/shop/files/70872080_2.jpg?v=1747783017&width=1246' // ejemplo
    },
    {
      nombre: 'New Era - Los Angeles Dodgers Shohei Ohtani ',
      marca: 'New Era G5',
      imagen: 'https://www.topperzstore.mx/thumbnail/06/33/f4/1726745004/717068-new_era_new_york_yankees_9forty_snapback_NES7067_1_1920x1920.jpg?ts=1726745036' // ejemplo
    },
    {
      nombre: 'New Era - Jon Stan Los Angeles 59fifty Mlb Verde Musgo',
      marca: 'New Era G5',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_984720-MLM83289622687_032025-F.webp' // ejemplo
    }, {
      nombre: 'New Era - Jon Stan Los Angeles 59fifty Mlb Azul Claro',
      marca: 'New Era G5',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_718727-MLM84593803708_052025-F.webp' // ejemplo
    },
    {
      nombre: 'New Era - White Sox Chicago 9forty Aframe Cafe',
      marca: 'New Era G5',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_819081-MLM77741295720_072024-F-gorra-new-era-white-sox-chicago-9forty-aframe-cafe.webp' // ejemplo
    }, {
      nombre: 'New Era - Los Angeles Dodgers 59fifty Blanco/Rosa',
      marca: 'New Era G5',
      imagen: 'https://resources.sears.com.mx/medios-plazavip/t1/17236577666043505112png?scale=500&qlty=75' // ejemplo
    },
    {
      nombre: 'New Era - White Sox Chicago 9forty Aframe Cafe',
      marca: 'New Era G5',
      imagen: 'https://www.topperzstore.mx/media/c9/9b/a3/1721797039/676104-198359121474_new_era_los_angeles_dodgers_9forty_snapback_1.jpg?ts=1721797039' // ejemplo
    },
    {
      nombre: 'New Era - New York Yankees World Series 1999 Black Tiffan ',
      marca: 'New Era G5',
      imagen: 'https://www.topperzstore.mx/media/67/1c/5a/1728651148/724945-new_era_new_york_yankees_59fifty_fitted_cap_NES7340_1.jpg?ts=1728651148' // ejemplo
    },
    {
      nombre: 'New Era - Texas Rangers TETAS',
      marca: 'New Era G5',
      imagen: 'https://images.stockx.com/images/New-Era-Texas-Rangers-TETAS-New-Era-Overlap-59Fifty-Hat-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1741960117' // ejemplo
    },
    {
      nombre: 'New Era - Era Overlap 59FIFTY de los New York Mets',
      marca: 'New Era G5',
      imagen: 'https://images.footballfanatics.com/new-york-mets/mens-new-era-royal-new-york-mets-overlap-59fifty-fitted-hat_ss5_p-201924683+pv-1+u-yah6urhongqtlbyfn5bw+v-ltmwcs9mqn43vtz1ofkb.jpg?_hv=2&w=900' // ejemplo
    },
    {
      nombre: 'New Era - Boston Red Sox',
      marca: 'New Era G5',
      imagen: 'https://images.footballfanatics.com/boston-red-sox/mens-new-era-navy-boston-red-sox-game-authentic-collection-on-field-59fifty-fitted-hat_pi2659000_altimages_ff_2659230alt1_full.jpg?_hv=2&w=900' // ejemplo
    },
    {
      nombre: 'New Era - Anaheim Angels 50th Anniversary',
      marca: 'New Era G5',
      imagen: 'https://www.topperzstore.mx/media/62/69/70/1725620395/712317-new_era_los_angelese_angels_59fifty_fitted_cap_NES7106_1.jpg?ts=1725620395' // ejemplo
    },
    {
      nombre: 'New Era - Blue Jays',
      marca: 'New Era G5',
      imagen: 'https://resources.sears.com.mx/medios-plazavip/mkt/64dfc73d72e05_70367491jpg.jpg?scale=500&qlty=75' // ejemplo
    },
    {
      nombre: 'New Era - Baltimore Ravens Super Bowl X',
      marca: 'New Era G5',
      imagen: 'https://www.topperzstore.com/media/11/0f/g0/1721673530/522363-196172877776_1.jpg?ts=1721673530' // ejemplo
    },
    {
      nombre: 'New Era - Scribble Navy Cap',
      marca: 'New Era G5',
      imagen: 'https://www.neweracap.co.za/cdn/shop/products/127e5e15c3a0e708e9ac8eb9d5024726_1296x.jpg?v=1668778151' // ejemplo
    },
    {
      nombre: 'New Era - Blue Jays',
      marca: 'New Era G5',
      imagen: 'https://www.newera.mx/cdn/shop/products/9024453083166_8a5e3209-180f-4eda-b00e-b94e02c564c8_1200x1200.jpg?v=1667130279' // ejemplo
    },
    {
      nombre: 'New Era - LA ',
      marca: 'New Era G5',
      imagen: 'https://dcdn-us.mitiendanube.com/stores/001/162/180/products/d_nq_np_2x_789856-mla73259687053_122023-f-4ae86a0a2a23a12cd917023341325009-640-0.jpg' // ejemplo
    },    {
      nombre: 'New Era - Mexico',
      marca: 'New Era G5',
      imagen: 'https://www.newera.mx/cdn/shop/files/70647025_59FIFTY_LMB_MEXICO_BLK_3QL_1200x1200.png?v=1710532671' // ejemplo
    },
    {
      nombre: 'New Era - Blue Jays Cluster',
      marca: 'New Era G5',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_833905-MLM76494866280_052024-O-gorra-new-era-toronto-blue-jays-cluster-edition-mlb-59fifty.webp' // ejemplo
    },


    // Dandy Hats G5
    {
      nombre: 'Dandy Hats G5 x Junior H "Sad Boys"',
      marca: 'Dandy Hats G5',
      imagen: 'https://capcorp.mx/cdn/shop/files/DSC08626-Edit_1600x_jpg.webp?v=1738011287&width=750'
    },
    {
      nombre: 'Dandy Hats G5 x Junior H "Clave Ali',
      marca: 'Dandy Hats G5',
      imagen: 'https://wewardoble.com/cdn/shop/files/claveali1.png?v=1742338829'
    },
    {
      nombre: 'Dandy Hats G5 Fuerza Regida',
      marca: 'Dandy Hats G5',
      imagen: 'https://topcapz.com/cdn/shop/files/75D48C62-9F48-43B2-B129-515F8C83B56B_webp.jpg?v=1733340890'
    }, {
      nombre: 'Dandy Hats G5 Fuerza Regida',
      marca: 'Dandy Hats G5',
      imagen: 'https://drop-shop.mx/cdn/shop/files/DSC05704-Edit_1400x_0c0ef6f9-6f9e-4a51-9d66-73557a62e2a9.webp?v=1730742806s'
    }, {
      nombre: 'Dandy Hats New York Skeleton',
      marca: 'Dandy Hats G5',
      imagen: 'https://drop-shop.mx/cdn/shop/files/9d77fe_daf4114322494bc997dcd5cc58bd37a0_mv2.webp?v=1719284033'
    },

    // Bass Pro Shops
    {
      nombre: 'Bass Pro Shops Naranja',
      marca: 'Bass Pro Shops',
      imagen: 'https://2cap.com.mx/media/catalog/product/cache/2014f18adfcc3a9efeaf2319d7d88f55/8/8/885792804124-1.jpg'
    },
    {
      nombre: 'Bass Pro Shops Gris',
      marca: 'Bass Pro Shops',
      imagen: 'https://2cap.com.mx/media/catalog/product/cache/2014f18adfcc3a9efeaf2319d7d88f55/8/8/885792455739-2_2_.jpg'
    },
    // rude awakenings
    {
      nombre: 'Rude Awakenings LALALA',
      marca: 'Rude Awakenings',
      imagen: 'https://capcorp.mx/cdn/shop/files/RUDE7.2000.1.jpg?v=1736192931'
    },


  ];

  getGorras(): Gorra[] {
    return this.gorras;
  }
}
