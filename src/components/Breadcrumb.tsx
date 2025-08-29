interface BreadcrumbProps {
  currentPage: string
}

const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
  const getPageTitle = (page: string) => {
    switch (page) {
      case 'home':
        return 'Home'
      case 'news':
        return 'Aktuell'
      case 'works':
        return 'Arbeiten'
      case 'exhibitions':
        return 'Ausstellungen'
      case 'studio':
        return 'Atelier'
      case 'visit':
        return 'Infos / Besichtigung'
      case 'contact':
        return 'Kontakt'
      default:
        return 'Home'
    }
  }

  const navigateTo = (page: string) => {
    window.location.hash = page
  }

  return (
    <nav className="mb-8">
      <div className="flex items-center space-x-2 text-sm">
        <button
          onClick={() => navigateTo('home')}
          className="breadcrumb-link"
        >
          Home
        </button>
        {currentPage !== 'home' && (
          <>
            <span className="text-gray-400">›</span>
            <span className="font-sans text-sm uppercase tracking-wide">
              {getPageTitle(currentPage)}
            </span>
          </>
        )}
      </div>
    </nav>
  )
}

export default Breadcrumb
