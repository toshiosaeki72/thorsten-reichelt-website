export interface Artist {
  name: string;
  email: string;
  phone: string;
  address: string;
  categories: string[];
  socials: {
    instagram?: string;
    website?: string;
  };
  startImages: string[];
}

export const artist: Artist = {
  name: "Thorsten Reichelt",
  email: "thorsten.reichelt@example.com",
  phone: "+49 221 123 456",
  address: "Atelier Thorsten Reichelt\nKölner Straße 123\n50667 Köln\nDeutschland",
  categories: [
    "Alle",
    "Abstrakte Acrylarbeiten",
    "Mixed-Media/Collagen",
    "Zeichnungen"
  ],
  socials: {
    instagram: "https://instagram.com/thorstenreichelt",
    website: "https://thorstenreichelt.de"
  },
  startImages: [
    "./images/start-1.jpg",
    "./images/start-2.jpg", 
    "./images/start-3.jpg"
  ]
};
