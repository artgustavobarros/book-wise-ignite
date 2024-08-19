'use client'
import { useBooks } from '@/contexts/books'
import { DetailedThumb } from './detailed-thumb'

export function AllBooksDetailed() {
  const { books } = useBooks()
  return (
    <div className="space-y-4">
      {books?.map((book) => <DetailedThumb key={book.name} book={book} />)}
    </div>
  )
}
