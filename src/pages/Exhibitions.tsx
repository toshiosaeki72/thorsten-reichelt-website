import { exhibitions } from '../data/exhibitions'

const Exhibitions = () => {
  return (
    <div>
      <h1 className="page-title">
        Ausstellungen
      </h1>

      <div className="space-y-4">
        {[...exhibitions].reverse().map(exhibition => (
          <div key={exhibition.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-sans text-sm font-semibold text-gray-500">
                  {exhibition.month}/{exhibition.year}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold uppercase tracking-wide mb-1">
                  {exhibition.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 mb-1">
                  {exhibition.event}
                </p>
                <p className="font-sans text-sm text-gray-600">
                  {exhibition.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exhibitions
