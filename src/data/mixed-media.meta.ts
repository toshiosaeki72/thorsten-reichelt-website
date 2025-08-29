// Pflege hier die Angaben für Mixed-Media/Collagen-Werke, Schlüssel ist der Dateiname ohne Endung
// Beispiel: Datei "01_urbane-fragmente.jpg" → key: "01_urbane-fragmente"
export interface MixedMediaMetaItem {
  title?: string
  technique?: string
  dimensions?: string
  year?: number
  sortOrder?: number
  description?: string
  thumbPosition?: 'top' | 'center' | 'bottom' // steuert den sichtbaren Bildausschnitt im Quadrat
  thumbOffset?: string // z.B. '20%' für vertikale Verschiebung
}

export const mixedMediaMeta: Record<string, MixedMediaMetaItem> = {
  
  // Bild 1 - Middle Class Man
  '01_middle-class man': { 
    title: 'middle-class man',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '15 x 21 cm',
    year: 2024,
    sortOrder: 1,
    thumbPosition: 'center' 
  },
  
  // Bild 2 - Near
  '02_near': { 
    title: 'near',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '20 x 20 cm',
    year: 2023,
    sortOrder: 2,
    thumbPosition: 'center' 
  },
  
  // Bild 3 - Orange
  '03_orange': { 
    title: 'orange',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 3,
    thumbPosition: 'center' 
  },
  
  // Bild 4 - Pale Green
  '04_pale green': { 
    title: 'pale green',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 4,
    thumbPosition: 'center' 
  },
  
  // Bild 5 - Red, Black
  '05_red, black': { 
    title: 'red, black',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '30 x 42 cm',
    year: 2023,
    sortOrder: 5,
    thumbPosition: 'center' 
  },
  
  // Reporter - weiter nach unten
  '06_reporter': { 
    title: 'reporter',
    technique: 'Mixed Media/Collage/Acryl auf Karton',
    dimensions: '30 x 42 cm',
    year: 2024,
    sortOrder: 6,
    thumbPosition: 'bottom' 
  },
  
  // Bowie - weiter nach oben
  '07_bowie': { 
    title: 'bowie',
    technique: 'Mixed Media, Acryl auf Karton',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 7,
    thumbPosition: 'bottom' 
  },
  
  // Bild 8 - Butterfly
  '08_butterfly': { 
    title: 'butterfly',
    technique: 'Mixed Media/Collage auf Leinwand',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 8,
    thumbPosition: 'center' 
  },
  
  // Bild 9 - Look
  '09_look': { 
    title: 'look',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 9,
    thumbPosition: 'center' 
  },
  
  // Bild 10 - Frog
  '10_frog': { 
    title: 'frog',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 10,
    thumbPosition: 'center' 
  },
  
  // Bild 11 - Ice
  '11_ice': { 
    title: 'ice',
    technique: 'Mixed Media/Collage auf Leinwand',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 11,
    thumbPosition: 'center' 
  },
  
  // Bild 12 - Kurt
  '12_kurt': { 
    title: 'kurt',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 12,
    thumbPosition: 'center' 
  },
  
  // Astro Man - weiter nach unten
  '13_astroman': { 
    title: 'astroman',
    technique: 'Mixed Media/Collage auf Papier',
    dimensions: '15 x 21 cm',
    year: 2024,
    sortOrder: 13,
    thumbPosition: 'top' 
  },
  
  // Bild 14 - Black Face Finger
  '14_black face finger': { 
    title: 'black face finger',
    technique: 'Mixed Media/Collage, Spray, Acryl auf Karton',
    dimensions: '20 x 20 cm',
    year: 2023,
    sortOrder: 14,
    thumbPosition: 'center' 
  },
  
  // Bild 15 - Centrum
  '15_centrum': { 
    title: 'centrum',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 15,
    thumbPosition: 'center' 
  },
  
  // Dance - weiter nach oben
  '16_dance': { 
    title: 'dance',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 16,
    thumbPosition: 'bottom' 
  },
  
  // Bild 17 - Earth Visit
  '17_earth visit': { 
    title: 'earth visit',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '15 x 21 cm',
    year: 2024,
    sortOrder: 17,
    thumbPosition: 'center' 
  },
  
  // Bild 18 - Control
  '18_control': { 
    title: 'control',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 18,
    thumbPosition: 'center' 
  },
  
  // Bild 19 - Deal
  '19_deal': { 
    title: 'deal',
    technique: 'Collage Acryl auf Karton',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 19,
    thumbPosition: 'center' 
  },
  
  // Sweet Aliens - weiter nach oben
  '20_sweet aliens': { 
    title: 'sweet aliens',
    technique: 'Mixed Media, Acryl auf Papier',
    dimensions: '15 x 21 cm',
    year: 2023,
    sortOrder: 20,
    thumbPosition: 'center' 
  },
  
  // Spaceman - weiter nach unten
  '21_spaceman': { 
    title: 'spaceman',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '15 x 21 cm',
    year: 2023,
    sortOrder: 21,
    thumbPosition: 'top' 
  },
  
  // 4-Tree-Glass-Man - weiter nach unten
  '22_4 tree, glass, man': { 
    title: '4 tree, glass, man',
    technique: 'Mixed Media/Collage',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 22,
    thumbPosition: 'top' 
  },
  
  // Bild 23 - Horse
  '23_horse': { 
    title: 'horse',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 23,
    thumbPosition: 'center' 
  },
  
  // Bild 24 - Green Left
  '24_green left': { 
    title: 'green left',
    technique: 'Mixed Media/Collage auf Karton',
    dimensions: '21 x 30 cm',
    year: 2025,
    sortOrder: 24,
    thumbPosition: 'center' 
  },
  
  // Bild 25 - Look Up
  '25_look up': { 
    title: 'look up',
    technique: 'Mixed Media, Acryl auf Papier',
    dimensions: '21 x 30 cm',
    year: 2024,
    sortOrder: 25,
    thumbPosition: 'center' 
  },
  
  // Stations - weiter nach unten
  '26_stations': { 
    title: 'stations',
    technique: 'Collage/Acryl auf Karton',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 26,
    thumbPosition: 'bottom' 
  },
  
  // Bild 27 - Red Scream
  '27_red scream': { 
    title: 'red scream',
    technique: 'Mixed Media/Collage/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 27,
    thumbPosition: 'center' 
  },
  
  // Bild 28 - Golden Smog
  '28_golden smog': { 
    title: 'golden smog',
    technique: 'Mixed Media, Acryl auf Karton',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 28,
    thumbPosition: 'center' 
  },
  
  // Bild 29 - Pudel
  '29_pudel': { 
    title: 'pudel',
    technique: 'Collage/Spray/Acryl auf Karton',
    dimensions: '21 x 30 cm',
    year: 2023,
    sortOrder: 29,
    thumbPosition: 'center' 
  },
  
  // Bild 30 - Street Fight
  '30_street-fight': { 
    title: 'street-fight',
    technique: 'Mixed Media/Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 30,
    thumbPosition: 'center' 
  },
  
  // Bild 31 - Spaceship
  '31_spaceship': { 
    title: 'spaceship',
    technique: 'Mixed Media/Collage/Acryl auf Karton',
    dimensions: '21 x 30 cm',
    year: 2024,
    sortOrder: 31,
    thumbPosition: 'center' 
  },
  
  // Bild 32 - 7 Steps
  '32_7 steps': { 
    title: '7 steps',
    technique: 'Mixed Media/Collage, Druck auf Leinwand',
    dimensions: '30 x 40 cm',
    year: 2024,
    sortOrder: 32,
    thumbPosition: 'center' 
  },
  
  // Eyes
  '33_eyes': { 
    title: 'eyes',
    technique: 'Mixed Media, Acryl auf Karton',
    dimensions: '30 x 40 cm',
    year: 2023,
    sortOrder: 33,
    thumbPosition: 'bottom' 
  },
}
