/* eslint-disable camelcase */
'use client'
import Image from 'next/image'
import { RateStars } from './rate-stars'
import dayjs from '@/lib/dayjs'

import { reduceArray } from '@/app/utils/reduce-array'
import * as Dialog from '@radix-ui/react-dialog'
import { SidePanel } from '../dialog/side-panel'
import { Book } from '@/@types/book'

interface DetailedThumbProps {
  book: Book
}

export function DetailedThumb({ book }: DetailedThumbProps) {
  const timeAgo = dayjs().to(dayjs(book.createdAt))

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <section className="h-[280px] w-[608px] space-y-6 rounded-lg bg-gray-700 p-6">
          <header className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-vertical">
                <Image
                  src={book.user!.photo}
                  alt="user photo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-body-md text-gray-100">
                  {book.user!.name}
                </h2>
                <span className="text-body-sm text-gray-400">{timeAgo}</span>
              </div>
            </div>
            <span>
              <RateStars rate={reduceArray(book.rate)} />
            </span>
          </header>
          <div className="flex items-start gap-5">
            <div className="h-[152px] w-[108px]">
              <Image
                src={book.thumb}
                alt="book front photo"
                width={108}
                height={152}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-start">
              <h1 className="text-heading-xs font-bold text-gray-100">
                {book.name}
              </h1>
              <span className="mb-5 block text-body-sm text-gray-400">
                {book.author}
              </span>
              <p className="line-clamp-3 text-justify text-body-sm text-gray-300">
                {book.description}
              </p>
            </div>
          </div>
        </section>
      </Dialog.Trigger>
      <SidePanel book={book} />
    </Dialog.Root>
  )
}
