

const News = () => {
  return (
    <div>
      <h1 className="page-title">
        Aktuell
      </h1>

      <div className="space-y-8 mt-24">
        {/* Nächste Ausstellungen */}
        <div>
          <h2 className="section-title">
            Nächste Ausstellungen
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wide mb-2">
              30-jährige Geburtstagsfeier Kunstwerk Köln
            </h3>
            <p className="font-sans text-sm text-gray-600">
              28.08.2025 - 31.08.2025
            </p>
          </div>
        </div>

        {/* Offene Ateliers */}
        <div>
          <h2 className="section-title">
            Offene Ateliers
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wide mb-2">
              Offene Ateliers Köln
            </h3>
            <p className="font-sans text-sm text-gray-600">
              12.09.-14.09.2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
