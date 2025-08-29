

const Music = () => {
  const openBandcamp = () => {
    window.open('https://brink1.bandcamp.com/', '_blank')
  }

  return (
    <div>
      <h1 className="page-title">
        Musik
      </h1>

      <div className="max-w-3xl">
        <div className="prose prose-lg">
          <p className="font-sans text-base leading-relaxed text-gray-700 mb-8">
            Alle musikalischen Releases finden Sie auf Bandcamp. Dort sind sowohl aktuelle als auch ältere Veröffentlichungen verfügbar.
          </p>

          <div className="flex justify-start">
            <button
              onClick={openBandcamp}
              className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 rounded transition-colors duration-200"
            >
              <svg className="w-36 h-10 mr-2" viewBox="0 0 140 30" fill="none">
                {/* Teal parallelogram - noch weiter nach unten gezogen */}
                <path d="M0 18L24 2H48L24 18H0Z" fill="#629aa9"/>
                {/* bandcamp text */}
                <text x="50" y="20" fontFamily="Arial, sans-serif" fontSize="16" fill="#333333" fontWeight="normal">bandcamp</text>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
