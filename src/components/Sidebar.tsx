import { useState, useEffect } from 'react'
import { exhibitions } from '../data/exhibitions'
import { artist } from '../data/artist'

interface SidebarProps {
  currentPage: string
  selectedYear: number | null
  onYearSelect: (year: number | null) => void
}

const Sidebar = ({ currentPage, selectedYear, onYearSelect }: SidebarProps) => {
  const [exhibitionsOpen, setExhibitionsOpen] = useState(false)
  const [worksOpen, setWorksOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const years = [...new Set(exhibitions.map(ex => ex.year))].sort((a, b) => b - a)

  const navigateTo = (page: string) => {
    window.location.hash = page
    setMobileMenuOpen(false) // Schließe Mobile-Menü nach Navigation
  }

  const handleYearClick = (year: number) => {
    if (selectedYear === year) {
      onYearSelect(null)
    } else {
      onYearSelect(year)
    }
    navigateTo('exhibitions')
  }

  const workCategories = artist.categories.filter(c => c !== 'Alle')

  // Aktuelle Kategorie aus der URL extrahieren und State aktualisieren
  useEffect(() => {
    const updateCurrentCategory = () => {
      const hash = window.location.hash
      if (hash.includes('works')) {
        const urlParams = new URLSearchParams(hash.split('?')[1] || '')
        const cat = urlParams.get('cat')
        setCurrentCategory(cat)
      } else {
        setCurrentCategory(null)
      }
    }

    // Initial ausführen
    updateCurrentCategory()

    // Bei Hash-Änderungen ausführen
    const handleHashChange = () => {
      updateCurrentCategory()
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Automatisch "Arbeiten" öffnen wenn auf Works-Seite
  useEffect(() => {
    if (currentPage === 'works') {
      setWorksOpen(true)
    }
  }, [currentPage])

  return (
    <>
      {/* Mobile Header - nur auf kleinen Bildschirmen sichtbar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-40">
        <div className="flex items-center justify-between">
          {/* Künstlername links */}
          <button
            onClick={() => navigateTo('home')}
            className="text-left hover:opacity-80 transition-opacity"
          >
            <h1 className="font-serif text-xl font-medium uppercase tracking-wider">
              Thorsten Reichelt
            </h1>
            <p className="font-sans text-xs text-gray-600 mt-1">
              Artist / Musician • Cologne
            </p>
          </button>

          {/* Burger-Menü Button rechts */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-white rounded shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile-Menü Overlay - nur auf kleinen Bildschirmen sichtbar */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-lg z-50 overflow-y-auto">
            <div className="p-8 pt-20"> {/* pt-20 für Header-Abstand */}
              <nav className="space-y-6">
                {/* Arbeiten + Kategorien */}
                <div>
                  <button
                    onClick={() => setWorksOpen(!worksOpen)}
                    className={`nav-link block w-full text-left flex items-center justify-between ${
                      currentPage === 'works' && !worksOpen ? 'font-semibold underline' : ''
                    }`}
                  >
                    <span onClick={() => navigateTo('works')}>Arbeiten</span>
                    <span className="text-xs">
                      {worksOpen ? '−' : '+'}
                    </span>
                  </button>

                  {worksOpen && (
                    <div className="mt-3 ml-4 space-y-3">
                      {workCategories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => navigateTo(`works?cat=${encodeURIComponent(cat)}`)}
                          className={`font-serif text-base font-medium uppercase tracking-wide transition-all duration-200 block w-full text-left ${
                            currentCategory === cat ? 'font-semibold underline' : ''
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ausstellungen */}
                <div>
                  <button
                    onClick={() => navigateTo('exhibitions')}
                    className={`nav-link block w-full text-left ${
                      currentPage === 'exhibitions' ? 'font-semibold underline' : ''
                    }`}
                  >
                    Ausstellungen
                  </button>
                </div>

                {/* Aktuell */}
                <div>
                  <button
                    onClick={() => navigateTo('news')}
                    className={`nav-link block w-full text-left ${
                      currentPage === 'news' ? 'font-semibold underline' : ''
                    }`}
                  >
                    Aktuell
                  </button>
                </div>

                {/* Atelier */}
                <div>
                  <button
                    onClick={() => navigateTo('studio')}
                    className={`nav-link block w-full text-left ${
                      currentPage === 'studio' ? 'font-semibold underline' : ''
                    }`}
                  >
                    Atelier
                  </button>
                </div>

                {/* Musik */}
                <div>
                  <button
                    onClick={() => navigateTo('music')}
                    className={`nav-link block w-full text-left ${
                      currentPage === 'music' ? 'font-semibold underline' : ''
                    }`}
                  >
                    Musik
                  </button>
                </div>

                {/* Infos / Besichtigung */}
                <div>
                  <button
                    onClick={() => navigateTo('visit')}
                    className={`nav-link block w-full text-left ${
                      currentPage === 'visit' ? 'font-semibold underline' : ''
                    }`}
                  >
                    Infos / Besichtigung
                  </button>
                </div>

                {/* Kontakt */}
                <div>
                  <button
                    onClick={() => navigateTo('contact')}
                    className={`nav-link block w-full text-left ${
                      currentPage === 'contact' ? 'font-semibold underline' : ''
                    }`}
                  >
                    Kontakt
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar - bleibt unverändert, wird auf kleinen Bildschirmen ausgeblendet */}
      <aside className="hidden lg:block fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-200 p-8 overflow-y-auto">
        <div className="mb-12">
          <button
            onClick={() => navigateTo('home')}
            className="text-left hover:opacity-80 transition-opacity"
          >
            <h1 className="font-serif text-2xl font-medium uppercase tracking-wider">
              Thorsten Reichelt
            </h1>
            <p className="font-sans text-sm text-gray-600 mt-2">
              Artist / Musician • Cologne
            </p>
          </button>
        </div>

        <nav className="space-y-6">
          {/* Arbeiten + Kategorien */}
          <div>
            <button
              onClick={() => setWorksOpen(!worksOpen)}
              className={`nav-link block w-full text-left flex items-center justify-between ${
                currentPage === 'works' && !worksOpen ? 'font-semibold underline' : ''
              }`}
            >
              <span onClick={() => navigateTo('works')}>Arbeiten</span>
              <span className="text-xs">
                {worksOpen ? '−' : '+'}
              </span>
            </button>

            {worksOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {workCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => navigateTo(`works?cat=${encodeURIComponent(cat)}`)}
                    className={`font-serif text-base font-medium uppercase tracking-wide transition-all duration-200 block w-full text-left ${
                      currentCategory === cat ? 'font-semibold underline' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Ausstellungen */}
          <div>
            <button
              onClick={() => setExhibitionsOpen(!exhibitionsOpen)}
              className={`nav-link block w-full text-left flex items-center justify-between ${
                currentPage === 'exhibitions' ? 'font-semibold underline' : ''
              }`}
            >
              <span onClick={() => navigateTo('exhibitions')}>Ausstellungen</span>
              <span className="text-xs">
                {exhibitionsOpen ? '−' : '+'}
              </span>
            </button>

            {exhibitionsOpen && (
              <div className="mt-3 ml-4 space-y-2">
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => handleYearClick(year)}
                    className={`font-serif text-sm font-medium uppercase tracking-wide transition-all duration-200 block w-full text-left ${
                      selectedYear === year ? 'font-semibold underline' : ''
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Aktuell */}
          <div>
            <button
              onClick={() => navigateTo('news')}
              className={`nav-link block w-full text-left ${
                currentPage === 'news' ? 'font-semibold underline' : ''
              }`}
            >
              Aktuell
            </button>
          </div>

          {/* Atelier */}
          <div>
            <button
              onClick={() => navigateTo('studio')}
              className={`nav-link block w-full text-left ${
                currentPage === 'studio' ? 'font-semibold underline' : ''
              }`}
            >
              Atelier
            </button>
          </div>

          {/* Musik */}
          <div>
            <button
              onClick={() => navigateTo('music')}
              className={`nav-link block w-full text-left ${
                currentPage === 'music' ? 'font-semibold underline' : ''
              }`}
            >
              Musik
            </button>
          </div>

          {/* Infos / Besichtigung */}
          <div>
            <button
              onClick={() => navigateTo('visit')}
              className={`nav-link block w-full text-left ${
                currentPage === 'visit' ? 'font-semibold underline' : ''
              }`}
            >
              Infos / Besichtigung
            </button>
          </div>

          {/* Kontakt */}
          <div>
            <button
              onClick={() => navigateTo('contact')}
              className={`nav-link block w-full text-left ${
                currentPage === 'contact' ? 'font-semibold underline' : ''
              }`}
            >
              Kontakt
            </button>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
