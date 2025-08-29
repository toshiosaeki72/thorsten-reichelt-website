import type { Project } from './projects'
import { drawingsMeta } from './zeichnungen.meta'

const modules = import.meta.glob('../assets/zeichnungen/*.{jpg,jpeg,png}', {
  eager: true,
  as: 'url',
}) as Record<string, string>

function parseFilename(path: string) {
  const file = path.split('/').pop() || ''
  const base = file.replace(/\.(jpe?g|png)$/i, '')
  return base
}

function autoTitleFrom(base: string): string {
  return base
    .replace(/[\-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export const allProjects: Project[] = Object.entries(modules).map(([path, url], index) => {
  const base = parseFilename(path)
  const meta = drawingsMeta[base] || {}
  const title = meta.title ?? autoTitleFrom(base.replace(/^(\d{1,4})[\-\_\.\s]+/, ''))
  const year = meta.year ?? new Date().getFullYear()

  return {
    id: `zeichnungen-auto-${index + 1}`,
    title,
    year,
    category: 'Zeichnung (Grafit)',
    description: meta.description ?? '',
    images: [url],
    sortOrder: meta.sortOrder,
    technique: meta.technique,
    dimensions: meta.dimensions,
    thumbPosition: meta.thumbPosition ?? 'center',
  }
})
