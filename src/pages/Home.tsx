import { artist } from '../data/artist'

const Home = () => {
  const navigateToWorks = () => {
    window.location.hash = 'works'
  }

  // Alle drei Startbilder verwenden
  const images = artist.startImages.filter(Boolean)

  return (
    <div>
      {/* Mobile: Direkt unter dem Header, Desktop: Zentriert im Viewport */}
      <div className="lg:h-[calc(100vh-4rem)] lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:items-stretch">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer group lg:h-full"
                onClick={navigateToWorks}
              >
                <div className="lg:h-full overflow-hidden">
                  <img
                    src={image}
                    alt={`Startbild ${index + 1}`}
                    className="w-full h-auto lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
