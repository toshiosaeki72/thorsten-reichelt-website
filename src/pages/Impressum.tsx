const Impressum = () => {
  return (
    <div>
      <h1 className="page-title">
        Impressum
      </h1>

      <div className="max-w-3xl">
        <div className="prose prose-lg">
          <h2 className="font-serif text-lg font-medium uppercase tracking-wide mb-4">
            Angaben
          </h2>
          
          <div className="font-sans text-base text-gray-700 space-y-2 mb-8">
            <p><strong>Thorsten Reichelt</strong></p>
            <p>Deutz-Mülheimer-Str. 115</p>
            <p>Atelier/Raum 020 (Keller)</p>
            <p>51063 Köln</p>
          </div>

          <h2 className="font-serif text-lg font-medium uppercase tracking-wide mb-4">
            Kontakt
          </h2>
          <div className="font-sans text-base text-gray-700 space-y-2 mb-8">
            <p><strong>Telefon:</strong> +049 178-2572612</p>
            <p><strong>E-Mail:</strong> <a href="mailto:thorstenreichelt@gmx.de" className="text-red-700 hover:text-red-800 underline">thorstenreichelt@gmx.de</a></p>
          </div>

          <h2 className="font-serif text-lg font-medium uppercase tracking-wide mb-4">
            Berufsbezeichnung
          </h2>
          <div className="font-sans text-base text-gray-700 space-y-2 mb-8">
            <p>Künstler</p>
          </div>

          <h2 className="font-serif text-lg font-medium uppercase tracking-wide mb-4">
            Verantwortlich für den Inhalt
          </h2>
          <div className="font-sans text-base text-gray-700 space-y-2">
            <p>Thorsten Reichelt</p>
            <p>Deutz-Mülheimer-Str. 115</p>
            <p>Atelier/Raum 020 (Keller)</p>
            <p>51063 Köln</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impressum
