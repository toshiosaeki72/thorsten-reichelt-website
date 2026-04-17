

const News = () => {
  return (
    <div>
      <h1 className="page-title">
        Aktuell
      </h1>

      <div className="space-y-8 mt-24">
        {/* Offene Ateliers */}
        <div>
          <h2 className="section-title">
            Offene Ateliers
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wide mb-2">
              Ausstellung zur Mülheimer Nacht
            </h3>
            <p className="font-sans text-sm text-gray-600">
              25.04.2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
