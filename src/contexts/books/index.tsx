'use client'

import { Book } from '@/@types/book'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface BookContextInterface {
  books: Book[]
  onSearchBooksBySlug: (slug: string) => void
  onSearchBooksByCategory: (category: string) => void
}

const BookContext = createContext({} as BookContextInterface)

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([])

  async function getAllBooks() {
    const response = await fetch('http://localhost:3000/api/books/all', {
      next: { revalidate: 3600 },
    })
    const { books } = await response.json()
    setBooks(books)
  }

  async function onSearchBooksBySlug(slug: string) {
    const response = await fetch(
      `http://localhost:3000/api/books?search=${slug}`,
      {
        next: { revalidate: 3600 },
      },
    )
    const { books } = await response.json()
    setBooks(books)
  }

  async function onSearchBooksByCategory(category: string) {
    const response = await fetch(
      `http://localhost:3000/api/books?category=${category}`,
      {
        next: { revalidate: 3600 },
      },
    )
    const { books } = await response.json()
    setBooks(books)
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <BookContext.Provider
      value={{ books, onSearchBooksBySlug, onSearchBooksByCategory }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBooks = () => useContext(BookContext)
