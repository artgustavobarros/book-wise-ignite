import Image from 'next/image'
import BookWiseLogo from '@/app/assets/book-wise-logo.svg'
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react/dist/ssr'
import { NavItem } from './nav-item'

export function Sidebar() {
  return (
    <nav className="relative h-screen bg-[url('/img/sidebar-background.png')] bg-no-repeat pl-12 pt-10">
      <Image
        src={BookWiseLogo}
        alt="Book Wise Logo"
        height={32}
        width={128}
        className="mb-16"
      />
      <NavItem text="Início" icon={ChartLineUp} />
      <NavItem text="Explorar" icon={Binoculars} />
      <span className="traistion-all group absolute bottom-6 flex cursor-pointer items-center gap-3 text-button-md text-gray-400 hover:font-bold hover:text-gray-100">
        Fazer login
        <SignIn
          size={24}
          className="group-hover:font-bold group-hover:text-green-100"
        />
      </span>
    </nav>
  )
}
