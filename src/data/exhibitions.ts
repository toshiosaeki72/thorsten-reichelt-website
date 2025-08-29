export interface Exhibition {
  id: string;
  title: string;
  year: number;
  month: string;
  location: string;
  event: string;
  description?: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: "1",
    title: "constant fear",
    year: 2023,
    month: "04",
    location: "Kunstwerk Köln (Atelier 020)",
    event: "Mülheimer Nacht"
  },
  {
    id: "2",
    title: "constant fear II",
    year: 2023,
    month: "11",
    location: "Kunstwerk Köln (Atelier 020)",
    event: "Museumsnacht"
  },
  {
    id: "3",
    title: "hungry ghost",
    year: 2024,
    month: "04",
    location: "Kunstwerk Köln (Atelier 020)",
    event: "Mülheimer Nacht"
  },
  {
    id: "4",
    title: "rebel (middleclass)",
    year: 2024,
    month: "11",
    location: "Kunstwerk Köln (Atelier 020)",
    event: "Museumsnacht"
  },
  {
    id: "5",
    title: "loveless",
    year: 2025,
    month: "04",
    location: "Kunstwerk Köln (Atelier 020)",
    event: "Mülheimer Nacht"
  }
];
