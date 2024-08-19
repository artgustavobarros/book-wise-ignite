import Image from 'next/image'
import { RateStars } from '../books/rate-stars'
import { reduceArray } from '@/app/utils/reduce-array'

import { BookmarkSimple, BookOpen } from '@phosphor-icons/react/dist/ssr'
import { categoryReducer } from '@/app/utils/category-reducer'
import { Book } from '@/@types/book'

interface DialogThumbProps {
  book: Book
}

export function DialogThumb({ book }: DialogThumbProps) {
  return (
    <div className="mb-10 h-[414px] w-[564px] rounded-[10px] bg-gray-700 p-8">
      <div className="mb-10 flex gap-8">
        <div className="h-[242px] w-[171px]">
          <Image
            src={book.thumb}
            alt="book image"
            width={171}
            height={242}
            className="rounded-[10px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-between">
          <span>
            <h2 className="mb-2 text-heading-sm font-bold text-gray-100">
              {book.name}
            </h2>
            <p className="text-body-md text-gray-300">{book.author}</p>
          </span>
          <span>
            <RateStars rate={reduceArray(book.rate)} />
            <p className="text-body-sm text-gray-400">
              {book.rate.length} avaliações
            </p>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[60px] border-t border-gray-600 py-6">
        <div className="flex items-center gap-5">
          <BookmarkSimple className="h-6 w-6 text-green-100" />
          <div>
            <h2 className="text-body-sm text-gray-300">Categorias</h2>
            <p className="text-heading-xs font-bold capitalize text-gray-200">
              {categoryReducer(book.category)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BookOpen className="h-6 w-6 text-green-100" />
          <div>
            <h2 className="text-body-sm text-gray-300">Páginas</h2>
            <p className="text-heading-xs font-bold text-gray-200">
              {book.pageNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
