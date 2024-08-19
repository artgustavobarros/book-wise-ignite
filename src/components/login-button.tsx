'use client'
import Image from 'next/image'
import GoogleLogo from '@/app/assets/google-logo.svg'
import GithubLogo from '@/app/assets/github-logo.svg'
import VisitorLogo from '@/app/assets/visitor-logo.svg'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  provider: 'google' | 'github' | 'visitor'
}

export function LoginButton({ provider }: LoginButtonProps) {
  const providerMap = {
    google: {
      fn: () => signIn('google'),
      logo: GoogleLogo,
      text: 'Entrar com Google',
    },
    github: {
      fn: () => signIn('github'),
      logo: GithubLogo,
      text: 'Entrar com Github',
    },
    visitor: {
      fn: () => router.push('/dashboard/visitor'),
      logo: VisitorLogo,
      text: 'Acessar como visitante',
    },
  }

  const { fn, logo, text } = providerMap[provider]
  const router = useRouter()

  return (
    <button
      className="flex w-[372px] gap-5 rounded-lg bg-gray-700 p-5 transition-all hover:bg-gray-600"
      onClick={fn}
    >
      <Image src={logo} width={32} height={32} alt="google logo" />
      <span className="text-button-lg font-bold text-gray-200">{text}</span>
    </button>
  )
}
