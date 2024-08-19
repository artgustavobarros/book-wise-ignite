import Image from 'next/image'
import { RateStars } from './rate-stars'

import { reduceArray } from '@/app/utils/reduce-array'
import { Book } from '@/@types/book'

interface SmallThumbProps {
  book: Book
}

export function SmallThumb({ book }: SmallThumbProps) {
  return (
    <section className="flex h-[130px] w-[324px] gap-4 rounded-lg bg-gray-700 px-5 py-4">
      <Image src={book.thumb} alt="book front photo" width={64} height={94} />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-heading-xs font-bold text-gray-100">
            {book.name}
          </h1>
          <span className="block text-body-sm text-gray-400">
            {book.author}
          </span>
        </div>

        <RateStars rate={reduceArray(book.rate)} />
      </div>
    </section>
  )
}
