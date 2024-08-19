'use client'
import { useBooks } from '@/contexts/books'
import { useEffect, useState } from 'react'

export function Tags() {
  const { onSearchBooksByCategory } = useBooks()

  const [categories, setCategories] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState('Tudo')

  async function getCategories() {
    const response = await fetch('http://localhost:3000/api/books/categories')
    const { categories } = await response.json()
    setCategories(categories)
  }

  function handleChangeSelectedCategory(category: string) {
    setSelectedTag(category)
    onSearchBooksByCategory(category)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="flex flex-wrap gap-3">
      {categories?.map((category) => (
        <button
          key={category}
          onClick={() => handleChangeSelectedCategory(category)}
          className={`flex min-w-max cursor-pointer items-center justify-center rounded-full border border-purple-100 px-4 text-body-md capitalize transition-all hover:bg-purple-200 hover:text-gray-100 ${selectedTag === category ? 'border-purple-200 bg-purple-200 text-gray-100' : 'bg-transparent text-purple-100'}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
