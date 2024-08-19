'use client'

import { useBooks } from '@/contexts/books'
import { SmallThumb } from './small-thumb'

export function GridBooks() {
  const { books } = useBooks()
  return (
    <div className="mt-12 grid grid-cols-[repeat(3,324px)] gap-[10px]">
      {books.map((book) => (
        <SmallThumb key={book.name} book={book} />
      ))}
    </div>
  )
}
