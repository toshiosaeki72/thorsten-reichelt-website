const Visit = () => {
  const navigateToContact = () => {
    window.location.hash = 'contact'
  }

  return (
    <div>
      <h1 className="page-title">
        Infos / Besichtigung
      </h1>

      <div className="max-w-3xl">
        <div className="prose prose-lg">
          <p className="font-sans text-base leading-relaxed text-gray-700 mb-6">
            Melden Sie sich gerne (per{' '}
            <button 
              onClick={navigateToContact}
              className="text-red-700 hover:text-red-800 underline cursor-pointer"
            >
              Mail
            </button>
            ,{' '}
            <button 
              onClick={navigateToContact}
              className="text-red-700 hover:text-red-800 underline cursor-pointer"
            >
              WhatsApp
            </button>
            {' '}oder{' '}
            <button 
              onClick={navigateToContact}
              className="text-red-700 hover:text-red-800 underline cursor-pointer"
            >
              Telefon
            </button>
            ) für Terminabsprachen zur Besichtigung der Bilder vor Ort in meinem Atelier. Preise auf Anfrage!
          </p>
          
          <p className="font-sans text-base leading-relaxed text-gray-700">
            Außer den Originalbildern (auf Leinwand/Karton/Papier) gibt es auch limitierte/signierte Nachdrucke von fast jedem Werk.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Visit
