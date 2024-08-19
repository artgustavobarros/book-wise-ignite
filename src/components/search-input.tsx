'use client'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBooks } from '@/contexts/books'

const searchInputFormSchema = z.object({
  search: z.string(),
})

type SearchInputData = z.infer<typeof searchInputFormSchema>

export function SearchInput() {
  const { register, handleSubmit } = useForm<SearchInputData>({
    resolver: zodResolver(searchInputFormSchema),
  })

  const { onSearchBooksBySlug } = useBooks()

  function handleSearchInput(data: SearchInputData) {
    const slug = data.search
    onSearchBooksBySlug(slug)
  }

  return (
    <form
      className="flex w-[433px] items-center justify-between rounded border border-gray-500 bg-transparent px-5 py-[14px] focus-within:border-green-200"
      onSubmit={handleSubmit(handleSearchInput)}
    >
      <input
        placeholder="Buscar livro ou autor"
        className="bg-transparent text-body-sm text-gray-200 outline-none placeholder:text-body-sm placeholder:text-gray-400"
        {...register('search')}
      />
      <MagnifyingGlass className="h-5 w-5 text-gray-500" />
    </form>
  )
}
