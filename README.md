# Thorsten Reichelt - Künstler Portfolio

Eine elegante Portfolio-Webseite für den Künstler Thorsten Reichelt aus Köln, inspiriert vom Design der PJ Harvey Website.

## Features

- **Elegantes Design**: Schlicht und klar im Stil der PJ Harvey Website
- **Responsive Layout**: Funktioniert auf allen Geräten
- **Hash-Routing**: Navigation über URL-Hashes (`#works`, `#exhibitions`, etc.)
- **Sidebar-Navigation**: Dauerhaft sichtbares linkes Menü
- **Kategorie-Filterung**: Filterbare Werke nach Technik/Kategorie
- **Jahres-Filterung**: Ausstellungen nach Jahr filterbar
- **Lightbox**: Detailansicht für Kunstwerke
- **Kontaktformular**: Funktionales Kontaktformular
- **Breadcrumb-Navigation**: Klare Orientierung

## Technologien

- **React 18** mit TypeScript
- **Vite** als Build-Tool
- **TailwindCSS** für Styling
- **Hash-Routing** (ohne react-router)

## Installation

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Browser öffnen:**
   Die Anwendung läuft unter ` du diese`

## Projektstruktur

```
src/
├── components/          # React-Komponenten
│   ├── Sidebar.tsx     # Linke Navigation
│   ├── Breadcrumb.tsx  # Breadcrumb-Navigation
│   ├── Lightbox.tsx    # Bild-Detailansicht
│   ├── ProjectCard.tsx # Kunstwerk-Karte
│   └── CategoryNav.tsx # Kategorie-Filterung
├── data/               # Daten-Dateien
│   ├── artist.ts       # Künstler-Informationen
│   ├── projects.ts     # Kunstwerke
│   └── exhibitions.ts  # Ausstellungen
├── pages/              # Seiten-Komponenten
│   ├── Home.tsx        # Startseite
│   ├── News.tsx        # News
│   ├── Works.tsx       # Arbeiten
│   ├── Exhibitions.tsx # Ausstellungen
│   ├── Studio.tsx      # Atelier
│   ├── Visit.tsx       # Besichtigung
│   └── Contact.tsx     # Kontakt
├── App.tsx             # Haupt-App-Komponente
├── main.tsx            # Einstiegspunkt
└── index.css           # Globale Styles
```

## Seiten

### Home
- Drei Startbilder nebeneinander
- Klick führt zur Arbeiten-Seite

### News
- Aktuelle Informationen und Updates

### Arbeiten
- Kategorie-Navigation (Alle • Mixed Media • Collage • etc.)
- Grid mit Kunstwerken
- Lightbox für Details

### Ausstellungen
- Liste aller Ausstellungen
- Filterbar nach Jahr (über Sidebar)

### Atelier
- Informationen zum Arbeitsraum

### Infos / Besichtigung
- Terminabsprache und Öffnungszeiten

### Kontakt
- Kontaktformular
- Kontaktdaten

## Design-Prinzipien

- **Typografie**: Serif (Georgia) für Titel, Sans-Serif (Inter) für Text
- **Letter-Spacing**: Weite Abstände für elegante Wirkung
- **Uppercase**: Titel in Großbuchstaben
- **Schlichtheit**: Viel Weißraum, klare Strukturen
- **Kontrast**: Schwarz/Weiß mit subtilen Grautönen

## Anpassungen

### Daten bearbeiten
- `src/data/artist.ts`: Künstler-Informationen
- `src/data/projects.ts`: Kunstwerke hinzufügen/bearbeiten
- `src/data/exhibitions.ts`: Ausstellungen verwalten

### Styling anpassen
- `src/index.css`: Globale Styles und Tailwind-Klassen
- `tailwind.config.js`: Tailwind-Konfiguration

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Lizenz

© 2024 Thorsten Reichelt. Alle Rechte vorbehalten.
