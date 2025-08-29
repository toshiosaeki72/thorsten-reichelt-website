import { artist } from '../data/artist'

interface CategoryNavProps {
  selectedCategory: string
  onCategorySelect: (category: string) => void
}

const CategoryNav = ({ selectedCategory, onCategorySelect }: CategoryNavProps) => {
  const categories = artist.categories.filter((c) => c !== 'Alle')
  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`nav-link ${
              selectedCategory === category
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default CategoryNav
