import Image from 'next/image'
import brand from '../assets/img/brand.png'
import { LoginButton } from '@/components/login-button'
import { ButtonToAddAtDb } from '@/components/dev-buttons-to-add-at-db'

export default function Home() {
  return (
    <div className="grid grid-cols-[598px_1fr]">
      <section>
        <Image
          src={brand}
          alt=""
          width={598}
          height={912}
          quality={100}
          priority
        />
      </section>
      <section className="m-[0_auto] flex flex-col justify-center gap-10">
        <div>
          <h1 className="text-heading-lg font-bold text-gray-100">
            Boas vindas!
          </h1>
          <p className="text-body-md text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
        <div className="space-y-4">
          <LoginButton provider="google" />
          <LoginButton provider="github" />
          <LoginButton provider="visitor" />
          <ButtonToAddAtDb />
        </div>
      </section>
    </div>
  )
}
