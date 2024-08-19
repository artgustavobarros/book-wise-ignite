import { Tags } from '../tags'
import { Binoculars } from '@phosphor-icons/react/dist/ssr'
import { SearchInput } from '../search-input'
import { GridBooks } from '../books/grid-books'

export function ExplorerPage() {
  return (
    <div className="mt-[73px] flex flex-col">
      <header className="mb-12 flex items-center justify-between text-heading-lg font-bold text-gray-100">
        <span className="flex items-center gap-3">
          <Binoculars className="h-8 w-8 text-green-100" />
          Explorar
        </span>
        <SearchInput />
      </header>
      <Tags />
      <GridBooks />
    </div>
  )
}
