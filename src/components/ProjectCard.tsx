import { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
}

const positionClass = (pos?: 'top' | 'center' | 'bottom') => {
  switch (pos) {
    case 'top':
      return 'object-top'
    case 'bottom':
      return 'object-bottom'
    default:
      return 'object-center'
  }
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const subtitle = [project.technique, project.dimensions]
    .filter(Boolean)
    .join(', ')
  const fallbackSubtitle = project.description || ''

  // thumbOffset: z.B. '20%' für object-position: 50% 20%
  const objectPosition = project.thumbOffset
    ? `50% ${project.thumbOffset}`
    : undefined

  // Aspect ratio basierend auf Kategorie
  const getAspectRatio = () => {
    if (project.category === 'Zeichnung (Grafit)') {
      return 'aspect-[3/4]'
    } else if (project.category === 'Mixed-Media-Collage') {
      return 'aspect-[3/5]' // Länger/rechteckiger für Mixed Media
    } else {
      return 'aspect-square'
    }
  }

  return (
    <div 
      className="project-card group"
      onClick={() => onClick(project)}
    >
      <div className={`${getAspectRatio()} overflow-hidden bg-gray-100`}>
        <img
          src={project.images[0]}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${positionClass(project.thumbPosition)}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      <div className="p-4 pt-6">
        {/* Titel - größer und dicker */}
        <h3 className="font-serif text-base md:text-lg font-semibold tracking-normal leading-snug mb-2">
          {project.title}
        </h3>
        {/* Technik und Maße in separaten Zeilen für bessere Übersichtlichkeit */}
        {project.technique && (
          <p className="font-sans text-xs text-gray-800 mb-1">
            {project.technique}
          </p>
        )}
        {project.dimensions && (
          <p className="font-sans text-xs text-gray-800 mb-2">
            {project.dimensions}
          </p>
        )}
        {/* Fallback Beschreibung falls weder Technik noch Maße vorhanden */}
        {!project.technique && !project.dimensions && fallbackSubtitle && (
          <p className="font-sans text-xs text-gray-800 mb-2">
            {fallbackSubtitle}
          </p>
        )}
        {/* Nur das Jahr */}
        <p className="font-sans text-xs text-gray-600">
          {project.year}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
