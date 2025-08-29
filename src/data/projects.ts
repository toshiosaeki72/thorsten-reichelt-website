export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  description: string;
  images: string[];
  dimensions?: string;
  technique?: string;
  sortOrder?: number; // optional: manuelle Reihenfolge (kleiner = weiter oben)
  thumbPosition?: 'top' | 'center' | 'bottom'; // optionale Ausrichtung des Thumbnails
  thumbOffset?: string; // z.B. '20%' für vertikale Verschiebung
}

export const projects: Project[] = [
  // Alle Platzhalter entfernt - nur noch dynamisch geladene Acryl-Bilder
];
