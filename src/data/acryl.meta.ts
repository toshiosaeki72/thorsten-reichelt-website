// Pflege hier die Angaben für Acryl-Werke, Schlüssel ist der Dateiname ohne Endung
// Beispiel: Datei "01_blue-strip.jpg" → key: "01_blue-strip"
export interface AcrylicMetaItem {
  title?: string
  technique?: string
  dimensions?: string
  year?: number
  sortOrder?: number
  description?: string
}

export const acrylicMeta: Record<string, AcrylicMetaItem> = {
  '01_pale red': { 
    title: 'pale red',
    technique: 'Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 1 
  },
  '02_dark blue': { 
    title: 'dark blue',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 2 
  },
  '03_light red': { 
    title: 'light red',
    technique: 'Acryl auf Leinwand',
    dimensions: '20 x 20 cm',
    year: 2024,
    sortOrder: 3 
  },
  '04_light blue': { 
    title: 'light blue',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 4 
  },
  '05_dark blue': { 
    title: 'dark blue/ orange',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 5 
  },
  '06_strips': { 
    title: 'strips',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 6 
  },
  '07_strips II': { 
    title: 'strips II',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 7 
  },
  '08_green strips': { 
    title: 'green strips',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 8 
  },
  '09_blue strip': { 
    title: 'blue strip',
    technique: 'Acryl auf Karton',
    dimensions: '15 x 15 cm',
    year: 2024,
    sortOrder: 9 
  },
}
