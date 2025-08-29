// Pflege hier die Angaben für Zeichnungen, Schlüssel ist der Dateiname ohne Endung
// Beispiel: Datei "01_studie-figur.jpg" → key: "01_studie-figur"
export interface DrawingsMetaItem {
  title?: string
  technique?: string
  dimensions?: string
  year?: number
  sortOrder?: number
  description?: string
  thumbPosition?: 'top' | 'center' | 'bottom'
}

export const drawingsMeta: Record<string, DrawingsMetaItem> = {
  // Boy with big head - aus dem Bild: Zeichnung (Grafit) auf Papier, 21 x 30 cm, 2022
  '01_boy-big head': { 
    title: 'boy-big head',
    technique: 'Zeichnung (Grafit) auf Papier',
    dimensions: '21 x 30 cm',
    year: 2022,
    sortOrder: 1,
    thumbPosition: 'top' 
  },
  
  // Haus, Junge, Wolke - hochkant, oberer Teil wichtig
  '02_Haus, Junge, Wolke': { 
    title: 'Haus, Junge, Wolke',
    technique: 'Zeichnung (Grafit) auf Karton',
    dimensions: '42 x 60 cm',
    year: 2022,
    sortOrder: 2,
    thumbPosition: 'top' 
  },
  
  // Fliege - hochkant, Mitte wichtig
  '03_Fliege': { 
    title: 'Fliege',
    technique: 'Zeichnung (Grafit) auf Karton',
    dimensions: '42 x 60 cm',
    year: 2023,
    sortOrder: 3,
    thumbPosition: 'center' 
  },
  
  // Egg man - wahrscheinlich hochformat, oberer Teil wichtig
  '04_egg man': { 
    title: 'egg man',
    technique: 'Zeichnung (Grafit) auf Karton',
    dimensions: '42 x 60 cm',
    year: 2022,
    sortOrder: 4,
    thumbPosition: 'top' 
  },
}
