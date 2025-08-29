import { Project } from '../data/projects'

interface LightboxProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const Lightbox = ({ project, isOpen, onClose }: LightboxProps) => {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-6xl w-full max-h-[95vh] flex flex-col">
        {/* Header mit Titel und Schließen-Button */}
        <div className="flex justify-between items-start p-4 pb-2">
          <div>
            <h2 className="font-serif text-xl font-light uppercase tracking-wide mb-1">
              {project.title}
            </h2>
            <p className="font-sans text-sm text-gray-600">
              {project.year} • {project.category}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl font-light hover:text-gray-600 transition-colors ml-4"
          >
            ×
          </button>
        </div>

        {/* Bild - angepasste Größe */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={project.images[0]}
              alt={project.title}
              className="max-w-full max-h-[60vh] object-contain"
            />
          </div>
        </div>

        {/* Beschreibung unter dem Bild - zentriert */}
        <div className="p-4 pt-2 border-t border-gray-100">
          <div className="space-y-2 text-center">
            {project.description && (
              <div>
                <h3 className="font-serif text-base font-light uppercase tracking-wide mb-1">
                  Beschreibung
                </h3>
                <p className="font-sans text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
            
            {project.technique && (
              <p className="font-sans text-sm">
                {project.technique}
              </p>
            )}
            
            {project.dimensions && (
              <p className="font-sans text-sm">
                {project.dimensions}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
