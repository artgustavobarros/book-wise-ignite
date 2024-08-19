import { Book } from '@/@types/book'
import Image from 'next/image'
import dayjs from '@/lib/dayjs'

interface CommentsProps {
  data: Book
}

export function Comments({ data }: CommentsProps) {
  const { comments, user } = data
  return (
    <div className="flex flex-col gap-3">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="h-[178px] w-[564px] rounded-lg bg-gray-700 p-6"
        >
          <header className="mb-5 flex gap-4">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-horizontal">
              <Image
                src={user.photo}
                alt="user image"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
            </div>
            <span>
              <h2 className="text-heading-sm font-bold text-gray-100">
                {user.name}
              </h2>
              <span className="text-body-sm text-gray-400">
                {dayjs().to(dayjs(comment.created_at))}
              </span>
            </span>
          </header>
          <p className="text-body-sm text-gray-300">{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}
