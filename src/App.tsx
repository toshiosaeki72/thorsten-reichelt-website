import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Works from './pages/Works'
import Exhibitions from './pages/Exhibitions'
import Studio from './pages/Studio'
import Visit from './pages/Visit'
import Contact from './pages/Contact'
import News from './pages/News'
import Impressum from './pages/Impressum'
import Music from './pages/Music'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const getPageFromHash = () => {
    const raw = window.location.hash.slice(1) || 'home'
    const page = raw.split('?')[0] || 'home'
    return page
  }

  useEffect(() => {
    setCurrentPage(getPageFromHash())
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'news':
        return <News />
      case 'works':
        return <Works />
      case 'exhibitions':
        return <Exhibitions />
      case 'studio':
        return <Studio />
      case 'visit':
        return <Visit />
      case 'contact':
        return <Contact />
      case 'impressum':
        return <Impressum />
      case 'music':
        return <Music />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar 
        currentPage={currentPage} 
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
      />
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
