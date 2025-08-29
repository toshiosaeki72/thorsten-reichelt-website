import { useState, useEffect } from 'react'
import { allProjects as allMixedMediaProjects } from '../data/dynamicMixedMedia'
import { allProjects as allAcrylicProjects } from '../data/dynamicAcrylic'
import { allProjects as allDrawingsProjects } from '../data/dynamicDrawings'
import type { Project } from '../data/projects'
import CategoryNav from '../components/CategoryNav'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'

const DEFAULT_CATEGORY = 'Abstrakte Acrylarbeiten'

function getCategoryFromHash(): string | null {
  const hash = window.location.hash
  const params = new URLSearchParams(hash.split('?')[1] || '')
  const cat = params.get('cat')
  return cat
}

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    const initialCat = getCategoryFromHash()
    if (initialCat) {
      setSelectedCategory(initialCat)
    } else {
      setSelectedCategory(DEFAULT_CATEGORY)
    }

    const onHashChange = () => {
      const cat = getCategoryFromHash()
      if (cat) {
        setSelectedCategory(cat)
      } else {
        setSelectedCategory(DEFAULT_CATEGORY)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const matchesCategory = (project: Project, category: string) => {
    switch (category) {
      case 'Abstrakte Acrylarbeiten':
        return project.category === 'Acryl'
      case 'Mixed-Media/Collagen':
        return project.category === 'Mixed Media' || project.category === 'Collage'
      case 'Zeichnungen':
        return project.category === 'Zeichnung (Grafit)'
      default:
        return project.category === category
    }
  }

  const sortProjects = (list: Project[]) =>
    [...list].sort((a, b) => {
      const ao = a.sortOrder ?? Number.POSITIVE_INFINITY
      const bo = b.sortOrder ?? Number.POSITIVE_INFINITY
      if (ao !== bo) return ao - bo
      return b.year - a.year
    })

  const allProjects: Project[] = [...allAcrylicProjects, ...allMixedMediaProjects, ...allDrawingsProjects]
  const filteredProjects = sortProjects(allProjects.filter(p => matchesCategory(p, selectedCategory)))

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedProject(null)
  }

  return (
    <div>
      <h1 className="page-title">
        Arbeiten
      </h1>

      <CategoryNav 
        selectedCategory={selectedCategory}
        onCategorySelect={(cat) => {
          setSelectedCategory(cat)
          const base = '#works'
          const params = new URLSearchParams()
          if (cat) params.set('cat', cat)
          window.location.hash = params.toString() ? `${base}?${params.toString()}` : base
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>

      <Lightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  )
}

export default Works
