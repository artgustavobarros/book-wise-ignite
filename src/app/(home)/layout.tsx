import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="p-10">{children}</div>
}
