'use client'
import { BooksProvider } from '@/contexts/books'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <BooksProvider>{children}</BooksProvider>
}
