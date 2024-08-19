import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSans } from 'next/font/google'
import './globals.css'

const nunito = NunitoSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'Organizing your books',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="h-screen bg-gray-800 antialiased outline-none">
        {children}
      </body>
    </html>
  )
}
