

const Contact = () => {
  const navigateToImpressum = () => {
    window.location.hash = 'impressum'
  }

  const openBandcamp = () => {
    window.open('https://brink1.bandcamp.com/', '_blank')
  }

  return (
    <div>
      <h1 className="page-title">
        Kontakt
      </h1>

      <div className="max-w-2xl">
        {/* Kontaktdaten */}
        <div>
          <h2 className="font-serif text-lg font-medium uppercase tracking-wide mb-4">
            Adresse
          </h2>
          <div className="font-sans text-base text-gray-700 space-y-2 mb-8">
            <p>Kunstwerk Köln e.V.</p>
            <p>Thorsten Reichelt</p>
            <p>Deutz-Mülheimer-Str. 115</p>
            <p>Atelier/Raum 020 (Keller)</p>
            <p>51063 Köln</p>
          </div>
          <h2 className="font-serif text-lg font-medium uppercase tracking-wide mb-4">
            Kontakt
          </h2>
          <div className="font-sans text-base text-gray-700 space-y-2 mb-4">
            <p><strong>Telefon:</strong> +049 178-2572612</p>
            <p><strong>E-Mail:</strong> <a href="mailto:thorstenreichelt@gmx.de" className="text-red-700 hover:text-red-800 underline">thorstenreichelt@gmx.de</a></p>
          </div>

          <div className="mb-8">
            <button
              onClick={openBandcamp}
              className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-300 rounded transition-colors duration-200"
            >
              <svg className="w-24 h-6 mr-2" viewBox="0 0 140 30" fill="none">
                {/* Teal parallelogram - noch weiter nach unten gezogen */}
                <path d="M0 18L24 2H48L24 18H0Z" fill="#629aa9"/>
                {/* bandcamp text */}
                <text x="50" y="20" fontFamily="Arial, sans-serif" fontSize="16" fill="#333333" fontWeight="normal">bandcamp</text>
              </svg>
            </button>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button 
              onClick={navigateToImpressum}
              className="text-gray-700 hover:text-gray-900 underline cursor-pointer font-sans text-sm"
            >
              Impressum
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
