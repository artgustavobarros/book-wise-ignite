import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { AllBooksDetailed } from '../books/all-books-detailed'
import { AllBooksSmallThumb } from '../books/all-books-small-thumb'

export function StartPage() {
  return (
    <div className="mt-[73px] flex flex-col">
      <header className="flex items-center gap-3 text-heading-lg font-bold text-gray-100">
        <ChartLineUp className="h-8 w-8 text-green-100" />
        Início
      </header>
      <div className="mt-10 flex gap-16">
        <div>
          <h2 className="mb-4 text-body-sm text-gray-100">
            Avaliações mais recentes
          </h2>
          <AllBooksDetailed />
        </div>
        <div>
          <h2 className="mb-4 text-body-sm text-gray-100">Livros populares</h2>
          <AllBooksSmallThumb />
        </div>
      </div>
    </div>
  )
}
