import * as Tabs from '@radix-ui/react-tabs'
import { ElementType } from 'react'

interface NavItemProps {
  text: string
  icon: ElementType
}

// TENTAR COLOCAR O MOTION PARA ANIMAR A MUDANÇA, PARA ISSO VOU PRECISAR TRANSFORMAR ESTE BEFORE EM UM SPAN, LEMBRANDO DE COLOCAR RELATIVE NO TRIGGER
export function NavItem({ text, icon: Icon }: NavItemProps) {
  return (
    <Tabs.Trigger value={text} className="group">
      <span className="mb-6 flex cursor-pointer gap-3 text-button-md text-gray-400 transition-all before:block before:h-6 before:w-1 before:rounded-full before:bg-transparent before:content-[''] hover:font-bold hover:text-gray-100 group-data-[state=active]:font-bold group-data-[state=active]:text-gray-100 group-data-[state=active]:before:bg-gradient-horizontal">
        <Icon size={24} /> {text}
      </span>
    </Tabs.Trigger>
  )
}
