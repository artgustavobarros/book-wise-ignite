import * as Dialog from '@radix-ui/react-dialog'
import { DialogThumb } from './dialog-thumb'
import { Comments } from './comments'
import { Book } from '@/@types/book'

interface SidePanelProps {
  book: Book
}

export function SidePanel({ book }: SidePanelProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 backdrop-blur-[1px]" />
      <Dialog.Content>
        <Dialog.Title className="sr-only">comments panel</Dialog.Title>
        <Dialog.Description className="sr-only">
          comments panel
        </Dialog.Description>
        <div className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-600 fixed right-0 top-0 h-screen w-[660px] overflow-x-hidden overflow-y-scroll bg-gray-800 px-12 py-16">
          <DialogThumb book={book} />
          <Comments data={book} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
