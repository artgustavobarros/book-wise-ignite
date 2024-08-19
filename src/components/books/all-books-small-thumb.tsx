'use client'
import { useBooks } from '@/contexts/books'
import { SmallThumb } from './small-thumb'

export function AllBooksSmallThumb() {
  const { books } = useBooks()

  return (
    <div className="space-y-3">
      {books.map((book) => (
        <SmallThumb key={book.name} book={book} />
      ))}
    </div>
  )
}
